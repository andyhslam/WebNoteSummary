import { useReactive, useDOM } from '../reactivity/index'

function App () {
  const state = useReactive({
    count: 0,
    name: '林允儿',
    info: {
      job: 'star',
    }
  })

  const add = (num) => {
    state.count += num
  }
  const minus = (num) => {
    state.count -= num
  }
  const changeName = (name) => {
    state.name = name
  }

  return {
    state,
    methods: {
      add,
      minus,
      changeName
    },
    template: `
      <h1>{{ count }}</h1>
      <h2>{{ name }}</h2>
      <h3>{{ info.job }}</h3>
      <button onClick="add(2)">+</button>
      <button onClick="minus(1)">-</button>
      <button onClick="changeName('林允')">改名</button>
    `,
  }
}

useDOM(
  App(),
  document.querySelector('#app')
)