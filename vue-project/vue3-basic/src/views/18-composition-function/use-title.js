import { onMounted, onUpdated } from 'vue'
const useTitle = (count) => {
  onMounted(() => {
    document.title = count.value
  })
  // onUpdated：数据发生变化，更新组件
  onUpdated(() => {
    document.title = count.value
  })
}
export default useTitle