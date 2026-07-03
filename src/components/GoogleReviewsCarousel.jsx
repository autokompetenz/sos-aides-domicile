import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';

const F = "'Outfit',sans-serif";

const REVIEWS = [
  {
    name: 'Marie L.',
    text: "Une équipe formidable, à l'écoute et très professionnelle. Ma mère est suivie depuis 6 mois et nous sommes ravis de la qualité des soins.",
    rating: 5,
    date: 'Il y a 2 semaines',
    source: 'Google',
  },
  {
    name: 'Jean-Pierre D.',
    text: "Grâce à SOS Aides à Domicile, je peux rester chez moi en toute sécurité. Mes intervenantes sont adorables et compétentes. Je recommande vivement.",
    rating: 5,
    date: 'Il y a 1 mois',
    source: 'Google',
  },
  {
    name: 'Sophie M.',
    text: "Un accompagnement précieux pour notre fils en situation de handicap. Les intervenantes sont patients et bien formés. Un vrai soulagement au quotidien.",
    rating: 5,
    date: 'Il y a 3 semaines',
    source: 'Google',
  },
  {
    name: 'Philippe R.',
    text: "Service impeccable. Intervention rapide, personnel qualifié et très sympathique. Ma femme est ravie de l'aide reçue depuis 3 mois.",
    rating: 5,
    date: 'Il y a 2 mois',
    source: 'Google',
  },
  {
    name: 'Catherine V.',
    text: "Très satisfaite de l'accompagnement proposé à ma mère. Les intervenantes sont ponctuelles, respectueuses et d'une grande gentillesse.",
    rating: 4,
    date: 'Il y a 1 mois',
    source: 'Google',
  },
  {
    name: 'Marc L.',
    text: "Professionnalisme et humanité sont au rendez-vous. L'association a su s'adapter parfaitement à nos besoins. Un grand merci à toute l'équipe.",
    rating: 5,
    date: 'Il y a 3 mois',
    source: 'Google',
  },
];

function Stars({ n = 5 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < n ? '#FFAA00' : '#E5E7EB', fontSize: 14 }}>★</span>
      ))}
    </span>
  );
}

export default function GoogleReviewsCarousel() {
  const { isMobile } = useBreakpoint();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const perPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(REVIEWS.length / perPage);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const pageReviews = REVIEWS.slice(current * perPage, current * perPage + perPage);

  return (
    <div style={{
      background: 'var(--bg-card2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: isMobile ? '60px 5%' : '80px 5%',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Avis Google</div>
          <h2 style={{ fontFamily: F, fontWeight: 900, fontSize: 'clamp(24px,4vw,50px)', color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 8 }}>
            Ce que disent nos clients
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
            <Stars n={5} />
            <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: 'var(--text-2)' }}>4.9/5</span>
            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>— {REVIEWS.length} avis</span>
          </div>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${perPage}, 1fr)`,
                gap: isMobile ? 0 : 20,
              }}
            >
              {pageReviews.map((r, i) => (
                <div key={i} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: isMobile ? '24px' : '28px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {/* Google badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <svg width="18" height="18" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>{r.source}</span>
                  </div>

                  <Stars n={r.rating} />
                  <p style={{
                    fontSize: isMobile ? 13 : 14,
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                    margin: '10px 0 14px',
                    fontStyle: 'italic',
                    flex: 1,
                  }}>
                    "{r.text}"
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border)',
                    paddingTop: 12,
                  }}>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: isMobile ? 13 : 14, color: 'var(--text)' }}>{r.name}</p>
                      <p style={{ fontSize: 11, color: 'var(--text-3)' }}>{r.date}</p>
                    </div>
                    <div style={{
                      background: '#1a73e8',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M21.58 16.09l-1.09-1.09a2 2 0 00-1.83-.57l-2.44.49a2 2 0 00-1.47 1.47l-.49 2.44a2 2 0 00.57 1.83l1.09 1.09a2 2 0 002.83 0l2.83-2.83a2 2 0 000-2.83z"/>
                        <path d="M12 2a10 10 0 00-7.07 17.07l1.41-1.41A8 8 0 1118.34 6.66a8 8 0 012.73 6.07A10 10 0 0012 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {!isMobile && totalPages > 1 && (
            <>
              <button onClick={prev} style={{
                position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-2)', fontSize: 18,
                transition: 'all 0.2s', zIndex: 2,
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
                ‹
              </button>
              <button onClick={next} style={{
                position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-2)', fontSize: 18,
                transition: 'all 0.2s', zIndex: 2,
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}>
                ›
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: i === current ? 28 : 8, height: 8, borderRadius: 4,
                background: i === current ? 'var(--red)' : 'var(--border-2)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }} />
            ))}
          </div>
        )}

        {/* Google logo */}
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href="https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: 'var(--text-3)', textDecoration: 'none' }}>
            Voir tous les avis sur Google →
          </a>
        </div>
      </div>
    </div>
  );
}
