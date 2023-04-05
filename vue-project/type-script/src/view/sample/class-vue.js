// class的基本用法：继承和类型约束implements
// 类的修饰符：readonly、private、protected、public
// readonly修饰符：只能应用在索引签名或者属性上面，只能读取
// private修饰符：代表定义的变量是私有的，只能在内部访问，不能在外部和继承的子类中访问
// protected修饰符：代表定义的变量是私有的，只能在内部和继承的子类中访问，不能在外部访问
// public修饰符：代表定义的变量是公有的，可以在内部、外部和继承的子类中访问，如果不写默认就是public
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 在父类实现虚拟dom
var Dom = /** @class */ (function () {
    function Dom() {
    }
    // 创建真实dom节点的方法
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    // 填充文本的方法
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    // 渲染函数：把js描述的dom变成真实的dom
    Dom.prototype.render = function (data) {
        var _this = this;
        // 先获取根节点
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                // 递归：一直创建children的节点
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            // 把文本塞到dom节点里面
            this.setText(root, data.text || null);
        }
        return root;
    };
    return Dom;
}());
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = 
        // 如果要接收默认的参数或者调用默认的方法，都可以在构造函数里面初始化
        _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.prototype.init = function () {
        // 虚拟dom就是通过js去渲染真实dom
        var data = {
            tag: 'div',
            text: '我是父节点，没有渲染此文本',
            children: [
                {
                    tag: 'section',
                    text: '我是子节点1'
                },
                {
                    tag: 'section',
                    text: '我是子节点2'
                },
                {
                    tag: 'section',
                    text: '我是子节点3'
                },
            ]
        };
        var app = typeof this.options.el === 'string'
            ? document.querySelector(this.options.el)
            : this.options.el;
        // 把生成的真实dom节点塞进app
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(data));
    };
    return Vue;
}(Dom));
new Vue({
    el: '#app'
});
