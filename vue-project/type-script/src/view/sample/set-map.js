var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var SetSpace;
(function (SetSpace) {
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
    var set = new Set([1, 2, 3, 4, 3, 2, 1]);
    var arr1 = __spreadArray([], set, true);
    var arr2 = Array.from(set);
    console.log(set, arr1, arr2);
})(SetSpace || (SetSpace = {}));
var MapSpace;
(function (MapSpace) {
    /**
     * 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键，
     * 是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适
     */
    var obj = { name: '阿森纳' };
    var map = new Map();
    map.set(obj, 'arsenal');
})(MapSpace || (MapSpace = {}));
// weakSet 和 weakMap 的键都是弱引用，不会被计入垃圾回收策略
var WeakSpace;
(function (WeakSpace) {
    /**
     * 首先obj引用了这个对象 + 1，aahph也引用了 + 1，wmap也引用了，但是不会  + 1，因为他是弱引用，不会计入垃圾回收。
     * 因此 obj 和 aahph 释放了该引用，weakMap的值也会随着消失的。
     * 但是有个问题你会发现控制台能输出，值是取不到的，应为V8的GC回收是需要一定时间的，
     * 你可以延长到500ms看一看，并且为了避免这个问题不允许读取键值，也不允许遍历，同理weakSet也一样。
     */
    var obj = { name: '利物浦' }; // 此时obj的引用次数是1
    var aahph = obj; // 此时obj的引用次数是2
    // weakmap的key只能是引用类型
    var weakmap = new WeakMap();
    weakmap.set(obj, '青树'); // 此时obj的引用次数还是2
    obj = null; // 引用次数减1
    aahph = null;
    // 只要obj被释放，weakMap的值就消失
    setTimeout(function () {
        console.log(weakmap);
        console.log(weakmap.get(obj));
    }, 500);
    // 只要obj被释放，weakset的值就消失
    var weakset = new WeakSet([obj]);
})(WeakSpace || (WeakSpace = {}));
