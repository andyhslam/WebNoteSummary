import { createReactive } from '../../yrzx'

const template = `
  <ul class="list">
    <h1>{{ title }}</h1>
    {{ dateTime }}
    <for data="list" tag="li" class="item">
      <span>Name：{ name }</span>
      <span>Age：{ age }</span>
    </for>
  </ul>
`

function TestB () {
  const state = createReactive({
    title: '教师信息列表',
    dateTime: '2023-10-5 23:20',
    list: [
      {
        id: 1,
        name: '姜佩瑶',
        age: 26,
      },
      {
        id: 2,
        name: '夏禾',
        age: 28,
      },
      {
        id: 3,
        name: '文咏珊',
        age: 30,
      },
    ]
  })

  return [template, state]
}

export default TestB