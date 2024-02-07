import helloWorld from "./hello-world"
// 该图片资源加载进来以后，会生成一个URL
import imgSrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/qianfeng-sem.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'
import { join } from 'lodash'

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
block.classList.add('block-bg')
block.textContent = exampleTxt
document.body.appendChild(block)

console.log('jpgMap', jpgMap)
const img3 = document.createElement('img')
img3.style.cssText = 'width: 600px; height: 240px; display: block;'
img3.src = jpgMap
document.body.appendChild(img3)

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
// 字体文件像文本一样，去加载一个文本的代码；通过设置innerHTML的值为下载字体时，提供的字体代码&#xe668;
span.innerHTML = '&#xe668;'
document.body.appendChild(span)

console.log('Data', Data)
console.log('Notes', Notes)

console.log('toml', toml.title, toml.owner.name)
console.log('yaml', yaml.title, yaml.owner.name)
console.log('json5', json5.title, json5.owner.name)

console.log(join(['index', 'module', 'loaded!'], ' '))


