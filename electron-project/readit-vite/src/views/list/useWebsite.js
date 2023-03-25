import { inject } from 'vue'
import useWebsiteStore from '@/store/websiteStore.js'

const useWebsite = () => {
  const websiteStore = useWebsiteStore()
  const { keywords } = inject('searchbar-keywords')

  return {
    websiteStore,
    keywords,
  }
}

export default useWebsite