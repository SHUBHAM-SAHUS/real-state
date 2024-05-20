'use client'
export const LOCAL_ACCESS_TOKEN_KEY = 'access-token'
export const LOCAL_WALLET_ADDRESS_KEY = 'wallet-address'
export const LOCAL_USER_DETAILS_KEY = 'user-details'
export const LOCAL_THEME = 'user-theme'
export const LOCAL_INFO = 'tradible'

// ****LocalStorage Services****

export const setItemLocalStorage = (key, value) => {
  return typeof window !== 'undefined' && localStorage.setItem(key, value)
}

export const getItemLocalStorage = key => {
  return typeof window !== 'undefined' && localStorage.getItem(key)
}

export const removeItemLocalStorage = key => {
  typeof window !== 'undefined' && localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
  typeof window !== 'undefined' && localStorage.clear()
}

export const disableAccessToken = () => localStorage.removeItem(LOCAL_ACCESS_TOKEN_KEY)
// export const checkAccessToken = () => localStorage.getItem(LOCAL_ACCESS_TOKEN_KEY)
export const disableUserDetails = () => localStorage.removeItem(LOCAL_USER_DETAILS_KEY)
export const checkAccessToken = () => {
  const info = localStorage.getItem(LOCAL_ACCESS_TOKEN_KEY)
  return info ? JSON.parse(info).token : null
}
