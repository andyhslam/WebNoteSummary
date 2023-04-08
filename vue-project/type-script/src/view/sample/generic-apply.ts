// 泛型的应用场景：调用接口
const axios = {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve) => {
      // 在node环境没有XMLHttpRequest，需要用tsc编译成js文件后，在window环境运行
      let xhr: XMLHttpRequest = new XMLHttpRequest()
      xhr.open('GET', url)
      // 监听状态变化的方法
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // readyState:一共有5个状态码(0-4)
          resolve(JSON.parse(xhr.responseText))
        }
      }
      xhr.send(null)
    })
  },
}
interface Data2 {
  code: number
  message: string
}
axios.get<Data2>('./generic-data.json').then((res) => {
  console.log(res)
})
