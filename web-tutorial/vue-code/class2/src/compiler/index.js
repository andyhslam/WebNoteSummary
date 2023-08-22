import { parseHtmlToAst } from './astParser.js'
import { generate } from './generate.js'

function compileToRenderFunction (html) {
  const ast = parseHtmlToAst(html),
    code = generate(ast)
}

export { compileToRenderFunction }