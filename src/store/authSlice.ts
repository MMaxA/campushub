import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Role, User } from '../types/models'

interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = { user: null, token: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ user: User; token?: string }>) => {
      state.user = action.payload.user
      state.token = action.payload.token ?? null
    },
    signOut: (state) => {
      state.user = null
      state.token = null
    },
    setRole: (state, action: PayloadAction<Role>) => {
      if (state.user) state.user.role = action.payload
    },
  },
})

export const { signIn, signOut, setRole } = authSlice.actions
export default authSlice.reducer

