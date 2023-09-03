import { useReactive, useDOM } from '../reactivity/index'

function App () {
  const state = useReactive({
    count: 0,
    info: {
      job: 'star'
    }
  })

  const add = (num) => {
    state.count += num
  }
  const minus = (num) => {
    state.count -= num
  }

  return {
    state,
    methods: {
      add,
      minus
    },
    template: `
      <h1>{{ count }}</h1>
      <h2>{{ info.job }}</h2>
      <button onClick="add(2)">+</button>
      <button onClick="minus(1)">-</button>
    `,
  }
}

useDOM(
  App(),
  document.querySelector('#app')
)