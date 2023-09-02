import { reactive } from '@vue/reactivity'

const state = reactive({
  name: '孔雪儿',
  age: '27',
  info: {
    job: 'teacher',
    students: [
      { id: 1, name: '小鱼儿' },
      { id: 2, name: '花无缺' },
    ]
  },
  hobby: ['piano', 'dance', 'sing']
})

state.name = '虞书欣'
state.age = 28
state.info.job = '富二代'
state.info.students.push({
  id: 3,
  name: '江枫'
})
state.hobby.push('shopping')
console.log('state', state)