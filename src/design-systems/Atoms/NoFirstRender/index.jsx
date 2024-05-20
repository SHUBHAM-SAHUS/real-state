'use client'
import React from 'react'
import { useState, useEffect } from 'react'

import Spinner from '../Spinner'
import Loader from '../Loader'
import { useDispatch, useSelector } from 'react-redux'

const NoFirstRender = ({ children, className, height, variant }) => {
  const loaderState = useSelector(state => state.AuthReducer.loading)
  const [hydrated, setHydrated] = useState(loaderState)

  useEffect(() => {
    setHydrated(loaderState)
  }, [loaderState])

  return (
    <>
      {!hydrated ? (
        children
      ) : (
        <div className={`loading_wrp ${className} ${variant === 'fixed' && 'fixed'}`} style={{ height: height }}>
          <Loader />
          {/* <Spinner className="spiner" /> */}
        </div>
      )}
    </>
  )
}

export default NoFirstRender
