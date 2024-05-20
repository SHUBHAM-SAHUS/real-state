'use client'
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import CustomModal from '@/design-systems/Molecules/CustomModal'
import Footer from '@/design-systems/Templates/Layout/Footer'
import Header from '@/design-systems/Templates/Layout/Header'

import VarifyYourNumber from '@/design-systems/Templates/Auth/VerifyOtp'
import LoginModal from '@/design-systems/Templates/Auth/LoginForm'
// import CreateAccount from '@/design-systems/Templates/Auth/SignupForm'
import { useDispatch, useSelector } from 'react-redux'
import { AccountCreation, setSignupModal, setVerifyModal } from '@/Redux-services/AuthSlice'
import NoFirstRender from '@/design-systems/Atoms/NoFirstRender'
const AppLayout = ({ children }) => {
  const dispatch = useDispatch()
  const verifyModal = useSelector(state => state.AuthReducer.verifymodal)
  const signupModal = useSelector(state => state.AuthReducer.signupModal)
  const accountCreation = useSelector(state => state.AuthReducer.AccountCreation)
  return (
    <>
      <Header />
      <NoFirstRender variant="fixed" />

      <CustomModal show={signupModal} handleClose={() => dispatch(setSignupModal(false))}>
        <LoginModal />
      </CustomModal>
      <CustomModal show={accountCreation} handleClose={() => dispatch(AccountCreation(false))}>
        {/* <CreateAccount /> */}
      </CustomModal>

      <CustomModal show={verifyModal} handleClose={() => dispatch(setVerifyModal(false))}>
        <VarifyYourNumber />
      </CustomModal>
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
