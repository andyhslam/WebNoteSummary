const path = require('path')
const express = require('express')
const app = express()
// process.cwd()：获取项目的根路径；__dirname：获取当前路径。
// app.use('/', express.static(path.join(process.cwd(), './modules')))
app.use('/', express.static(path.resolve(__dirname, '../modules')))

app.listen(3333)