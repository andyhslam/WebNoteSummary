
class MdToHtmlPlugin {
  constructor({ template, filename }) {
    if (!template) {
      throw new Error('The config for "template" must be configured')
    }
    this.template = template
    this.filename = filename || 'md.html'
  }
}

module.exports = MdToHtmlPlugin