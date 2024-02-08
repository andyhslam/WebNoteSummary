function getComponent () {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  })
}

// 这样写是为了让import()函数抽离一个单独的lodash文件
getComponent().then((element) => {
  document.body.appendChild(element)
})