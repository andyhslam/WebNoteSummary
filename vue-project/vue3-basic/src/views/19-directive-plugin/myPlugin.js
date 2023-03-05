import Child from './Child.vue'
export default {
  install (app, options) {
    app.component('Child', Child)
    app.mixin({
      mounted () {
        console.log(100)
      },
      data () {
        return {
          title: 'aaa'
        }
      }
    })
  }
}