import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Event } from '../types/models'

interface EventsState {
  items: Event[]
  favorites: string[]
}

const initialState: EventsState = { items: [], favorites: [] }

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Event[]>) => { state.items = action.payload },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((id) => id !== action.payload)
        : [...state.favorites, action.payload]
    },
  },
})

export const { setEvents, toggleFavorite } = eventsSlice.actions
export default eventsSlice.reducer

