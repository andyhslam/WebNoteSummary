namespace SetSpace {
  /**
   * 集合是由一组无序且唯一(即不能重复)的项组成的，可以想象成集合是一个既没有重复元素，也没有顺序概念的数组。
   * 天然去重，引用类型除外；还内置iterator迭代器，支持遍历。
   * 属性size：返回字典所包含的元素个数
   * 操作方法：
   * 1. add(value)：添加某个值，返回 Set 结构本身。
   * 2. delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
   * 3. has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
   * 4. clear()：清除所有成员，无返回值。
   */
  let set: Set<number> = new Set([1, 2, 3, 4, 3, 2, 1])
  let arr1 = [...set]
  let arr2 = Array.from(set)
  console.log(set, arr1, arr2)
}

namespace MapSpace {
  /**
   * 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键，
   * 是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适
   */
  let obj: any = { name: '阿森纳' }
  let sen = obj
  let map: Map<object, any> = new Map()
  map.set(obj, 'arsenal')
  obj = null
  sen = null
  // 只要obj被释放，map的值就消失
  console.log('map', map.get(obj))
}

// weakSet 和 weakMap 的键都是弱引用，不会被计入垃圾回收策略
namespace WeakSpace {
  /**
   * 首先obj引用了这个对象 + 1，aahph也引用了 + 1，wmap也引用了，但是不会  + 1，因为他是弱引用，不会计入垃圾回收。
   * 因此 obj 和 aahph 释放了该引用，weakMap的值也会随着消失的。
   * 但是有个问题你会发现控制台能输出，值是取不到的，应为V8的GC回收是需要一定时间的，
   * 你可以延长到500ms看一看，并且为了避免这个问题不允许读取键值，也不允许遍历，同理weakSet也一样。
   */
  let obj: any = { name: '利物浦' } // 此时obj的引用次数是1
  let aahph: any = obj // 此时obj的引用次数是2
  // weakmap的key只能是引用类型
  let weakmap: WeakMap<object, any> = new WeakMap()
  weakmap.set(obj, '青树') // 此时obj的引用次数还是2
  obj = null // 引用次数减1
  aahph = null
  // 只要obj被释放，weakMap的值就消失
  setTimeout(() => {
    console.log(weakmap)
    console.log(weakmap.get(obj))
  }, 500)

  // 只要obj被释放，weakset的值就消失
  let weakset: WeakSet<object> = new WeakSet([obj])
}
