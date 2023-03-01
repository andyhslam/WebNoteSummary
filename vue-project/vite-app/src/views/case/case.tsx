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
  /**
   * onClick={clickTap(ctx)} 这样给函数传参，会直接调用该函数
   * onClick={clickTap.bind(this, ctx)} bind会返回一个新的函数，这样给函数传参，才不会直接调用；也不支持修饰符
   */
  ctx.emit('tsx-click', 123)
}

export default renderDom