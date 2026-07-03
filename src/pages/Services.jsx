import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';

const F = "'Outfit',sans-serif";

const SERVICES = [
  {
    icon: '👴',
    title: 'Aide aux seniors',
    subtitle: 'Maintien à domicile des personnes âgées',
    items: [
      'Aide à la toilette et à l\'habillage',
      'Préparation des repas et aide à la prise alimentaire',
      'Courses et accompagnement aux rendez-vous',
      'Entretien du logement et du linge',
      'Stimulation et lien social',
      'Surveillance et présence de nuit',
    ],
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Aide aux familles',
    subtitle: 'Soutien à la parentalité et aux familles',
    items: [
      'Garde d\'enfants à domicile',
      'Aide aux devoirs et soutien scolaire',
      'Accompagnement périscolaire',
      'Soutien à la parentalité',
      'Aide aux tâches quotidiennes',
      'Accompagnement des familles monoparentales',
    ],
  },
  {
    icon: '♿',
    title: 'Aide aux personnes handicapées',
    subtitle: 'Accompagnement personnalisé et inclusif',
    items: [
      'Aide aux gestes de la vie quotidienne',
      'Aide à la mobilité et aux déplacements',
      'Accompagnement aux activités sociales',
      'Soutien psychologique et moral',
      'Aide à la communication',
      'Relief des aidants familiaux',
    ],
  },
  {
    icon: '📋',
    title: 'Aide administrative',
    subtitle: 'Assistance dans vos démarches',
    items: [
      'Aide au remplissage de formulaires',
      'Constitution des dossiers APA et PCH',
      'Démarches auprès de la CPAM et CAF',
      'Déclaration d\'impôts et CESU',
      'Aide à la gestion des rendez-vous',
      'Lecture et explication des courriers',
    ],
  },
  {
    icon: '🤝',
    title: 'Accompagnement social',
    subtitle: 'Lutte contre l\'isolement',
    items: [
      'Visites de convivialité',
      'Accompagnement aux activités culturelles',
      'Aide à la mobilité et aux transports',
      'Participation à la vie sociale',
      'Ateliers mémoire et bien-être',
      'Sorties collectives',
    ],
  },
  {
    icon: '🏠',
    title: 'Entretien du cadre de vie',
    subtitle: 'Un chez-soi propre et sécurisé',
    items: [
      'Ménage et entretien courant',
      'Entretien du linge (lavage, repassage)',
      'Petits travaux et bricolage',
      'Jardinage léger',
      'Organisation et rangement',
      'Prévention des accidents domestiques',
    ],
  },
];

export default function Services() {
  const { isMobile } = useBreakpoint();

  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 5% 60px' : '0 5% 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Services</div>
          <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 32 : 42, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 12 }}>
            Des services adaptés à chaque besoin
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-3)', maxWidth: 600, margin: '0 auto' }}>
            Que vous soyez senior, parent, personne handicapée ou aidant, nous avons une solution pour vous.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 24 }}>
          {SERVICES.map((s, i) => {
            const slug = s.title.toLowerCase()
              .replace(/[àâä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u')
              .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <Link key={i} to={`/services/${slug}`} style={{ textDecoration: 'none' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 14,
                    padding: '32px',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, transform 0.2s',
                    height: '100%',
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <p style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</p>
                  <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: 'var(--text)', marginBottom: 4 }}>{s.title}</h2>
                  <p style={{ fontSize: 13, color: 'var(--red)', fontWeight: 600, marginBottom: 16 }}>{s.subtitle}</p>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                    {s.items.map((item, j) => (
                      <li key={j} style={{
                        padding: '8px 0',
                        borderBottom: j < s.items.length - 1 ? '1px solid var(--border)' : 'none',
                        fontSize: 14,
                        color: 'var(--text-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                        <span style={{ color: 'var(--red)', fontSize: 14 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: 12, color: 'var(--red)', fontWeight: 600, marginTop: 16, textAlign: 'right' }}>En savoir plus →</p>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: 48,
            padding: '40px',
            background: 'var(--bg-card2)',
            border: '1px solid var(--border)',
            borderRadius: 14,
          }}
        >
          <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 22, color: 'var(--text)', marginBottom: 8 }}>
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 20, maxWidth: 400, margin: '0 auto 20px' }}>
            Chaque situation est unique. Contactez-nous pour un accompagnement personnalisé.
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: 14, padding: '14px 36px' }}>
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
