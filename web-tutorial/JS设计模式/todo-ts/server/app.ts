import express, { Application } from 'express'
import bodyParse from 'body-parser' // bodyParse用来解释post请求
import { fileOperation, readFile, writeFile } from './utils'
import { ITodoData } from '../src/js/typings'

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
  const todoList = fileOperation('todo.json') as string
  res.send(todoList)
})

app.post('/toggle', function (req, res) {
  const id: number = parseInt(req.body.id)
  fileOperation('todo.json', function (todoList: ITodoData[]) {
    return todoList.map((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
  res.send({
    msg: 'ok',
    statusCode: 200,
  })
})

app.post('/remove', function (req, res) {
  const id: number = parseInt(req.body.id)
  fileOperation('todo.json', function (todoList: ITodoData[]) {
    return todoList.filter((todo: ITodoData) => todo.id !== id)
  })
  // 删除之后，还要响应给前端
  res.send({
    msg: 'ok',
    statusCode: 200,
  })
})

app.post('/add', function (req, res) {
  const todo: ITodoData = JSON.parse(req.body.todo)
  fileOperation('todo.json', function (todoList: ITodoData[]) {
    const isExist = todoList.find((t: ITodoData) => t.content === todo.content)
    if (isExist) {
      res.send({
        msg: 'exist',
        statusCode: 100,
      })
      return
    }
    todoList.push(todo)
    return todoList
  })
  res.send({
    msg: 'ok',
    statusCode: 200,
  })
})

app.listen(8181, function () {
  console.log('Welcome to Express')
  console.log('Listening on port 8181')
})
