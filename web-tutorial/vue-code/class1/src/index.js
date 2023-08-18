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
      ],
      info: { a: { b: 1 } }
    }
  }
})

// console.log(vm)
console.log(vm.students.splice(1, 1, { id: 3, name: 'Andy' }))
// console.log(vm.info.a = { c: 8 })
// console.log(vm._data.title)
// console.log(vm.$options.data().title)