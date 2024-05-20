import React from 'react'
import style from './style.module.scss'

// Adding a 'loading' prop to control the visibility of the loader
const Loader = ({ loading }) => {
  return (
    <>
      <div className={style['progress-loader']}>
        <div className={style['overlay']}></div>
        <div className={style['ring']}>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default Loader
