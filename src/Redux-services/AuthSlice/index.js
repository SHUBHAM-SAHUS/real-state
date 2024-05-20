import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  loginToken: '',
  verifymodal: false,
  signupModal: false,
  data: [],
}

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      // Set the loading state
      state.loading = action.payload
    },
    setVerifyModal: (state, action) => {
      // Set the verify modal open/close state
      state.verifymodal = action.payload
    },
    setSignupModal: (state, action) => {
      state.signupModal = action.payload
    },
    addToken: (state, action) => {
      // Update the login token
      state.loginToken = action.payload
    },
  },
})

// Export the actions and the reducer
export const { setLoading, setVerifyModal, addToken, setSignupModal } = AuthSlice.actions
export default AuthSlice.reducer
