import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/login', (req: Request, res: Response) => {
  // req：接收前端传过来的值；res：返回给前端的值
  res.header('Access-Control-Allow-Origin', '*');
  if (req.query.user === 'admin' && req.query.password === '123456') {
    res.json({
      route: [
        { path: '/case1', name: 'Case1', component: 'case1.vue' },
        { path: '/case2', name: 'Case2', component: 'case2.vue' },
        { path: '/case3', name: 'Case3', component: 'case3.vue' },
      ]
    })
  } else if (req.query.user === 'admin2' && req.query.password === '123456') {
    res.json({
      route: [
        { path: '/case1', name: 'Case1', component: 'case1.vue' },
        { path: '/case2', name: 'Case2', component: 'case2.vue' },
      ]
    })
  } else {
    res.json({ code: 400, message: '账号密码错误' })
  }
})

app.listen(9999, () => {
  console.log('http://localhost:9999')
})