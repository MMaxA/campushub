import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/RouteBoundary'
import { Admin, CreateEvent, EventDetails, Events, Favorites, Home, Login, MyEvents, Profile, Register } from './pages/Pages'

export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="events" element={<Events />} /><Route path="events/:id" element={<EventDetails />} /><Route path="login" element={<Login />} /><Route path="register" element={<Register />} /><Route element={<ProtectedRoute />}><Route path="profile" element={<Profile />} /><Route path="favorites" element={<Favorites />} /></Route><Route element={<ProtectedRoute roles={['Organizer', 'Admin']} />}><Route path="my-events" element={<MyEvents />} /><Route path="events/create" element={<CreateEvent />} /></Route><Route element={<ProtectedRoute roles={['Admin']} />}><Route path="admin" element={<Admin />} /></Route></Route></Routes></BrowserRouter>
}

