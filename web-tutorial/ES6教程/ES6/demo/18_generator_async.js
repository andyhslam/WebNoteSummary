// 1. 原生用node.js实现读取文件，写入文件
// 要求：读取两个文件的内容，并把两个文件的内容写入到另外一个文件中
const fs = require('fs')
const { join } = require('path')
const fileName1 = join(__dirname, '02_const.js')
const fileName2 = join(__dirname, '03_array_desctructuring.js')
const writeFileName = join(__dirname, 'a.js')

fs.readFile(fileName1, 'utf8', function(error, data) {
    if (error) {
        throw error;
    }
    fs.readFile(fileName2, 'utf8', (error2, data2) => {
        if (error2) {
            throw error2;
        }
        const dataFileString = data + data2;
        fs.writeFile(writeFileName, dataFileString, 'utf8', function(err) {
            if (err) {
                throw err;
            }
            console.log('write finish!');
        })
    })
})

// 2. 使用Promise实现
const fs = require('fs')
const { join } = require('path')
const fileName1 = join(__dirname, '02_const.js')
const fileName2 = join(__dirname, '03_array_desctructuring.js')
const writeFileName = join(__dirname, 'a.js')

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            error ? reject(error) : resolve(data);
        })
    })
}

let data;
readFilePromise(fileName1)
    .then(data1 => {
        data += data1
        return readFilePromise(fileName2)
    }).then(data2 => {
        data += data2
        console.log('data :', typeof data);
        return data
    }).then(data3 => {
        fs.writeFile(writeFileName, data3, 'utf8', error => {
            console.log('data3 :', typeof data3);
            console.log('data === data3 :', data === data3); // true
            console.log('error :', error);
        })
    }).catch(err => {
        console.log('出现未处理的异常！');
        console.log('err :', err);
    })

// 3. 原生generator函数实现
const fs = require('fs')
const { join } = require('path')
const fileName1 = join(__dirname, '02_const.js')
const fileName2 = join(__dirname, '03_array_desctructuring.js')
const writeFileName = join(__dirname, 'a.js')
let g;

function* joinFile() {
    let fileData1 = yield fs.readFile(fileName1, 'utf8', (error, data) => {
        g && g.next(data);
    })
    let fileData2 = yield fs.readFile(fileName2, 'utf8', (error, data) => {
        g && g.next(data);
    })
    fs.writeFile(writeFileName, fileData1 + fileData2, error => {
        console.log('写入成功！');
    })
}
g = joinFile();
g.next();

// 4. Thunk函数，把回调函数提到generator函数外面
const fs = require('fs')
const { join } = require('path')
const fileName1 = join(__dirname, '02_const.js')
const fileName2 = join(__dirname, '03_array_desctructuring.js')
const writeFileName = join(__dirname, 'a.js')

function readFileThunk(fileName) {
    return function(cb) {
        return fs.readFile(fileName, 'utf8', cb);
    }
}
// readFileThunk(fileName1)((error, data) => {
//     console.log('data :', data);
// })

function* joinFileThunk() {
    let data1 = yield readFileThunk(fileName1); // {value: function, done: false}
    let data2 = yield readFileThunk(fileName2);
    fs.writeFile(writeFileName, data1 + data2, 'utf8', error => {
        console.log('error :', error);
    })
}
let gen = joinFileThunk();
gen.next().value((error, data) => {
    gen.next(data).value((error, data) => {
        gen.next(data);
    })
})

// 5. Thunk的自动执行(递归调用)
const fs = require('fs')
const { join } = require('path')
const fileName1 = join(__dirname, '02_const.js')
const fileName2 = join(__dirname, '03_array_desctructuring.js')
const writeFileName = join(__dirname, 'a.js')

function readFileThunk(fileName) {
    return function(cb) {
        return fs.readFile(fileName, 'utf8', cb);
    }
}

function* joinFileThunk() {
    let data1 = yield readFileThunk(fileName1); // {value: function, done: false}
    let data2 = yield readFileThunk(fileName2);
    fs.writeFile(writeFileName, data1 + data2, 'utf8', error => {
        console.log('error :', error);
    })
}

function run(gen) {
    let g = gen();

    function nextStep(data) {
        let temp = g.next(data);
        if (!temp.done) {
            temp.value(function(error, data) {
                nextStep(data);
            })
        }
    }
    nextStep();
}
run(joinFileThunk);

// 6. 通过Promise来改造自执行
// co库(Promise + Thunk)