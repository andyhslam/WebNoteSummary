
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