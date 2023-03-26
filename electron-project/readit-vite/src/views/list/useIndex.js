import { ref } from 'vue'

const useIndex = () => {
  const curIndex = ref(0)
  const handleItemClick = (index, url) => {
    curIndex.value = index
    // window.open(url, '_blank', 'width=1300, height=800')
    myApi.openWindow(url)
  }

  return {
    curIndex,
    handleItemClick,
  }
}
export default useIndex