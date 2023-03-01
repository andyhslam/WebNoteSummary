let anys:any = 'probook';
anys = 18;
anys = true;
anys = [];
anys = {};
anys = Symbol(20);

// //unknown类型只能赋值给unknown和any类型
let str1:unknown = '醉拳Ⅱ';
let str2:any = '醉拳Ⅲ';
str2 = str1;

// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
let obj:any = {b:1};
obj.a

// unknown类型不能调用属性和方法，比any类型更安全
let ukn:unknown = {fun: ():number => 123};
ukn.fun