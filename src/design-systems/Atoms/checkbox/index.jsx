import React from 'react'
import style from './style.module.scss'

const Checkbox = ({ checked,label,disabled,id }) => {
  return (
      <div class={style['form-checkbox']}>
        <input class={style['checkbox']} type="checkbox" id={id ? id : 'checkbox1'} checked={checked} disabled={disabled} />
        <label for={id ? id : 'checkbox1'} tabindex="1">
          {label}
        </label>
      </div>
  )
}

export default Checkbox