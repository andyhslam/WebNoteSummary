import { creatApp } from './yrzx'

import TestA from './components/TestA'

const app = creatApp({
  components: [
    TestA
  ]
})

app.mount('#app')