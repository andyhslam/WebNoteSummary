
/**
 * 文档注释的好处：用鼠标指着该函数，会有相应的注释提示。
 * 解析歌词字符串
 * @param {*}
 * @returns 一个歌词对象的数组
 * 每个歌词对象：{time：开始时间, words: 歌词内容}
 */
function parseLrc () {
  var lines = lrc.split('\n')
  var result = [] // 歌词对象的数组
  for (var i = 0; i < lines.length; i++) {
    var str = lines[i]
    var parts = str.split(']')
    var timeStr = parts[0].substring(1)
    var obj = {
      time: parseTime(timeStr),
      words: parts[1],
    }
    result.push(obj)
  }
  return result
}

/**
 * 将一个时间字符串解析为数字(秒)
 * @param {String} timeStr 时间字符串
 * @returns 
 */
function parseTime (timeStr) {
  var parts = timeStr.split(':')
  return +parts[0] * 60 + +parts[1]
}

var lrcData = parseLrc()

// 获取需要的dom
var doms = {
  audio: document.querySelector('audio'),
  ul: document.querySelector('.container ul'),
  container: document.querySelector('.container'),
}

/**
 * 计算出，在当前播放器播放到第几秒的情况下，lrcData数组中，应该高亮显示的歌词下标；
 * 如果没有任何一句歌词需要显示，则得到-1
 */
function findIndex () {
  // 播放器当前时间
  var curTime = doms.audio.currentTime
  for (var i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      return i - 1
    }
  }
  // 找遍了都没找到（说明播放到最后一句）
  return lrcData.length - 1
}

/**
 * 创建歌词元素li
 */
function createLrcElements () {
  // 文档片段用来收集目前要添加的节点，不会显示在页面上，与dom树无关
  var frag = document.createDocumentFragment()
  for (var i = 0; i < lrcData.length; i++) {
    var li = document.createElement('li')
    li.textContent = lrcData[i].words
    frag.appendChild(li)
  }
  // 提高效率，不用频繁改动dom树
  doms.ul.appendChild(frag)
}

createLrcElements()

// 获取尺寸、位置的几何信息，会导致reflow，所以把这些操作提取出来，用变量保存
// 容器高度
var containerHeight = doms.container.clientHeight
// 每个li的高度
var liHeight = doms.ul.children[0].clientHeight
// 最大偏移量
var maxOffset = doms.ul.clientHeight - containerHeight

/**
 * 设置ul元素的偏移量，即ul顶部到容器顶部的距离
 */
function setOffset () {
  var index = findIndex()
  // 歌词滚动的距离 + 单行歌词的一半 - 容器高度的一半
  var offset = liHeight * index + liHeight / 2 - containerHeight / 2
  if (offset < 0) {
    offset = 0
  } else if (offset > maxOffset) {
    offset = maxOffset
  }
  doms.ul.style.transform = `translateY(-${offset}px)`
  // 去掉之前的active样式
  var li = doms.ul.querySelector('.active')
  if (li) {
    li.classList.remove('active')
  }
  // 重新获取当前需要高亮的li，加上active样式
  li = doms.ul.children[index]
  if (li) {
    li.classList.add('active')
  }
}

// 播放时间变化，需要运行setOffset函数
doms.audio.addEventListener('timeupdate', setOffset)