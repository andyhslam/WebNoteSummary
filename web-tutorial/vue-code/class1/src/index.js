import Vue from 'vue'

let vm = new Vue({
  el: '#app',
  data () {
    return {
      title: '学生列表',
      classNum: 1,
      total: 2,
      teacher: ['Miss Wang', 'Miss Lee'],
      students: [
        { id: 1, name: 'Jack' },
        { id: 2, name: 'Tom' },
      ]
    }
  }
})

console.log(vm.title)
console.log(vm._data.title)
console.log(vm.$options.data().title)