import { createReactive } from '../../yrzx'

const template = `
  <ul class="list">
    <h1>{{ title }}</h1>
    {{ dateTime }}
    <for data="list" tag="li" class="item">
      <span>姓名：{ name }</span>
      <span>年龄：{ age }</span>
    </for>
  </ul>
`

function TestA () {
  const state = createReactive({
    title: '学生信息列表',
    dateTime: new Date(),
    list: [
      {
        id: 1,
        name: '刮骨刀',
        age: 18,
      },
      {
        id: 2,
        name: '夏禾',
        age: 20,
      },
      {
        id: 3,
        name: '异人之下',
        age: 22,
      },
    ]
  })

  return [template, state]
}

export default TestA