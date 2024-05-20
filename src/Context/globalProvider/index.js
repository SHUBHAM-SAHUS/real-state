import React, { useState, useMemo } from 'react'
import GlobalContext from '../CreateContext'

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user])

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalProvider
