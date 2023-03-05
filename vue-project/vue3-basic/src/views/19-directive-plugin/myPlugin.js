import Child from './Child.vue'
export default {
  install (app, options) {
    app.component('Child', Child)
    app.mixin({
      mounted () {
        console.log('创建自定义插件')
      },
      data () {
        return {
          title: 'aaa'
        }
      }
    })
  }
}