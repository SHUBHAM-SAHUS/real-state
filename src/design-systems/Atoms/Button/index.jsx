import React from 'react'
import style from './style.module.scss'

const Button = ({ variant,className,disabled, children, ...rest }) => {
  return (
    <button className={`${style['button']} ${className} ${style[variant]}`} disabled={disabled} {...rest}>
     {children}
    </button>
  )
}

export default Button
