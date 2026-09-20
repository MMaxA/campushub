export type Role = 'Guest' | 'Student' | 'Organizer' | 'Admin'
export type EventStatus = 'Draft' | 'Pending' | 'Published' | 'Rejected' | 'Completed' | 'Cancelled'
export type EventFormat = 'Online' | 'Offline' | 'Hybrid'

export interface User {
  id: string
  name: string
  email: string
  role: Role
}

export interface Category {
  id: string
  name: string
}

export interface Event {
  id: string
  title: string
  description: string
  category: Category
  startAt: string
  location: string
  format: EventFormat
  organizerId: string
  status: EventStatus
  capacity?: number
}

export interface Registration {
  id: string
  eventId: string
  userId: string
}

export interface Favorite {
  eventId: string
  userId: string
}

