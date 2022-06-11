let str: String = 'TS';
let muban: String = `web ${str}`;
console.log(muban);

let num: Number = Infinity;
console.log(num);

let b: Boolean = true;
let ba: Boolean = Boolean(1);
let bao: Boolean = new Boolean(1);
console.log(ba);

// 4.空值类型
let uv: void = undefined;
let nv: void = null;
console.log(uv, nv);

function fnVoid(): void{
  console.log(123);
}
fnVoid();

// 5.null和undefined类型
let u: undefined = undefined;
let n: null = null;

// void和undefined和null的最大区别
// undefined和null是所有类型的子类型，也就是说undefined和null类型的变量，可以赋值给其它类型的变量；而void类型的不能。
let v: undefined = undefined;
let s: string = '123';
s = v;
