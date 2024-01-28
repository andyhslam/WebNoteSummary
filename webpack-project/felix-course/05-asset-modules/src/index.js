import helloWorld from "./hello-world"
// 该图片资源加载进来以后，会生成一个URL
import imgSrc from './assets/img-1.png'

helloWorld()
console.log('imgSrc', imgSrc)
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)
