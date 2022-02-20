window.onload = function () {
    // 使用:指定变量的类型，:的前后有没有空格都可以

    // 如果是普通类型，在赋值过程中改变类型是不被允许的
    let flag: boolean = false; //布尔类型
    let num: number = 15; //数值类型
    let str: string = 'abc'; //字符串类型
    let str2: string = `hello,${str}`;
    let msg: string = `hello,${str},${num}`;
    let u: undefined = undefined;
    let n: null = null;

    function sum(x: number, y: number) {
        return x + y
    }
    sum(1, 2)
    sum(1, '2')

    // 联合类型：表示取值可以为多种类型中的一种
    let x1: number | string = 1;
    x1 = '1'

    // 如果是any类型，则允许被赋值为任意类型
    let x2: any = true;
    x2 = 2
    x2 = '2'

    // 引用类型：数组、对象、函数
    // 数组类型的定义
    // 1、使用 类型+方括号 来表示数组
    let arr1: number[] = [1, 2, 3, 4, 5]

    // 数组的项中不允许出现其它的类型
    let arr21: number[] = [1, '2', 3, '4', 5] //不行

    // 定义多个类型
    let arr22: (number | string)[] = [1, '2', 3, '4', 5]

    // 2、泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
    // 泛型变量T：T表示任何类型

    // 数组泛型
    let arr3: Array<number> = [1, 2, 3]

    // 定义多个类型
    let arr4: Array<number | string> = ['1', 2, 3]

    // 对象的类型-接口
    // 接口(Interfaces)可以用于对 对象的形状 进行描述，是对行为的抽象
    // 接口的定义

    // 接口首字母大写
    interface IPerson {
        name: string; //必选属性
        age?: number; //可选属性
        // 注意：一旦定义任意属性，那么必选属性和可选属性都必须是它的子属性
        [propName: string]: any; //任意属性：一个接口允许有任意的属性
    }

    // 对象受到接口的约束：定义的变量比接口少了一些属性是不允许的
    let tom: IPerson = {
        name: 'Tom',
        age: 18,
        id: 1,
        fun: function () { return 10 }
    }

    // 类和接口的区别：
    // 1、类是用来声明和实现具体方法的
    // 2、接口是用来声明成员方法，不会做具体的实现，只是一种规范

    // 函数的类型定义
    // 一个函数有输入类型和输出类型，要在TypeScript中对其进行约束，需要把输入和输出都考虑到
    function f1(n1: number, n2: number): number {
        return n1 + n2
    }
    f1(2, 3)

    function f2(n1: number, n2: number): number[] {
        return [n1, n2]
    }
    f2(2, 3)

    // 参数默认值和可选参数，没有返回值(void)
    // 注意：必选参数不能位于可选参数后，可选参数一定是放在最后，也就是说可选参数后面不允许再出现必选参数
    function f3(n1: number = 1, n2?: number): void {
        if (n1 + n2 > 10) {
            console.log(123);
        }
    }
    f3(2)
    f3(2, 3)

}