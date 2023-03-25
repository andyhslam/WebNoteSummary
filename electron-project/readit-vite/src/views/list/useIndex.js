import { ref } from 'vue'

const useIndex = () => {
  const curIndex = ref(0)
  const handleItemClick = (index) => {
    curIndex.value = index
  }

  return {
    curIndex,
    handleItemClick,
  }
}
export default useIndex