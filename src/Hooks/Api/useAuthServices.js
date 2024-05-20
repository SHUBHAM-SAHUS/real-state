import { useMutation } from 'react-query'
import AuthApiServices from '@/api-services/AuthApiServices'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToken, setSignupModal, setVerifyModal, setLoading } from '@/Redux-services/AuthSlice'
import { LOCAL_ACCESS_TOKEN_KEY, setItemLocalStorage } from '@/utils'

const useAuthServices = () => {
  const dispatch = useDispatch()

  // Verify User Phone Number
  const {
    mutate: verifyUser,
    isLoading: verifyLoading,
    error: verifyError,
  } = useMutation(payload => AuthApiServices.verifyNumber(payload), {
    onSuccess: data => {
      toast.success(data.message)
      dispatch(addToken(data.login_token))
      dispatch(setLoading(false))
      dispatch(setSignupModal(false))
      dispatch(setVerifyModal(true))
    },
    onError: error => {
      const errorMessage = error?.response?.data?.message || 'An error occurred during the request'
      toast.error(errorMessage)
      dispatch(setLoading(false))
    },
  })

  // Verify OTP
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrZXkxIiwic3ViIjoxNywicGhvbmUiOiIrOTE3MDAwNDcxNzA5IiwiaWF0IjoxNzE1MzcyNzM5LCJleHAiOjE3MTU0NTkxMzl9.n56r7VQPgd_oz_SiqwopThq6H3ZoJtO6HFV-ZHKOtfA'
  const {
    mutate: verifyOtp,
    isLoading: verifyOtpLoading,
    error: verifyOtpError,
  } = useMutation(payload => AuthApiServices.verifyOtp(payload), {
    onSuccess: data => {
      toast.success(data.message)
      dispatch(addToken(''))
      setItemLocalStorage(LOCAL_ACCESS_TOKEN_KEY, data.access_token)
      dispatch(setVerifyModal(false))
      // Potentially close verification modal here if needed
    },
    onError: error => {
      const errorMessage = error?.response?.data?.message || 'An error occurred during the request'
      toast.error(errorMessage)
    },
  })

  // Resend OTP
  const {
    mutate: resendOtp,
    isLoading: resendOtpLoading,
    error: resendOtpError,
  } = useMutation(payload => AuthApiServices.ResendOtp(payload), {
    onSuccess: data => {
      toast.success(data.message)
    },
    onError: error => {
      const errorMessage = error?.response?.data?.message || 'An error occurred during the request'
      toast.error(errorMessage)
    },
  })

  // Create User
  const {
    mutate: createUser,
    isLoading: createUserLoading,
    error: createUserError,
  } = useMutation(payload => AuthApiServices.createUser(payload), {
    onSuccess: data => {
      toast.success(data.message)
      dispatch(addToken(data.login_token))
    },
    onError: error => {
      const errorMessage = error?.response?.data?.message || 'Failed to create user'
      toast.error(errorMessage)
    },
  })

  // Login User
  const {
    mutate: loginUser,
    isLoading: loginUserLoading,
    error: loginUserError,
  } = useMutation(payload => AuthApiServices.loginUser(payload), {
    onSuccess: data => {
      toast.success(data.message)
      dispatch(addToken(data.login_token))
    },
    onError: error => {
      const errorMessage = error?.response?.data?.message || 'Login failed'
      toast.error(errorMessage)
    },
  })

  return {
    verifyUser,
    verifyLoading,
    verifyError,
    verifyOtp,
    verifyOtpLoading,
    resendOtp,
    resendOtpLoading,
    resendOtpError,
    createUser,
    createUserLoading,
    createUserError,
    loginUser,
    loginUserLoading,
    loginUserError,
  }
}

export default useAuthServices
