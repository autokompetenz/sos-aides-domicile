import { Link } from 'react-router-dom';

const F = "'Outfit',sans-serif";

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card2)',
      borderTop: '1px solid var(--border)',
      padding: '48px 5% 28px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 36,
        }}>
          <div>
            <p style={{ fontFamily: F, fontWeight: 900, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>SOS Aides à Domicile</p>
            <p style={{ fontSize: 11, color: 'var(--red)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12 }}>Association · Talence</p>
            <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.7 }}>
              13 Avenue Georges Lasserre<br />
              33400 Talence
            </p>
          </div>
          <div>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/services" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>Aide aux seniors</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>Aide aux familles</Link>
              <Link to="/services" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>Aide aux personnes handicapées</Link>
              <Link to="/contact" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="tel:+33556781234" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>05 56 78 12 34</a>
              <a href="mailto:contact@sosaidesdomicile.fr" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>contact@sosaidesdomicile.fr</a>
              <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Lun-Ven : 9h-12h / 14h-17h</p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Informations</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/a-propos" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>À propos</Link>
              <Link to="/mentions-legales" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>Mentions légales</Link>
              <Link to="/politique-confidentialite" style={{ fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}>Confidentialité</Link>
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
            © {new Date().getFullYear()} SOS Aides à Domicile — SIREN 539 339 960
          </p>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>
            Association loi 1901 — RNA W332012993
          </p>
        </div>
      </div>
    </footer>
  );
}
