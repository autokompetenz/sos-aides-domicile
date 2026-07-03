import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import Home     from './pages/Home';
import Services from './pages/Services';
import APropos  from './pages/APropos';
import Contact  from './pages/Contact';
import Legal    from './pages/Legal';

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
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/a-propos" element={<MainLayout><APropos /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/mentions-legales" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="/politique-confidentialite" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="*" element={
          <MainLayout>
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'var(--black)' }}>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 120, fontWeight: 900, color: '#C8102E', lineHeight: 1, letterSpacing: '-0.05em' }}>404</p>
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
