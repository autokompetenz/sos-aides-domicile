import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';

const F = "'Outfit',sans-serif";

const ALL_SERVICES = [
  {
    slug: 'aide-aux-seniors',
    icon: '👴',
    title: 'Aide aux seniors',
    subtitle: 'Maintien à domicile des personnes âgées',
    intro: 'Permettre aux seniors de bien vieillir chez eux, dans un environnement familier et rassurant. Notre équipe d\'intervenantes qualifiées accompagne chaque jour les personnes âgées dans les gestes essentiels de la vie quotidienne, avec respect et bienveillance.',
    items: [
      { t: 'Aide à la toilette et à l\'habillage', d: 'Assistance pour la toilette, l\'habillage et la routine matinale, dans le respect de l\'intimité et de la dignité de chaque personne.' },
      { t: 'Préparation des repas et aide à la prise alimentaire', d: 'Préparation de repas équilibrés adaptés aux régimes spécifiques, aide à la prise des repas pour les personnes à mobilité réduite.' },
      { t: 'Courses et accompagnement aux rendez-vous', d: 'Accompagnement pour les courses, les rendez-vous médicaux, les démarches administratives et les sorties.' },
      { t: 'Entretien du logement et du linge', d: 'Ménage léger, entretien du linge, maintien d\'un environnement propre et sécurisé.' },
      { t: 'Stimulation et lien social', d: 'Activités de stimulation cognitive, jeux de mémoire, lecture, promenades pour maintenir le lien social.' },
      { t: 'Surveillance et présence de nuit', d: 'Présence rassurante de nuit, surveillance, aide aux déplacements nocturnes.' },
    ],
    benefits: [
      'Maintien à domicile dans un cadre familier',
      'Préservation de l\'autonomie le plus longtemps possible',
      'Soulagement des aidants familiaux',
      'Interventions 7j/7, y compris jours fériés',
      'Suivi personnalisé par une coordinatrice référente',
    ],
    tarif: 'À partir de 22€/heure (crédit d\'impôt de 50% déduit : 11€/heure). Prise en charge possible par l\'APA.',
  },
  {
    slug: 'aide-aux-familles',
    icon: '👨‍👩‍👧‍👦',
    title: 'Aide aux familles',
    subtitle: 'Soutien à la parentalité et aux familles',
    intro: 'Concilier vie professionnelle et familiale n\'est pas toujours facile. SOS Aides à Domicile vous propose un accompagnement sur mesure pour vos enfants, de la garde périscolaire au soutien scolaire, en passant par l\'aide aux tâches quotidiennes.',
    items: [
      { t: 'Garde d\'enfants à domicile', d: 'Garde de vos enfants à votre domicile, avant ou après l\'école, les mercredis et pendant les vacances scolaires.' },
      { t: 'Aide aux devoirs et soutien scolaire', d: 'Accompagnement personnalisé pour les devoirs, méthodologie d\'apprentissage, soutien dans les matières difficiles.' },
      { t: 'Accompagnement périscolaire', d: 'Récupération à l\'école, accompagnement aux activités extrascolaires, goûter et temps calme.' },
      { t: 'Soutien à la parentalité', d: 'Écoute, conseils et accompagnement des parents dans leur rôle éducatif au quotidien.' },
      { t: 'Aide aux tâches quotidiennes', d: 'Repassage, préparation des repas, rangement, organisation de la vie de famille.' },
      { t: 'Accompagnement des familles monoparentales', d: 'Soutien renforcé pour les parents isolés, aide à l\'organisation et relais bienveillant.' },
    ],
    benefits: [
      'Intervenantes formées à la petite enfance',
      'Horaires flexibles adaptés à vos contraintes',
      'Cadre rassurant pour l\'enfant (domicile)',
      'Soutien à la parentalité',
      'Crédit d\'impôt de 50% applicable',
    ],
    tarif: 'À partir de 20€/heure (crédit d\'impôt de 50% déduit : 10€/heure). CESU préfinancé accepté.',
  },
  {
    slug: 'aide-aux-personnes-handicapees',
    icon: '♿',
    title: 'Aide aux personnes handicapées',
    subtitle: 'Accompagnement personnalisé et inclusif',
    intro: 'Notre association s\'engage pour l\'inclusion et l\'autonomie des personnes en situation de handicap. Nous proposons un accompagnement personnalisé, adapté à chaque type de handicap, pour favoriser la vie à domicile et la participation sociale.',
    items: [
      { t: 'Aide aux gestes de la vie quotidienne', d: 'Assistance pour la toilette, l\'habillage, les repas, les déplacements et tous les gestes essentiels du quotidien.' },
      { t: 'Aide à la mobilité et aux déplacements', d: 'Accompagnement dans les déplacements extérieurs, utilisation des transports, aide à la conduite.' },
      { t: 'Accompagnement aux activités sociales', d: 'Participation à des activités culturelles, sportives et de loisirs adaptées.' },
      { t: 'Soutien psychologique et moral', d: 'Écoute active, soutien moral, accompagnement dans l\'acceptation et le projet de vie.' },
      { t: 'Aide à la communication', d: 'Aide à la communication pour les personnes avec troubles du langage ou de la parole.' },
      { t: 'Relief des aidants familiaux', d: 'Prise de relais régulière pour permettre aux aidants de souffler et de se ressourcer.' },
    ],
    benefits: [
      'Intervenantes formées au handicap',
      'Accompagnement individuel personnalisé',
      'Maintien du lien social et des activités',
      'Soutien psychologique',
      'Prise en charge possible par la PCH',
    ],
    tarif: 'À partir de 22€/heure (crédit d\'impôt de 50% déduit : 11€/heure). Prestation de Compensation du Handicap (PCH) acceptée.',
  },
  {
    slug: 'aide-administrative',
    icon: '📋',
    title: 'Aide administrative',
    subtitle: 'Assistance dans vos démarches',
    intro: 'Les démarches administratives peuvent être complexes et chronophages. Notre équipe vous accompagne pas à pas dans toutes vos procédures, de la constitution des dossiers au suivi des démarches auprès des différents organismes.',
    items: [
      { t: 'Aide au remplissage de formulaires', d: 'Remplissage et vérification de vos formulaires administratifs : impôts, sécurité sociale, CAF, mutuelle.' },
      { t: 'Constitution des dossiers APA et PCH', d: 'Aide à la constitution et au suivi de vos dossiers d\'Allocation Personnalisée d\'Autonomie et de Prestation de Compensation du Handicap.' },
      { t: 'Démarches auprès de la CPAM et CAF', d: 'Accompagnement dans vos démarches auprès de l\'Assurance Maladie et de la Caisse d\'Allocations Familiales.' },
      { t: 'Déclaration d\'impôts et CESU', d: 'Aide à la déclaration d\'impôts, déclaration CESU, calcul du crédit d\'impôt pour services à la personne.' },
      { t: 'Aide à la gestion des rendez-vous', d: 'Organisation de votre agenda, rappel des rendez-vous médicaux et administratifs.' },
      { t: 'Lecture et explication des courriers', d: 'Lecture et explication de vos courriers administratifs, aide à la compréhension et à la réponse.' },
    ],
    benefits: [
      'Gain de temps et sérénité',
      'Évite les erreurs et les retards',
      'Accompagnement personnalisé',
      'Suivi des dossiers dans la durée',
      'Intervention à domicile ou à distance',
    ],
    tarif: 'À partir de 18€/heure (crédit d\'impôt de 50% déduit : 9€/heure). Forfait possible selon les besoins.',
  },
  {
    slug: 'accompagnement-social',
    icon: '🤝',
    title: 'Accompagnement social',
    subtitle: 'Lutte contre l\'isolement',
    intro: 'L\'isolement social est une épreuve difficile à tout âge. Notre service d\'accompagnement social vise à créer et maintenir du lien, à favoriser l\'intégration et à rompre la solitude, avec des interventions adaptées à chaque personne.',
    items: [
      { t: 'Visites de convivialité', d: 'Visites régulières à domicile pour discuter, partager un moment convivial et rompre l\'isolement.' },
      { t: 'Accompagnement aux activités culturelles', d: 'Sorties au musée, au cinéma, au théâtre, participation à des ateliers créatifs et culturels.' },
      { t: 'Aide à la mobilité et aux transports', d: 'Accompagnement dans les déplacements, aide à l\'utilisation des transports en commun.' },
      { t: 'Participation à la vie sociale', d: 'Accompagnement aux événements locaux, rencontres intergénérationnelles, clubs et associations.' },
      { t: 'Ateliers mémoire et bien-être', d: 'Atelices ludiques de stimulation de la mémoire, relaxation douce, activités bien-être adaptées.' },
      { t: 'Sorties collectives', d: 'Organisation de sorties en petit groupe : promenades, pique-niques, visites, marchés.' },
    ],
    benefits: [
      'Lutte contre l\'isolement et la solitude',
      'Maintien du lien social',
      'Stimulation cognitive et bien-être',
      'Activités variées et adaptées',
      'Accompagnement individuel ou en groupe',
    ],
    tarif: 'À partir de 18€/heure (crédit d\'impôt de 50% déduit : 9€/heure). Tarif réduit pour les sorties collectives.',
  },
  {
    slug: 'entretien-cadre-de-vie',
    icon: '🏠',
    title: 'Entretien du cadre de vie',
    subtitle: 'Un chez-soi propre et sécurisé',
    intro: 'Un environnement propre, rangé et sécurisé est essentiel pour bien vivre chez soi. Nous vous aidons à entretenir votre domicile avec des services adaptés à vos besoins et à votre rythme.',
    items: [
      { t: 'Ménage et entretien courant', d: 'Nettoyage des sols, poussières, sanitaires, cuisine. Entretien régulier de votre intérieur.' },
      { t: 'Entretien du linge (lavage, repassage)', d: 'Lavage, séchage, repassage et rangement de votre linge. Soin des vêtements délicats.' },
      { t: 'Petits travaux et bricolage', d: 'Petites réparations, montage de meubles, pose de tringles, changements d\'ampoules.' },
      { t: 'Jardinage léger', d: 'Entretien du jardin : arrosage, taille, désherbage, ramassage des feuilles.' },
      { t: 'Organisation et rangement', d: 'Aide au rangement, tri, organisation des espaces de vie, désencombrement.' },
      { t: 'Prévention des accidents domestiques', d: 'Repérage et correction des dangers potentiels, sécurisation du domicile pour les personnes âgées.' },
    ],
    benefits: [
      'Domicile propre, sain et agréable',
      'Sécurisation du logement',
      'Gain de temps et d\'énergie',
      'Interventions ponctuelles ou régulières',
      'Crédit d\'impôt de 50% applicable',
    ],
    tarif: 'À partir de 18€/heure (crédit d\'impôt de 50% déduit : 9€/heure). Forfait ménage régulier possible.',
  },
];

const SERVICE_IMAGES = {
  'aide-aux-seniors': 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop',
  'aide-aux-familles': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
  'aide-aux-personnes-handicapees': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
  'aide-administrative': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
  'accompagnement-social': 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop',
  'entretien-cadre-de-vie': 'https://images.unsplash.com/photo-1581579438744-1049ced4d84e?q=80&w=2070&auto=format&fit=crop',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const { isMobile } = useBreakpoint();
  const service = ALL_SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: 100, background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>🔍</p>
          <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: 28, color: 'var(--text)', marginBottom: 8 }}>Service introuvable</h1>
          <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 24 }}>Ce service n'existe pas ou a été déplacé.</p>
          <Link to="/services" className="btn-primary" style={{ fontSize: 14, padding: '14px 32px' }}>← Tous nos services</Link>
        </div>
      </div>
    );
  }

  const img = SERVICE_IMAGES[service.slug];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{
        position: 'relative',
        paddingTop: 68,
        minHeight: isMobile ? 320 : 400,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <img
          src={img}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: isMobile ? 'center' : 'center 30%',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 5%' : '0 5%', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/services" style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 12, display: 'inline-block', letterSpacing: '0.05em' }}>
              ← Retour aux services
            </Link>
            <p style={{ fontSize: 40, marginBottom: 8 }}>{service.icon}</p>
            <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 32 : 48, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 8 }}>
              {service.title}
            </h1>
            <p style={{ fontSize: isMobile ? 15 : 18, color: 'rgba(255,255,255,0.65)', maxWidth: 600 }}>
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '40px 5% 60px' : '60px 5% 80px' }}>
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: isMobile ? '24px' : '32px',
            marginBottom: 40,
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <p style={{ fontSize: isMobile ? 15 : 16, color: 'var(--text-2)', lineHeight: 1.8 }}>
            {service.intro}
          </p>
        </motion.div>

        {/* Prestations détaillées */}
        <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 22 : 28, color: 'var(--text)', marginBottom: isMobile ? 20 : 28, letterSpacing: '-0.02em' }}>
          Nos prestations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 14 : 20, marginBottom: 48 }}>
          {service.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: isMobile ? '18px' : '22px 24px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: 'var(--red)', fontSize: 18, marginTop: 1, flexShrink: 0 }}>✓</span>
                <div>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: isMobile ? 14 : 15, color: 'var(--text)', marginBottom: 4 }}>{item.t}</h3>
                  <p style={{ fontSize: isMobile ? 13 : 14, color: 'var(--text-3)', lineHeight: 1.7 }}>{item.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pourquoi nous choisir */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 24,
          marginBottom: 48,
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              background: 'var(--bg-card2)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: isMobile ? '24px' : '28px',
            }}
          >
            <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: isMobile ? 16 : 18, color: 'var(--text)', marginBottom: 16 }}>
              Pourquoi nous choisir ?
            </h3>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {service.benefits.map((b, i) => (
                <li key={i} style={{
                  padding: '10px 0',
                  borderBottom: i < service.benefits.length - 1 ? '1px solid var(--border)' : 'none',
                  fontSize: isMobile ? 13 : 14,
                  color: 'var(--text-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <span style={{ color: 'var(--red)', fontSize: 14, flexShrink: 0 }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              background: 'linear-gradient(135deg, #0a0a0b, #1a1a1e)',
              borderRadius: 14,
              padding: isMobile ? '24px' : '28px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}
          >
            <p style={{ fontSize: 28, marginBottom: 8 }}>💰</p>
            <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: isMobile ? 16 : 18, color: '#fff', marginBottom: 8 }}>
              Tarifs
            </h3>
            <p style={{ fontSize: isMobile ? 13 : 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 16 }}>
              {service.tarif}
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 13, padding: '12px 28px', alignSelf: 'flex-start' }}>
              Demander un devis
            </Link>
          </motion.div>
        </div>

        {/* Autres services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: isMobile ? 16 : 18, color: 'var(--text)', marginBottom: 16, textAlign: 'center' }}>
            Découvrez nos autres services
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5, 1fr)', gap: 12 }}>
            {ALL_SERVICES.filter(s => s.slug !== service.slug).map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                style={{
                  textDecoration: 'none',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: isMobile ? '14px 10px' : '20px 16px',
                  textAlign: 'center',
                  transition: 'border-color 0.2s, transform 0.2s',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <p style={{ fontSize: isMobile ? 20 : 28, marginBottom: 6 }}>{s.icon}</p>
                <p style={{ fontFamily: F, fontWeight: 600, fontSize: isMobile ? 11 : 12, color: 'var(--text-2)' }}>{s.title}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
