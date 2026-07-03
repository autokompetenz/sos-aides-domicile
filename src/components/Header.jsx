import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const { pathname } = useLocation()

  return (
    <div className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo"><Link to="/"><img src="/images/logo.png" alt="SOS Aides à Domicile" /></Link></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navLinks.map(link => (
                <li className="nav-item" key={link.to}>
                  <Link className={`nav-link ${pathname === link.to ? 'active' : ''}`} to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
