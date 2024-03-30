// ?加参数的用法是vite自带的，可以改变静态资源import的格式
import svgIcon from '@/assets/svgs/fullScreen.svg?url';
import svgRaw from '@/assets/svgs/fullScreen.svg?raw';

console.log('svgIcon', svgIcon);
console.log('svgRaw', svgRaw);

// 第一种使用svg的方式：使用绝对路径
// const img = document.createElement('img');
// img.src = svgIcon;
// document.body.appendChild(img);

// 第二种加载svg的方式：加载源字符串
document.body.innerHTML = svgRaw;
const svgEle = document.getElementsByTagName('svg')[0];
svgEle.onmouseenter = function () {
  // 通过改变fill属性来改变svg的颜色
  this.style.fill = '#f00';
};
svgEle.onmouseleave = function () {
  // 通过改变fill属性来改变svg的颜色
  this.style.fill = '#000';
};
