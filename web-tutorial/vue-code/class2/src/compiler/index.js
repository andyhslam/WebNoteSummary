import { parseHtmlToAst } from './astParser.js'

function compileToRenderFunction (html) {
  const ast = parseHtmlToAst(html)
}

export { compileToRenderFunction }