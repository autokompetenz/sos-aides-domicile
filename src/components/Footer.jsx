import { Link } from 'react-router-dom';

const F = "'Outfit',sans-serif";

export default function Footer() {
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
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 5% 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 40,
        }}>
          <div>
            <p style={{ fontFamily: F, fontWeight: 900, fontSize: 20, color: 'var(--text)', marginBottom: 2 }}>SOS Aides</p>
            <p style={{ fontFamily: F, fontWeight: 900, fontSize: 20, color: 'var(--red)', marginBottom: 6 }}>à Domicile</p>
            <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.7 }}>
              13 Avenue Georges Lasserre<br />
              33400 Talence
            </p>
          </div>
          <div>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/services" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >Aide aux seniors</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >Aide aux familles</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >Personnes handicapées</Link>
              <Link to="/contact" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >Contact</Link>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+33556781234" style={{ fontSize: 14, fontWeight: 600, color: 'var(--red)', textDecoration: 'none' }}>05 56 78 12 34</a>
              <a href="mailto:contact@sosaidesdomicile.fr" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >contact@sosaidesdomicile.fr</a>
              <p style={{ fontSize: 12, color: 'var(--text-3)' }}>Lun-Ven : 9h-12h / 14h-17h</p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Liens</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/a-propos" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >À propos</Link>
              <Link to="/mentions-legales" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >Mentions légales</Link>
              <Link to="/politique-confidentialite" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >Confidentialité</Link>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} SOS Aides à Domicile — SIREN 539 339 960 — RNA W332012993
          </p>
        </div>
      </div>
    </footer>
  );
}
