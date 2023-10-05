import { creatApp } from './yrzx'

import TestA from './components/TestA'
import TestB from './components/TestB'

const app = creatApp({
  components: [
    TestA,
    TestB
  ]
})

app.mount('#app')