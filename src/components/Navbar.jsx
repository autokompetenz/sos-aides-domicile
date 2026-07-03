import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../store';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Navbar() {
  const { theme, toggle } = useThemeStore();
  const { isMobile } = useBreakpoint();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHero = location.pathname === '/' && !scrolled;
  const F = "'Outfit',sans-serif";

  const iconColor = scrolled
    ? (isDark ? 'rgba(255,255,255,0.85)' : '#222')
    : isHero ? '#fff' : (isDark ? 'rgba(255,255,255,0.8)' : '#333');

  const btnBg = scrolled
    ? (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)')
    : isHero ? 'rgba(255,255,255,0.1)' : (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)');

  const btnBorder = (open) => open
    ? 'var(--red)'
    : scrolled ? (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)')
    : isHero ? 'rgba(255,255,255,0.2)' : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)');

  const menuBg = isDark ? '#0f0f0f' : '#ffffff';
  const menuText = isDark ? '#ffffff' : '#111111';
  const menuText2 = isDark ? 'rgba(255,255,255,0.65)' : '#444444';
  const menuBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const menuHover = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/services', label: 'Services' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
  ];

  const NavLink = ({ to, label }) => {
    const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    return (
      <Link to={to} style={{
        fontSize: isMobile ? 14 : 12,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: active ? 'var(--red)' : menuText2,
        textDecoration: 'none',
        transition: 'color 0.2s',
        borderBottom: active ? '1.5px solid var(--red)' : '1.5px solid transparent',
        paddingBottom: 2,
      }}
        onMouseOver={e => e.currentTarget.style.color = 'var(--red)'}
        onMouseOut={e => e.currentTarget.style.color = active ? 'var(--red)' : menuText2}>
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'transparent',
        borderBottom: scrolled ? `1px solid ${menuBorder}` : '1px solid transparent',
        transition: 'border-color 0.4s var(--ease)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 4%' : '0 5%', height: 68,
      }}>

        {scrolled && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: -1,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            background: isDark ? 'rgba(10,10,11,0.97)' : 'rgba(255,255,255,0.97)',
            transition: 'background 0.4s',
          }} />
        )}

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1, flexShrink: 0, position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: F, fontSize: 16, fontWeight: 900,
            color: scrolled ? (isDark ? '#fff' : '#111') : isHero ? '#fff' : (isDark ? '#fff' : '#111'),
            letterSpacing: '0.05em', transition: 'color 0.3s',
          }}>
            SOS Aides à Domicile
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.4em', color: 'var(--red)', textTransform: 'uppercase', marginTop: 2 }}>
            Association · Talence
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: btnBg,
              border: `1.5px solid ${btnBorder(menuOpen)}`,
              borderRadius: 8,
              padding: isMobile ? '8px' : '7px 12px',
              cursor: 'pointer', transition: 'all 0.2s',
              height: 38, width: isMobile ? 38 : 'auto',
              justifyContent: 'center',
            }}>
            <span style={{ fontSize: 20, lineHeight: 1, color: iconColor }}>
              {menuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen modal overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: menuBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 36, cursor: 'default',
                padding: isMobile ? '0 5%' : 0,
              }}
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35, delay: 0.12 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink to={l.to} label={l.label} />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: 1, height: 32,
                  background: `linear-gradient(to bottom, transparent, ${menuBorder}, transparent)`,
                }}
              />

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                onClick={toggle}
                onMouseOver={e => e.currentTarget.style.color = 'var(--red)'}
                onMouseOut={e => e.currentTarget.style.color = menuText2}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: isMobile ? 16 : 14,
                  fontWeight: 600,
                  color: menuText2,
                  fontFamily: F,
                  background: 'transparent',
                  border: 'none', cursor: 'pointer',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
              >
                <span style={{ fontSize: isMobile ? 20 : 18 }}>
                  {isDark ? '☀️' : '🌙'}
                </span>
                {isDark ? 'Mode clair' : 'Mode sombre'}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
