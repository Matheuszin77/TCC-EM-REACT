import { useState } from 'react'
import Navbar from '../components/Navbar'

interface Ministerio {
  id: number
  nome: string
}

export default function Ministerios() {
  const [ministerios, setMinisterios] = useState<Ministerio[]>([])
  const [novoMinisterio, setNovoMinisterio] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (novoMinisterio) {
      setMinisterios([...ministerios, { id: Date.now(), nome: novoMinisterio }])
      setNovoMinisterio('')
    }
  }

  const handleDelete = (id: number) => {
    setMinisterios(ministerios.filter(m => m.id !== id))
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>CRIAR MINISTERIO</h1>
          <input
            type="text"
            placeholder="Nome do MINISTERIO"
            value={novoMinisterio}
            onChange={(e) => setNovoMinisterio(e.target.value)}
            required
          />
          <button type="submit">ENVIAR</button>

          {ministerios.length > 0 && (
            <div className="lista">
              <h2>Ministerios Criados</h2>
              {ministerios.map((ministerio) => (
                <div key={ministerio.id} className="lista-item">
                  <span>{ministerio.nome}</span>
                  <button type="button" onClick={() => handleDelete(ministerio.id)}>
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
