module.exports = {
  // 换行方式, lf(默认)/crlf/cr/auto(保持现状)
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  // 尾逗号 es5(默认)/none/all
  // 安装了eslint的vscode可能会有保存自动格式化跟错误提示冲突,这里注释掉也不影响
  // trailingComma: 'es5',
  // 对象前后添加空格, eg: { foo: bar }, true(默认)/false
  bracketSpacing: true,
  // 多属性html标签的‘>’放在最后一行末尾, true/false(默认)
  jsxBracketSameLine: true,
  // 语句末尾添加分号, true(默认)/false
  semi: true,
  // 使用单引号, true/false(默认)
  singleQuote: true,
  printWidth: 120,
  // 箭头函数只有一个参数时是否用括号, always(默认)/avoid
  arrowParens: 'always'
};
