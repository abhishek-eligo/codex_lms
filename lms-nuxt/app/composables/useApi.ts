import { getCourses, getCompanies, getMarketplaceItems } from '~/services/mock.data'

export const useApi = () => {
  const fetchCourses = async () => getCourses()
  const fetchCompanies = async () => getCompanies()
  const fetchMarketplace = async () => getMarketplaceItems()

  return {
    fetchCourses,
    fetchCompanies,
    fetchMarketplace
  }
}
