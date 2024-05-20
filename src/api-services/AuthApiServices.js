/* eslint-disable import/no-anonymous-default-export */
import { API_ENDPOINTS, BASE_API_URL } from '@/utils'
import { coreAPIService } from './CoreAPIService'

const {
  AUTH: { SIGNUP_USER, VERIFY_USER, RESEND_OTP, Create_USER, LOGIN_USER },
} = API_ENDPOINTS

class AuthAPIService {
  constructor() {
    this.services = coreAPIService // Use the singleton instance of CoreAPIService
  }

  async verifyNumber(data) {
    //  for number  verify
    const endpoint = `${SIGNUP_USER}`
    return this.services.post(endpoint, data)
  }

  async verifyOtp(data) {
    //  for number  verify
    const endpoint = `${VERIFY_USER}`
    return this.services.post(endpoint, data)
  }

  async ResendOtp(data) {
    const endpoint = `${RESEND_OTP}`
    return this.services.post(endpoint, data)
  }

  async UserCreate(data) {
    const endpoint = `${Create_USER}`
    return this.services.post(endpoint, data)
  }

  async LoginUser(data) {
    const endpoint = `${Create_USER}`
    return this.services.post(endpoint, data)
  }
}

const authService = new AuthAPIService()
export default authService
