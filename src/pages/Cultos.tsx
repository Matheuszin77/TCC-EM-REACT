import { useState } from 'react'
import Navbar from '../components/Navbar'

interface Culto {
  id: number
  data: string
}

export default function Cultos() {
  const [cultos, setCultos] = useState<Culto[]>([])
  const [novaData, setNovaData] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (novaData) {
      setCultos([...cultos, { id: Date.now(), data: novaData }])
      setNovaData('')
    }
  }

  const handleDelete = (id: number) => {
    setCultos(cultos.filter(c => c.id !== id))
  }

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-')
    return `${day}/${month}`
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>CRIAR CULTOS</h1>
          <input
            type="date"
            value={novaData}
            onChange={(e) => setNovaData(e.target.value)}
            required
          />
          <button type="submit">ENVIAR</button>

          {cultos.length > 0 && (
            <div className="lista">
              <h2>Cultos Criados</h2>
              {cultos.map((culto) => (
                <div key={culto.id} className="lista-item">
                  <span>{formatDate(culto.data)}</span>
                  <button type="button" onClick={() => handleDelete(culto.id)}>
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
