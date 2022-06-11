function add(...nums) {
    return nums.reduce((pre, cur, index) => {
        console.log('index :', index);
        console.log('pre :', pre);
        console.log('cur :', cur);
        return pre + cur;
    })
}
console.log('add(4, 5, 3) :', add(4, 5, 3));