import useWebsiteStore from '@/store/websiteStore.js'

const useWebsite = () => {
  const websiteStore = useWebsiteStore()

  return {
    websiteStore
  }
}

export default useWebsite