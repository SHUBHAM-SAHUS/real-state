export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP_USER: '/api/register',
    VERIFY_USER: '/api/verifyOTP',
    RESEND_OTP: '/api/resendOTP',
    LOGIN_USER: '/api/login',
    Create_USER: '/api/saveUser',
    // FORGET_PASSWORD: '',
    // VERIFY_NUMBER: '/api/register',
  },
  CATEGORY: {
    ALL: '',
  },
  CLAID_API: '',
  PRIVATE: {
    ADD_LIKE: '',
  },
  PUBLIC: {
    PROPERTIES_CITY: '/api/propertiesTypes',
    ABOUT_US: 'api/aboutUs',
    TOP_GAINERS: 'api/topGainers',
    UPCOMING_PROJECT: '/api/upcomingProjects',
    PROPERTIES_HEIGH_DEMAND: '/api/propertiesHighDemand',
    PROPERTIES_TYPE: '/api/propertiesTypes',
    BLOGHOMEPAGE: '/api/blogsHomepage',
    BANNERSLIDER: '/api/slider1',
    INVESTMENT: '/api/slider2',
  },
}

export const QUERIES = {
  AUTH: {
    NONCE: '',
    VERIFY_SIGNATURE: '',
  },
  CATEGORY: {
    ALL: '',
  },
  PRIVATE: {},
  PUBLIC: {},
}

export const getQueries = obj => {
  return Object.keys(obj ?? {}).reduce(
    (val, key, idx) => (obj[key] ? `${val}${key}=${obj[key]}${Object.keys(obj).length - 1 !== idx ? '&' : ''}` : val),
    ''
  )
}

export const BASE_API_URL = 'https://realestate.logiclane.tech'
