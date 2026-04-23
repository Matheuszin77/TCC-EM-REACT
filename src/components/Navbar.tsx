import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1 className="um">Ministry</h1>
        <h1 className="dois">Hub</h1>
      </div>
      <ul>
        <li><Link to="/cultos">CULTOS</Link></li>
        <li><Link to="/ministerios">MINISTERIO</Link></li>
        <li><Link to="/disponibilidade">DISPONIBILIDADE</Link></li>
        <li><Link to="/escalas">ESCALAS</Link></li>
      </ul>
    </nav>
  )
}
