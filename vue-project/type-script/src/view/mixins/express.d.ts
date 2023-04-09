// 手写express的声明文件

// 扩充模块
declare module 'express' {
  interface Router {
    get(path: string, cb: (req: any, res: any) => void): void
  }
  interface App {
    use(path: string, router: any): void
    listen(port: number, cb?: () => void)
  }
  interface Express {
    (): App
    Router(): Router
  }
  const express: Express
  export default express
}

// 扩充全局变量
declare let expnum: number

// 扩充函数
declare function expfun(params: type) {}

// 扩充类
declare class ExpCls {}

// 扩充枚举
declare enum ExpEnum {
  a = 1,
  b = 2,
}

// 还可以扩充全局的(global)、命名空间(namespace)等等
