import express, { Express, Router, Request, Response, NextFunction } from 'express'
import axios from 'axios'
const app: Express = express()

// app.use()和app.all()这两种方法都可以使用
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

/**
 * node.js中express的Router路由的使用：
 * express中的Router作用就是：
 * 方便我们更好的根据路由去分模块，避免将所有路由都写在入口文件中。
 */

/**可以在node.js写axios的原因：
 * 1、在前端方面，axios集成ajax
 * 2、在node服务端，axios封装http
 * 所以axios能在服务端和网页运行
 */
const router: Router = express.Router(); // 用来分模块
app.use('/api', router); // 用中间件来注册router
// 使用router来写请求
router.get('/list', async (req: Request, res: Response) => {
  // req：接收前端传过来的值；res：返回给前端的值
  const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
  res.json({
    ...result.data.data
  })
})

// 接口初步定义完成
app.listen(3333, () => {
  console.log('success server http://localhost:3333')
})