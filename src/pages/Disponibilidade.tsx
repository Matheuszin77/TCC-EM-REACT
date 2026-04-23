import { useState } from 'react'
import Navbar from '../components/Navbar'

interface CultoDisponivel {
  id: number
  data: string
  disponivel: boolean
}

export default function Disponibilidade() {
  const [cultos, setCultos] = useState<CultoDisponivel[]>([
    { id: 1, data: '07/03', disponivel: false },
    { id: 2, data: '14/03', disponivel: false },
    { id: 3, data: '15/03', disponivel: false },
    { id: 4, data: '21/03', disponivel: false },
    { id: 5, data: '22/03', disponivel: false },
    { id: 6, data: '28/03', disponivel: false },
    { id: 7, data: '29/03', disponivel: false },
  ])

  const toggleDisponibilidade = (id: number) => {
    setCultos(cultos.map(c => 
      c.id === id ? { ...c, disponivel: !c.disponivel } : c
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Disponibilidade salva!')
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form className="formDisponibilidade" onSubmit={handleSubmit} style={{ marginTop: '10vh', padding: '30px', width: '500px', maxWidth: '90%', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '3%' }}>
          <h1>MINHA DISPONIBILIDADE</h1>
          
          {cultos.map((culto) => (
            <div key={culto.id} className="cultos">
              <span>{culto.data}</span>
              <input
                type="checkbox"
                checked={culto.disponivel}
                onChange={() => toggleDisponibilidade(culto.id)}
              />
            </div>
          ))}
          
          <button type="submit" style={{ marginTop: '20px' }}>ENVIAR</button>
        </form>
      </div>
    </div>
  )
}
