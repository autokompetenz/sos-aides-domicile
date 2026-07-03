import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';
import GoogleReviewsCarousel from '../components/GoogleReviewsCarousel';

const F = "'Outfit',sans-serif";

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Aide aux seniors',
    desc: 'Accompagnement quotidien des personnes âgées : aide à la toilette, habillage, préparation des repas, courses, accompagnement aux rendez-vous médicaux.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Aide aux familles',
    desc: 'Soutien aux familles avec enfants : garde d\'enfants, aide aux devoirs, accompagnement périscolaire, soutien à la parentalité.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Aide aux personnes handicapées',
    desc: 'Accompagnement personnalisé pour les personnes en situation de handicap : aide aux gestes de la vie quotidienne, mobilité, inclusion sociale.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Aide administrative',
    desc: 'Assistance dans les démarches administratives : constitution de dossiers APA, aide au remplissage de formulaires, accompagnement CAF, CPAM.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Accompagnement social',
    desc: 'Soutien et lien social : visites de convivialité, accompagnement aux activités culturelles, aide à la mobilité, lutte contre l\'isolement.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Entretien du cadre de vie',
    desc: 'Aide aux tâches ménagères, entretien du linge, petits travaux, maintien d\'un environnement propre et sécurisé à domicile.',
  },
];

const STEPS = [
  {
    icon: '📞',
    step: '01',
    title: 'Premier contact',
    desc: 'Appelez-nous ou remplissez notre formulaire en ligne. Nous vous rappelons sous 24h pour comprendre vos besoins et vous orienter vers le service adapté.',
  },
  {
    icon: '📋',
    step: '02',
    title: 'Évaluation des besoins',
    desc: 'Une intervenante se déplace à votre domicile pour évaluer vos besoins, définir les tâches et établir un planning personnalisé.',
  },
  {
    icon: '📄',
    step: '03',
    title: 'Devis & convention',
    desc: 'Nous vous remettons un devis détaillé et une convention de service. Transparence totale sur les tarifs, les horaires et les modalités.',
  },
  {
    icon: '🤝',
    step: '04',
    title: 'Mise en relation',
    desc: 'Nous sélectionnons l\'intervenante la plus adaptée à votre profil et organisons une première rencontre à votre domicile.',
  },
  {
    icon: '❤️',
    step: '05',
    title: 'Suivi personnalisé',
    desc: 'Un suivi régulier est assuré par notre coordinatrice. Nous restons à votre écoute pour ajuster les interventions selon l\'évolution de vos besoins.',
  },
];

const FAQS = [
  {
    q: 'Comment bénéficier de vos services ?',
    a: 'Contactez-nous par téléphone ou via notre formulaire en ligne. Nous vous rappelons sous 24h pour convenir d\'un rendez-vous d\'évaluation à votre domicile, sans engagement.',
  },
  {
    q: 'Quels sont vos tarifs ?',
    a: 'Nos tarifs varient selon les services et la durée d\'intervention. Nous établissons un devis personnalisé après évaluation de vos besoins. La plupart de nos services sont éligibles au crédit d\'impôt de 50% (CESU préfinancé, APA, PCH).',
  },
  {
    q: 'Qu\'est-ce que le crédit d\'impôt de 50% ?',
    a: 'Les services à domicile ouvrent droit à un crédit d\'impôt de 50% du montant des dépenses engagées. Par exemple, pour une facture de 100€, il ne vous en coûte que 50€ après impôt. Nous vous fournissons les documents nécessaires à la déclaration.',
  },
  {
    q: 'Puis-je bénéficier de l\'APA ou de la PCH ?',
    a: 'Oui, l\'Allocation Personnalisée d\'Autonomie (APA) et la Prestation de Compensation du Handicap (PCH) peuvent financer tout ou partie de nos interventions. Nous vous accompagnons dans vos démarches administratives.',
  },
  {
    q: 'Vos intervenantes sont-elles qualifiées ?',
    a: 'Oui, toutes nos intervenantes sont diplômées, formées et expérimentées. Elles bénéficient d\'une formation continue et sont régulièrement évaluées. Nous les sélectionnons rigoureusement pour garantir un service de qualité.',
  },
  {
    q: 'Quels secteurs couvrez-vous ?',
    a: 'Nous intervenons principalement sur Talence et les communes alentour : Bordeaux, Pessac, Gradignan, Mérignac, Villenave-d\'Ornon, Bègles. Contactez-nous pour vérifier notre présence dans votre secteur.',
  },
];

function CookieBanner() {
  const [visible, setVisible] = useState(!localStorage.getItem('sos_cookies'));
  if (!visible) return null;
  const accept = () => { localStorage.setItem('sos_cookies', '1'); setVisible(false); };
  const decline = () => { localStorage.setItem('sos_cookies', '0'); setVisible(false); };
  return (
    <div className="cookie-banner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
      <p style={{ fontSize: 14, color: 'var(--text-2)', flex: 1 }}>🍪 Nous utilisons des cookies pour améliorer votre expérience.</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={decline} style={{ padding: '9px 18px', background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text-3)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: F }}>Refuser</button>
        <button onClick={accept} className="btn-gold" style={{ fontSize: 13, padding: '9px 20px' }}>Accepter</button>
      </div>
    </div>
  );
}

export default function Home() {
  const { isMobile } = useBreakpoint();
  const [openIndex, setOpenIndex] = useState(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    const el = document.querySelector('.cookie-banner');
    if (el) {
      const orig = el.style.display;
      if (window.innerWidth < 768) el.style.display = 'block';
      return () => { if (el) el.style.display = orig; };
    }
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <motion.section style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background image */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, position: 'absolute', inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2070&auto=format&fit=crop"
            alt=""
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: isMobile ? '30% center' : 'center center',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.7) 100%)',
          }} />
          <div style={{
            position: 'absolute', top: '20%', right: -80, width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(14,164,233,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', bottom: '10%', left: -60, width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(14,164,233,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
        </motion.div>

        <div style={{
          position: 'relative', zIndex: 2,
          textAlign: 'center',
          maxWidth: 820,
          padding: isMobile ? '80px 6% 60px' : '0 5%',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 100,
              padding: '6px 16px 6px 6px',
              marginBottom: isMobile ? 24 : 28,
            }}>
              <span style={{
                background: 'var(--red)',
                color: '#fff', fontSize: 10, fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: 100,
              }}>
                Association agréée
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Services à la personne</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: F, fontWeight: 900,
              fontSize: isMobile ? 'clamp(32px, 9vw, 44px)' : 'clamp(48px, 5.5vw, 76px)',
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: isMobile ? 16 : 20,
            }}
          >
            Des services à domicile<br />
            <span style={{
              background: 'linear-gradient(135deg, #7DD3FC, #0EA5E9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              avec cœur et professionnalisme
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: isMobile ? 16 : 20,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.65,
              maxWidth: 600,
              margin: '0 auto 32px',
              fontFamily: F,
            }}
          >
            SOS Aides à Domicile accompagne les seniors, les familles et les personnes handicapées
            à Talence et ses alentours. Bien vieillir chez soi, c'est possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="tel:+33556781234" className="btn-primary" style={{
              fontSize: isMobile ? 13 : 14,
              padding: isMobile ? '14px 28px' : '16px 36px',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6, verticalAlign: 'middle' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              05 56 78 12 34
            </a>
            <a href="/contact" className="btn-secondary" style={{
              fontSize: isMobile ? 13 : 14,
              padding: isMobile ? '14px 28px' : '16px 36px',
              borderColor: 'rgba(255,255,255,0.25)',
              color: '#fff',
            }}>
              Demander un devis
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-card2)', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 56 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Nos Services</div>
            <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(26px,4vw,52px)', color: 'var(--text)', letterSpacing: '-0.02em' }}>
              Un accompagnement sur mesure
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 16, color: 'var(--text-3)', marginTop: 12, maxWidth: 560, margin: '12px auto 0', padding: isMobile ? '0 4%' : 0 }}>
              Du soutien quotidien aux soins spécialisés, nous nous adaptons à vos besoins.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 16 : 24,
          }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: isMobile ? '24px 20px' : '32px 28px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, borderRadius: 12,
                  background: 'var(--red-bg)',
                  border: '1px solid var(--red-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--red)',
                  marginBottom: isMobile ? 14 : 18,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: isMobile ? 15 : 17, color: 'var(--text)', marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: isMobile ? 13 : 14, color: 'var(--text-3)', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS — Comment ça marche ─────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 56 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Comment ça marche</div>
            <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(26px,4vw,52px)', color: 'var(--text)', letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>
              De la demande au suivi
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 16, color: 'var(--text-3)', marginTop: 12, maxWidth: 560, margin: '12px auto 0', padding: isMobile ? '0 4%' : 0 }}>
              Un processus simple et transparent, du premier contact jusqu'au suivi personnalisé.
            </p>
          </div>

          {!isMobile ? (
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, rgba(14,164,233,0.08), rgba(14,164,233,0.4), rgba(14,164,233,0.08))', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
              {STEPS.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 0, alignItems: 'center', marginBottom: i < STEPS.length - 1 ? 40 : 0 }}
                  >
                    <div style={{ gridColumn: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: 40 }}>
                      {isLeft ? <StepCard data={s} align="right" /> : <div />}
                    </div>
                    <div style={{ gridColumn: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #0284C7, #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 0 0 6px var(--bg), 0 0 0 8px rgba(14,164,233,0.2)' }}>
                        {s.icon}
                      </div>
                    </div>
                    <div style={{ gridColumn: 3, paddingLeft: 40 }}>
                      {!isLeft ? <StepCard data={s} align="left" /> : <div />}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div style={{ position: 'relative', paddingLeft: 44 }}>
              <div style={{ position: 'absolute', left: 16, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, rgba(14,164,233,0.08), rgba(14,164,233,0.4), rgba(14,164,233,0.08))' }} />
              {STEPS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ position: 'relative', marginBottom: i < STEPS.length - 1 ? 24 : 0 }}
                >
                  <div style={{
                    position: 'absolute', left: -34, top: 14,
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0284C7, #0EA5E9)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14,
                    boxShadow: '0 0 0 4px var(--bg), 0 0 0 6px rgba(14,164,233,0.15)',
                    zIndex: 2,
                  }}>
                    {s.icon}
                  </div>
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.25em', color: 'var(--red)', background: 'var(--red-bg)', border: '1px solid var(--red-border)', padding: '2px 8px', borderRadius: 3 }}>
                        {s.step}
                      </span>
                      <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 14, color: 'var(--text)' }}>{s.title}</h3>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a0b, #1a1a1e)', padding: isMobile ? '60px 5%' : '80px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? 24 : 32, textAlign: 'center' }}>
          {[
            { n: '15+', l: "Années d'expérience" },
            { n: '500+', l: 'Familles accompagnées' },
            { n: '50+', l: 'Intervenantes qualifiées' },
            { n: '4.9', l: 'Note moyenne ★' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p style={{ fontFamily: F, fontSize: isMobile ? 34 : 42, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{s.n}</p>
              <p style={{ fontSize: isMobile ? 12 : 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <GoogleReviewsCarousel />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }} className="section-pad">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(24px,4vw,50px)', color: 'var(--text)', letterSpacing: '-0.02em', whiteSpace: 'pre-line', lineHeight: 1.1 }}>
              Vos questions, nos réponses
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${isOpen ? 'rgba(14,164,233,0.35)' : 'var(--border)'}`,
                    borderRadius: 14,
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 4px 24px rgba(14,164,233,0.08)' : 'var(--shadow-sm)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: isMobile ? '16px 18px' : '20px 24px',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      fontFamily: F, fontWeight: 700, fontSize: isMobile ? 14 : 15, color: 'var(--text)',
                      textAlign: 'left', gap: 12,
                    }}
                  >
                    {item.q}
                    <span style={{
                      fontSize: 18, color: isOpen ? 'var(--red)' : 'var(--text-3)',
                      transition: 'transform 0.3s, color 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      flexShrink: 0,
                    }}>
                      +
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ padding: isMobile ? '0 18px 16px' : '0 24px 20px', fontSize: isMobile ? 13 : 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
                      {item.a}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a0b, #1a1a1e)', position: 'relative', overflow: 'hidden' }} className="section-pad">
        <div style={{
          position: 'absolute', top: '30%', right: -100, width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(14,164,233,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(24px,4vw,48px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Prêt à être accompagné ?
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(255,255,255,0.6)', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
            Contactez-nous dès aujourd'hui pour un rendez-vous gratuit à votre domicile.
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: isMobile ? 13 : 14, padding: isMobile ? '14px 36px' : '16px 44px' }}>
            Nous contacter
          </Link>
        </div>
      </section>

      <CookieBanner />
    </>
  );
}

function StepCard({ data, align }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: '24px 28px',
      boxShadow: 'var(--shadow-sm)',
      maxWidth: 420,
      textAlign: align,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
        <span style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--red)', background: 'var(--red-bg)', border: '1px solid var(--red-border)',
          padding: '3px 10px', borderRadius: 3,
          order: align === 'right' ? 2 : 1,
        }}>
          STEP {data.step}
        </span>
      </div>
      <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: 'var(--text)', marginBottom: 10 }}>
        {data.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.7 }}>{data.desc}</p>
    </div>
  );
}
