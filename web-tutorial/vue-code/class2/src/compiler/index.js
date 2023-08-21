import { parseHtmlToAst } from './astParser.js'

function compileToRenderFunction (html) {
  const ast = parseHtmlToAst(html)
  console.log('ast', ast)
}

export { compileToRenderFunction }