import helloWorld from "./hello-world"
// 该图片资源加载进来以后，会生成一个URL
import imgSrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import exampleTxt from './assets/example.txt'

helloWorld()

console.log('imgSrc', imgSrc)
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

console.log('logoSvg', logoSvg)
const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 200px;'
img2.src = logoSvg
document.body.appendChild(img2)

console.log('exampleTxt', exampleTxt)
const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background-color: aliceblue;'
block.textContent = exampleTxt
document.body.appendChild(block)
