import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { signOut } from '../store/authSlice'
import { useAppDispatch } from '../store/hooks'
import { Button } from './ui'

const links = [['/', 'Главная'], ['/events', 'Мероприятия']]

export function Layout() {
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()
  return <div className="min-h-screen bg-slate-50 text-slate-800">
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="text-xl font-bold text-indigo-700">CampusHub</Link>
        <nav aria-label="Основная навигация" className="flex flex-wrap items-center gap-3 text-sm">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'font-semibold text-indigo-700' : 'text-slate-600 hover:text-indigo-600'}>{label}</NavLink>)}
          {user && <><NavLink to="/favorites">Избранное</NavLink><NavLink to="/profile">Профиль</NavLink>{(user.role === 'Organizer' || user.role === 'Admin') && <NavLink to="/my-events">Мои мероприятия</NavLink>}{user.role === 'Admin' && <NavLink to="/admin">Админ</NavLink>}<Button onClick={() => dispatch(signOut())}>Выйти</Button></>}
          {!user && <NavLink to="/login" className="rounded-lg bg-indigo-600 px-3 py-2 text-white">Войти</NavLink>}
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-6xl px-4 py-8"><Outlet /></main>
    <footer className="mt-12 border-t bg-white py-6 text-center text-sm text-slate-500">CampusHub · frontend foundation</footer>
  </div>
}

