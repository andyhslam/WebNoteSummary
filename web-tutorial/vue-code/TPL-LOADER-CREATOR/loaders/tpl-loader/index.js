function tplLoader (source) {
  source = source.replace(/\s+/g, '')
  console.log('source', source)

  return `
    export default (options) => {

    }
  `
}

module.exports = tplLoader