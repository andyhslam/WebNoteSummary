import { ref } from 'vue'
const useCount = () => {
  const count = ref(0)
  const handleClick = () => {
    count.value++
  }

  return {
    count,
    handleClick,
  }
}
export default useCount