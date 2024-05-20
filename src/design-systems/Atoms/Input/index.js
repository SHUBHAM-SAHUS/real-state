/* eslint-disable react/display-name */
import React from 'react'
import { Form } from 'react-bootstrap'
import style from './style.module.scss'

const Input = React.forwardRef(({ className, placeholder, label, type, onChange, error, ...rest }, ref) => {
  return (
    <Form.Group className={`${style['input_group']} ${className}`}>
      {label && <Form.Label className={style['label']}>{label}</Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        className={error ? `${style['error_input']}` : ''}
        ref={ref}
        {...rest}
      />
      {error && <Form.Text className={style['error']}>{error}</Form.Text>}
    </Form.Group>
  )
})

export default Input
