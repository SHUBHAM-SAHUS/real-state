'use client'
/* eslint-disable import/no-anonymous-default-export */
import { BASE_API_URL, checkAccessToken, disableAccessToken, disableUserDetails } from '@/utils'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: BASE_API_URL,
})

axios.interceptors.request.use(
  config => {
    if (typeof window !== 'undefined') {
      const accessToken = '' // You should retrieve the actual access token here
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const responseData = response => response.data

const handleError = error => {
  const status = error.response && error.response.status
  if (status === 401 || status === 403) {
    disableAccessToken()
    disableUserDetails()
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }
  throw error
}

class CoreAPIService {
  async get(url, params = {}) {
    return axios.get(url, { params }).then(responseData).catch(handleError)
  }

  async post(url, data = {}, config = {}) {
    return axios.post(url, data, config).then(responseData).catch(handleError)
  }

  async put(url, data = {}) {
    return axios.put(url, data).then(responseData).catch(handleError)
  }

  async patch(url, data = {}) {
    return axios.patch(url, data).then(responseData).catch(handleError)
  }

  async delete(url, data = {}) {
    return axios.delete(url, { data }).then(responseData).catch(handleError)
  }
}

// Export both the class and an instance of the class
export const coreAPIService = new CoreAPIService()
export default CoreAPIService
