// Regular Expressions for parsing tags and attributes

// 匹配形如 id="app"、id='app'、id=app的属性
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/

// 匹配标签名，形如：<my-header></my-header>等
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`

// 匹配特殊的标签名，形如：<my:header></my:header>等
const qnameCapture = `((?:${ncname}\\:)?${ncname})`

// 匹配开始标签，形如：<div
const startTagOpen = new RegExp(`^<${qnameCapture}`)

// 匹配开始标签的结束或者单标签的闭合，形如：> 或 />
const startTagClose = /^\s*(\/?)>/

// 匹配整个结束标签，形如：</div>
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)

function parseHtmlToAst (html) {
  let text

  // 每匹配一个，就删除一个，直到html被完全删除
  while (html) {
    let textEnd = html.indexOf('<')
    if (textEnd === 0) {
      const startTagMatch = parseStartTag()
      if (startTagMatch) {
        start(startTagMatch.tagName, startTagMatch.attrs)
        continue
      }
      // 匹配到整个结束标签
      const endTagMatch = html.match(endTag)
      if (endTagMatch) {
        console.log('endTagMatch', endTagMatch)
        // 删除整个结束标签
        advance(endTagMatch[0].length)
        end(endTagMatch[1])
        // continue
      }
    } else if (textEnd > 0) {
      // 获取文本类型
      text = html.substring(0, textEnd)
      if (text) {
        // 删除文本
        advance(text.length)
        chars(text)
      }
    }
  }

  function parseStartTag () {
    // 匹配到开始标签
    const start = html.match(startTagOpen)
    let end, attr
    if (start) {
      const match = {
        tagName: start[1],
        attrs: []
      }
      // 删除开始标签
      advance(start[0].length)
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5]
        })
        advance(attr[0].length)
      }

      if (end) {
        // 匹配到开始标签的结束或者单标签的闭合，就删除
        advance(end[0].length)
        return match
      }
    }
  }

  function advance (n) {
    html = html.substring(n)
  }

  function start (tagName, attrs) {
    console.log('----开始----')
    console.log(tagName, attrs)
  }

  function end (tagName) {
    console.log('----结束----')
    console.log(tagName)
  }

  function chars (text) {
    console.log('----文本----')
    console.log(text)
  }

  function createAstElement (tagName, attrs) {
    return {
      type: 1,
      tag: tagName,
      children: [],
      attrs,
      parent
    }
  }
}

export { parseHtmlToAst }