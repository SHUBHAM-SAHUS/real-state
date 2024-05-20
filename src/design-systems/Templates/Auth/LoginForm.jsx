'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap'
import style from './style.module.scss'
import Button from '@/design-systems/Atoms/Button'
import Google from '../../../assets/images/google.svg'
import Apple from '../../../assets/images/apple.svg'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Image from '@/design-systems/Atoms/Image'
import useAuthServices from '@/Hooks/Api/useAuthServices'
import { useDispatch } from 'react-redux'
import { setLoading } from '@/Redux-services/AuthSlice'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { verifyUser, verifyLoading } = useAuthServices()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState(false)

  const {
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm()

  const validatePhoneNumber = inputNumber => {
    const onlyDigits = inputNumber.replace(/\D/g, '')
    const isValid = onlyDigits.slice(onlyDigits.length - 10).length === 10 // Checks the last 10 digits
    setIsPhoneValid(isValid)
    if (!isValid && inputNumber) {
      setError('phoneNumber', { type: 'manual', message: 'Phone number must be exactly 10 digits' })
    } else {
      clearErrors('phoneNumber')
    }
  }

  const handleOnChange = value => {
    setPhoneNumber(value)
    validatePhoneNumber(value)
  }

  const onSubmit = data => {
    dispatch(setLoading(true))
    verifyUser({ phone: phoneNumber })
  }

  return (
    <>
      <div className={style['login_wrp']} disabled={verifyLoading}>
        <h1 className="title">Login / Register</h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Form className={style['login_form']} onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="input_group">
            <Form.Label className="label">Phone Number</Form.Label>
            <PhoneInput
              className={`form-control ${errors.phoneNumber ? 'invalid' : ''}`}
              international
              defaultCountry="IND"
              value={phoneNumber}
              onChange={handleOnChange}
              isInvalid={!!errors.phoneNumber}
            />
            {errors.phoneNumber && <Form.Text className="text-danger">{errors.phoneNumber.message}</Form.Text>}
          </Form.Group>
          <div className={style['button_group']}>
            <Button variant="primary" type="submit" className="w-100" disabled={!isPhoneValid || verifyLoading}>
              {verifyLoading ? 'Please wait...' : 'Continue'}
            </Button>
          </div>
        </Form>
        <span className={style['login_with_title']}>
          <hr />
          Or login with
          <hr />
        </span>
        <div className={style['login_with_option_list']}>
          <Button>
            <Image src={Google} width={96} height={48} alt="Google" />
          </Button>
          <Button>
            <Image src={Apple} width={96} height={48} alt="Apple" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default LoginForm
