import express, { Application } from 'express'
import bodyParse from 'body-parser' // bodyParse用来解释post请求
import { readFile } from './utils'

const app: Application = express()

app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())

// 设置跨域
app.all('*', (req, res, next) => {
  // 所有请求源都允许跨域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-methods', 'POST,GET,PUT,DELETE,OPTIONS')
  next()
})

app.get('/todolist', function (req, res) {
  const todoList: string = readFile('todo.json')
  res.send(todoList)
})

app.post('/toggle', function (req, res) {})

app.post('/remove', function (req, res) {})

app.post('/add', function (req, res) {})

app.listen(8181, function () {
  console.log('Welcome to Express')
  console.log('Listening on port 8181')
})
