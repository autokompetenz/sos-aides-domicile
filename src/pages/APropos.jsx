import { motion } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';

const F = "'Outfit',sans-serif";

const TEAM = [
  { name: 'Marie Dupont', role: 'Directrice', desc: 'Fondatrice de l\'association, 20 ans d\'expérience dans l\'aide à domicile.' },
  { name: 'Sophie Martin', role: 'Coordinatrice', desc: 'Référente des intervenantes, assure le suivi personnalisé de chaque bénéficiaire.' },
  { name: 'Jean Lefèvre', role: 'Président', desc: 'Président bénévole de l\'association, engagé pour le bien-être des personnes fragiles.' },
];

export default function APropos() {
  const { isMobile } = useBreakpoint();

  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 5% 60px' : '0 5% 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>À propos</div>
          <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 32 : 42, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 12 }}>
            Qui sommes-nous ?
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-3)', maxWidth: 600, margin: '0 auto' }}>
            Une association engagée au service des habitants de Talence et des alentours depuis 2010.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 40, alignItems: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 24 : 30, color: 'var(--text)', marginBottom: 16, lineHeight: 1.2 }}>
              L'aide à domicile<br />
              <span style={{ color: 'var(--red)' }}>avec humanité</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 }}>
              SOS Aides à Domicile est une association loi 1901 créée en 2010 à Talence. 
              Notre mission : permettre à chacun de vivre chez soi dans les meilleures conditions, 
              quel que soit son âge ou sa situation.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 }}>
              Nous intervenons auprès des seniors, des personnes handicapées et des familles. 
              Nos services sont personnalisés et adaptés à chaque situation.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>
              Agréés par l'État et éligibles au crédit d'impôt de 50%, nous respectons 
              la charte nationale des services à la personne.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '32px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: 'var(--text)', marginBottom: 16 }}>Nos valeurs</h3>
            {[
              { title: 'Respect', desc: 'Chaque personne est unique, nous respectons son rythme et ses choix.' },
              { title: 'Professionnalisme', desc: 'Nos intervenantes sont qualifiées, formées et régulièrement évaluées.' },
              { title: 'Proximité', desc: 'Basés à Talence, nous intervenons rapidement dans tout le secteur.' },
              { title: 'Solidarité', desc: 'Association à but non lucratif, nous réinvestissons nos ressources dans la qualité du service.' },
            ].map((v, i) => (
              <div key={i} style={{ padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: 'var(--red)', marginBottom: 2 }}>{v.title}</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 24 : 30, color: 'var(--text)', marginBottom: 32, textAlign: 'center' }}>
            Notre équipe
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
            {TEAM.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '28px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0284C7, #0EA5E9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: 24, color: '#fff', fontWeight: 800, fontFamily: F,
                }}>
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 16, color: 'var(--text)', marginBottom: 4 }}>{person.name}</h3>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--red)', marginBottom: 8 }}>{person.role}</p>
                <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0b, #1a1a1e)',
          borderRadius: 14,
          padding: isMobile ? '40px 20px' : '48px',
          textAlign: 'center',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 32 }}>
            {[
              { n: '2010', l: "Création de l'association" },
              { n: '500+', l: 'Familles accompagnées' },
              { n: '50+', l: 'Intervenantes' },
              { n: '4.9/5', l: 'Satisfaction clients' },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: F, fontSize: 36, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{s.n}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
