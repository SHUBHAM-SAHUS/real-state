import React, { use, useState } from 'react'
import { Form } from 'react-bootstrap'
import style from './style.module.scss'
import OtpInput from '@/design-systems/Atoms/otp-input' // Make sure the import path is correct
import Button from '@/design-systems/Atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import useAuthServices from '@/Hooks/Api/useAuthServices'

const VerifyOtp = () => {
  const diaptch = useDispatch()
  const { verifyOtp, verifyOtpLoading } = useAuthServices()
  const login_token = useSelector(state => state.AuthReducer.loginToken)
  const [otp, setOtp] = useState('')
  const [isOtpFilled, setIsOtpFilled] = useState(false)

  const handleOtpChange = newValue => {
    setOtp(newValue)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const data = {
      login_token: login_token,
      otp: otp,
    }


    verifyOtp(data)
  }

  return (
    <div className={style['verify_otp_wrp']}>
      <h1 className="title">Verify your number</h1>
      <Form className={style['verify_otp_form']} onSubmit={handleSubmit}>
        <OtpInput
          value={otp}
          valueLength={4}
          onChange={handleOtpChange}
          label="Enter Your 4 Digit OTP"
          onFilled={setIsOtpFilled}
        />
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          // disabled={!isOtpFilled} // Button is enabled only when all OTP fields are filled
        >
          Verify & Continue
        </Button>
      </Form>
    </div>
  )
}

export default VerifyOtp
