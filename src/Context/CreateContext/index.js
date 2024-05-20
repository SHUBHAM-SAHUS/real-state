import React from 'react'


const GlobalContext = React.createContext({
  user: null,
  setUser: () => {},
})

export default GlobalContext
