import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice'
import events from './eventsSlice'

export const store = configureStore({ reducer: { auth, events } })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

