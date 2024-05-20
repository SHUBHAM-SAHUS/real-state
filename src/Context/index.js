import React from 'react'
import GlobalProvider from './globalProvider'

const GlobalContextProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>
}

export default GlobalContextProvider
