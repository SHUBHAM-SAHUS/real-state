'use client'
/* eslint-disable import/no-anonymous-default-export */
import { coreAPIService } from './CoreAPIService'
import { API_ENDPOINTS } from '@/utils'

const {
  PUBLIC: {
    PROPERTIES_CITY,
    ABOUT_US,
    TOP_GAINERS,
    UPCOMING_PROJECT,
    PROPERTIES_HEIGH_DEMAND,
    PROPERTIES_TYPE,
    BLOGHOMEPAGE,
    BANNERSLIDER,
    INVESTMENT,
  },
} = API_ENDPOINTS

class HOMEPAGESERVICES {
  constructor() {
    this.services = coreAPIService // Use the singleton instance of CoreAPIService
  }

  upComingProject = async () => {
    const endpoint = `${UPCOMING_PROJECT}`
    return this.services.get(endpoint)
  }

  blogs = async () => {
    const endpoint = `${BLOGHOMEPAGE}`
    return this.services.get(endpoint)
  }

  PropertyTypes = async () => {
    const endpoint = `${PROPERTIES_TYPE}`
    return this.services.get(endpoint)
  }

  topGainers = async () => {
    const endpoint = `${TOP_GAINERS}`
    return this.services.get(endpoint)
  }

  propertyCity = async () => {
    const endpoint = `${PROPERTIES_CITY}`
    return this.services.get(endpoint)
  }

  PropertyHighDemand = async () => {
    const endpoint = `${PROPERTIES_HEIGH_DEMAND}`
    return this.services.get(endpoint)
  }

  aboutUs = async () => {
    const endpoint = `${ABOUT_US}`
    return this.services.get(endpoint)
  }

  blogs = async () => {
    const endpoint = `${BLOGHOMEPAGE}`
    return this.services.get(endpoint)
  }

  bannerSlider = async () => {
    const endpoint = `${BANNERSLIDER}`
    return this.services.get(endpoint)
  }
  INVESTMENT
  investmentSlider = async () => {
    const endpoint = `${INVESTMENT}`
    return this.services.get(endpoint)
  }

  // Other methods can be added here
}

export default new HOMEPAGESERVICES()
