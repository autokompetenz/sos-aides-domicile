import { Link } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';

const F = "'Outfit',sans-serif";
const linkStyle = { fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' };
const linkHover = { color: 'var(--red)' };

function NavLink({ to, children }) {
  return (
    <Link to={to} style={linkStyle}
      onMouseEnter={e => Object.assign(e.target.style, linkHover)}
      onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
    >{children}</Link>
  );
}

export default function Footer() {
  const { isMobile } = useBreakpoint();
  const colStyle = { textAlign: isMobile ? 'center' : 'left' };

  return (
    <footer style={{
      background: 'var(--bg-card2)',
      borderTop: '1px solid var(--border)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, #7DD3FC, #0EA5E9, #0284C7)',
      }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '40px 5% 24px' : '56px 5% 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: isMobile ? 28 : 40,
          marginBottom: 32,
        }}>
          <div style={colStyle}>
            <p style={{ fontFamily: F, fontWeight: 900, fontSize: 20, color: 'var(--text)', marginBottom: 2 }}>SOS Aides</p>
            <p style={{ fontFamily: F, fontWeight: 900, fontSize: 20, color: 'var(--red)', marginBottom: 6 }}>à Domicile</p>
            <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.7 }}>
              13 Avenue Georges Lasserre<br />33400 Talence
            </p>
          </div>
          <div style={colStyle}>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: isMobile ? 'center' : 'flex-start' }}>
              <NavLink to="/services">Aide aux seniors</NavLink>
              <NavLink to="/services">Aide aux familles</NavLink>
              <NavLink to="/services">Personnes handicapées</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div style={colStyle}>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: isMobile ? 'center' : 'flex-start' }}>
              <a href="tel:+33556781234" style={{ fontSize: 14, fontWeight: 600, color: 'var(--red)', textDecoration: 'none' }}>05 56 78 12 34</a>
              <a href="mailto:contact@sosaidesdomicile.fr" style={linkStyle}
                onMouseEnter={e => Object.assign(e.target.style, linkHover)}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >contact@sosaidesdomicile.fr</a>
              <p style={{ fontSize: 12, color: 'var(--text-3)' }}>Lun-Ven : 9h-12h / 14h-17h</p>
            </div>
          </div>
          <div style={colStyle}>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Liens</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: isMobile ? 'center' : 'flex-start' }}>
              <NavLink to="/a-propos">À propos</NavLink>
              <NavLink to="/mentions-legales">Mentions légales</NavLink>
              <NavLink to="/politique-confidentialite">Confidentialité</NavLink>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: isMobile ? 16 : 20,
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} SOS Aides à Domicile — SIREN 539 339 960 — RNA W332012993
          </p>
        </div>
      </div>
    </footer>
  );
}
