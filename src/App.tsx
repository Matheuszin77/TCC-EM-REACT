import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import Login from './pages/Login'
import Cultos from './pages/Cultos'
import Ministerios from './pages/Ministerios'
import Disponibilidade from './pages/Disponibilidade'
import Escalas from './pages/Escalas'

interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/cultos" replace /> : <Login />} />
        <Route path="/cultos" element={<ProtectedRoute><Cultos /></ProtectedRoute>} />
        <Route path="/ministerios" element={<ProtectedRoute><Ministerios /></ProtectedRoute>} />
        <Route path="/disponibilidade" element={<ProtectedRoute><Disponibilidade /></ProtectedRoute>} />
        <Route path="/escalas" element={<ProtectedRoute><Escalas /></ProtectedRoute>} />
      </Routes>
    </AuthContext.Provider>
  )
}
