import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap'
import style from './style.module.scss'
import Button from '@/design-systems/Atoms/Button'
import Link from 'next/link'
import useAuthServices from '@/Hooks/Api/useAuthServices'
import Checkbox from '@/design-systems/Atoms/checkbox'
import Input from '@/design-systems/Atoms/Input'

const SignupForm = () => {
  const { signupUser, signupLoading } = useAuthServices()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const onSubmit = data => {
  }

  // Watching individual fields to evaluate the overall form validity
  const fullName = watch('fullName')
  const email = watch('email')
  const phoneNumber = watch('phoneNumber')
  const agreement = watch('agreement')

  // Check for form validity including all fields explicitly
  const isFormValid = fullName && email && phoneNumber && agreement && Object.keys(errors).length === 0

  return (
    <div className={style['create_account_wrp']}>
      <h1 className="title">Create Account</h1>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Form className={style['signup_form']} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Full Name"
          placeholder="Enter Your Name"
          {...register('fullName', {
            required: 'Full Name is required',
            maxLength: {
              value: 25,
              message: 'Name can be a maximum of 25 characters',
            },
          })}
          isInvalid={!!errors.fullName}
          error={errors.fullName && errors.fullName.message}
        />
        <Input
          label="Email ID"
          placeholder="Enter Your Email Id"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          isInvalid={!!errors.email}
          error={errors.email && errors.email.message}
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="Phone Number"
          {...register('phoneNumber', {
            required: 'Phone Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be exactly 10 digits',
            },
          })}
          isInvalid={!!errors.phoneNumber}
          error={errors.phoneNumber && errors.phoneNumber.message}
        />
        <Checkbox label="I agree to be contacted by Indonesia Estate for similar property related services." />
        {errors.agreement && <span className={style['error']}>{errors.agreement.message}</span>}
        <div className={style['button_group']}>
          <Button variant="primary" type="submit" className="w-100" disabled={!isFormValid}>
            Verify & Continue
          </Button>
        </div>

        <p className={style['note']}>
          By clicking you agree to <Link href="/">Terms & Conditions</Link>
        </p>
      </Form>
    </div>
  )
}

export default SignupForm
