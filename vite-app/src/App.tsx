// import {ref} from 'vue'

let v = ref<string>('')
let tsxFlag = true
let tsxArr = [1,2,3]

// 泛型字面量的模式
type Props = {
  title: string
}

const renderDom = (props:Props, ctx:any) => {
  return (
    <>
      <h3>{props.title}</h3>
      <input type="text" v-model={v.value} />
      <p>{v.value}</p>
      <p v-show={tsxFlag}>景天</p>
      <p v-show={!tsxFlag}>雪见</p>
      {tsxFlag ?  <p>雪见</p> : <p>景天</p>}
      {
        tsxArr.map(item => {
          return <div data-index={item} onClick={clickTap.bind(this, ctx)}>${item}</div>
        })
      }
    </>
  )
}

const clickTap = (ctx: any) => {
  ctx.emit('tsx-click', 123)
}

export default renderDom