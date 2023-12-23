
/**
 * 观察某个对象的所有属性
 * @param {Object} obj 
 */
function observe (obj) {
  for (const key in obj) {
    let internalValue = obj[key]
    // 数组去重，避免数组里面出现重复的函数
    const funcs = new Set()
    Object.defineProperty(obj, key, {
      // 依赖收集，记录：是哪个函数在使用该属性
      get () {
        window.__func && funcs.add(window.__func)
        return internalValue
      },
      // 派发更新，运行：使用该属性的函数
      set (val) {
        internalValue = val
        const fns = [...funcs]
        for (let i = 0; i < fns.length; i++) {
          fns[i]()
        }
      }
    })
  }
}

function autoRun (fn) {
  window.__func = fn
  fn()
  window.__func = null
}