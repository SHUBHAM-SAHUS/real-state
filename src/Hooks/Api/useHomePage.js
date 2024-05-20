import HOMEPAGESERVICES from '@/api-services/HomePageApiServices'
import { useQuery } from 'react-query'

const useHomePage = () => {
  const queryOptions = {
    staleTime: 1 * 60 * 1000, // 10 minutes
    cacheTime: 2 * 60 * 1000, // 30 minutes
  }

  const {
    data: blogList,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery(['blogs'], () => HOMEPAGESERVICES.blogs(), queryOptions)

  const {
    data: propertyHighDemandList,
    isLoading: highDemandLoading,
    error: highDemandError,
  } = useQuery(['highDemand'], () => HOMEPAGESERVICES.PropertyHighDemand(), queryOptions)

  const {
    data: propertyTypesList,
    isLoading: propertyTypesLoading,
    error: propertyTypesError,
  } = useQuery(['propertyTypes'], () => HOMEPAGESERVICES.PropertyTypes(), queryOptions)

  const {
    data: aboutList,
    isLoading: aboutLoading,
    error: aboutError,
  } = useQuery(['aboutUs'], () => HOMEPAGESERVICES.aboutUs(), queryOptions)

  const {
    data: investmentList,
    isLoading: investmentLoading,
    error: investmentError,
  } = useQuery(['investment'], () => HOMEPAGESERVICES.investmentSlider(), queryOptions)

  const {
    data: propertyCityList,
    isLoading: propertyCityLoading,
    error: propertyCityError,
  } = useQuery(['propertyCity'], () => HOMEPAGESERVICES.propertyCity(), queryOptions)

  const {
    data: upcomingList,
    isLoading: upcomingLoading,
    error: upcomingError,
  } = useQuery(['upcoming'], () => HOMEPAGESERVICES.upComingProject(), queryOptions)

  const {
    data: topGainerList,
    isLoading: topGainerLoading,
    error: topGainerError,
  } = useQuery(['topGainers'], () => HOMEPAGESERVICES.topGainers(), queryOptions)

  const {
    data: bannerList,
    isLoading: bannerLoading,
    error: bannerError,
  } = useQuery(['topGainers'], () => HOMEPAGESERVICES.bannerSlider(), queryOptions)

  return {
    blogList,
    blogLoading,
    propertyHighDemandList,
    highDemandLoading,
    propertyTypesList,
    propertyTypesLoading,
    aboutList,
    aboutLoading,
    investmentList,
    investmentLoading,
    propertyCityList,
    propertyCityLoading,
    upcomingList,
    upcomingLoading,
    topGainerList,
    topGainerLoading,
    bannerList,
    bannerLoading,
  }
}

export default useHomePage
