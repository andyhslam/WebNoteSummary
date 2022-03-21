/**
1.shallowReactive，shallowRef(非递归监听)
2.reactive，ref(递归监听)
3.shallowReadonly
4.readonly
*/

function shallowReadonly(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key];
    },
    set(obj, key, val) {
      console.warn(`${key}是只读的，不能赋值`);
    },
  });
}

function shallowRef(val) {
  return shallowReactive({ value: val });
}

function shallowReactive(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key];
    },
    set(obj, key, val) {
      obj[key] = val;
      console.log('更新UI界面');
      return true;
    },
  });
}

function readonly(obj) {
  if (typeof obj === 'object') {
    if (obj instanceof Array) {
      // 如果是一个数组，就取出数组中的每一个元素，再判断每一个元素是否又是一个对象，
      // 如果又是一个对象，那么也需要包装成Proxy
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          obj[index] = readonly(item);
        }
      });
    } else {
      // 如果是一个对象，就取出对象的属性值，再判断对象的属性值是否又是一个对象，
      // 如果又是一个对象，那么也需要包装成Proxy
      for (let key in obj) {
        let item = obj[key];
        if (typeof item === 'object') {
          obj[key] = readonly(item);
        }
      }
    }
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key];
      },
      set(obj, key, val) {
        console.warn(`${key}是只读的，不能赋值`);
      },
    });
  } else {
    console.warn(`${obj} is not object`);
  }
}

function ref(val) {
  return reactive({ value: val });
}

function reactive(obj) {
  if (typeof obj === 'object') {
    if (obj instanceof Array) {
      // 如果是一个数组，就取出数组中的每一个元素，再判断每一个元素是否又是一个对象，
      // 如果又是一个对象，那么也需要包装成Proxy
      obj.forEach((item, index) => {
        if (typeof item === 'object') {
          obj[index] = reactive(item);
        }
      });
    } else {
      // 如果是一个对象，就取出对象的属性值，再判断对象的属性值是否又是一个对象，
      // 如果又是一个对象，那么也需要包装成Proxy
      for (let key in obj) {
        let item = obj[key];
        if (typeof item === 'object') {
          obj[key] = reactive(item);
        }
      }
    }
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key];
      },
      set(obj, key, val) {
        obj[key] = val;
        console.log('更新UI界面');
        return true;
      },
    });
  } else {
    console.warn(`${obj} is not object`);
  }
}

let obj = {
  a: 'a',
  gf: {
    b: 'b',
    f: {
      c: 'c',
      s: {
        d: 'd',
      },
    },
  },
};

let arr = [
  { id: 1, name: '鲁班', attr: { age: 18 } },
  { id: 2, name: '虞姬' },
];

/* 验证shallowReactive
let state = shallowReactive(obj);
state.a = '1';
state.gf.b = '2';
state.gf.f.c = '3';
state.gf.f.s.d = '4';
*/

/* 验证shallowRef
let state = shallowRef(obj);
// state.value.a = '1';
// state.value.gf.b = '2';
// state.value.gf.f.c = '3';
// state.value.gf.f.s.d = '4';
state.value = { // value才是第一层
  a: '1',
  gf: {
    b: '2',
    f: {
      c: '3',
      s: {
        d: '4',
      },
    },
  },
};
*/

/* 通过对象验证reactive
let state = reactive(obj);
state.a = '1';
state.gf.b = '2';
state.gf.f.c = '3';
state.gf.f.s.d = '4';
*/

/* 通过数组验证reactive
let state = reactive(arr);
state[0].name = 'lx';
state[0].attr.age = 20;
state[1].id = 3;
*/

/* 通过对象验证ref
let state = ref(obj);
state.value.a = '1';
state.value.gf.b = '2';
state.value.gf.f.c = '3';
state.value.gf.f.s.d = '4';
*/

/* 通过数组验证ref
let state = ref(arr);
state.value[0].name = 'lx';
state.value[0].attr.age = 20;
state.value[1].id = 3;
*/

/* 验证shallowReadonly
let state = shallowReadonly(obj);
state.a = '1';
state.gf.b = '2';
*/

/* 验证readonly
let state = readonly(obj);
state.a = '1';
state.gf.b = '2';
*/
