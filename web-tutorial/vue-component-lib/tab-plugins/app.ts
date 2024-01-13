import Tab from './components/Tab'
import { PgRender } from './plugins'

function App(): HTMLElement[] {
  return [
    Tab({
      curIndx: 3,
    }),
  ]
}

PgRender(
  App(), // HTMLCollection
  document.getElementById('app')! // 断言一定能找到
)
