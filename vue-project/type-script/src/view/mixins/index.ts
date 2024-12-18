// axios属于新的库，有自带声明文件(index.d.ts)
import axios from 'axios'
axios.post

// express是比较老的库，没有自带声明文件，所以可以自己手写一个；
// 或者安装社区写好的第三方声明文件：npm i @types/express -D
import express from 'express'
const app = express()
const router = express.Router()
app.use('/api', router) // 给router添加前缀‘/api’
router.get('/api', (req: any, res: any) => {
  // req：读取前端传递过来的内容；res：给前端返回的内容
  res.json({
    code: 200,
  })
})
app.listen(9009, () => {
  console.log('9009')
})
