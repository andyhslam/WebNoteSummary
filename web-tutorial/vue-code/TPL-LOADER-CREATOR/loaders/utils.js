function tplReplace (template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
    // 双大括号及其里面的所有内容作为node值，子表达式及其里面的所有内容作为key值；
    // 返回的replaceObject[key]取代正则表达式的内容。
    return replaceObject[key]
  })
}

// 因为是在node服务器执行，所以遵守commonJs模块化规范
module.exports = {
  tplReplace
}