import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../App'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      login()
      navigate('/cultos')
    }
  }

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <h2>Seja Bem-vindo ao</h2>
        <h1 className="Ministry">MinistryHub</h1>
        <h3>Login</h3>
        <div className="inputs">
          <input 
            type="email" 
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">ENVIAR</button>
        </div>
      </form>
    </div>
  )
}
