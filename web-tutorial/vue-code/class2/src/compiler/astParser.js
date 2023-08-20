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
  // 每匹配一个，就删除一个，直到html被完全删除
}

export { parseHtmlToAst }