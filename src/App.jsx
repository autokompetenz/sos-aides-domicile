import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import Home          from './pages/Home';
import Services      from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import APropos       from './pages/APropos';
import Contact       from './pages/Contact';
import Legal         from './pages/Legal';

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 999,
      width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
      background: 'var(--red)', color: '#fff', fontSize: 18,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(14,164,233,0.35)',
      transition: 'all 0.25s',
    }}
      onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 28px rgba(14,164,233,0.5)' }}
      onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '0 4px 20px rgba(14,164,233,0.35)' }}
    >↑</button>
  );
}

export default function App() {
  function MainLayout({ children }) {
    return (
      <>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Toast />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/services/:slug" element={<MainLayout><ServiceDetail /></MainLayout>} />
        <Route path="/a-propos" element={<MainLayout><APropos /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/mentions-legales" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="/politique-confidentialite" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="*" element={
          <MainLayout>
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'var(--black)' }}>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 120, fontWeight: 900, color: '#0EA5E9', lineHeight: 1, letterSpacing: '-0.05em' }}>404</p>
                <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 32 }}>Page introuvable</h1>
                <a href="/" className="btn-primary" style={{ fontSize: 14, padding: '16px 40px' }}>← Accueil</a>
              </div>
            </div>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
