import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBreakpoint } from '../hooks/useBreakpoint';

const F = "'Outfit',sans-serif";

export default function Contact() {
  const { isMobile } = useBreakpoint();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '0 5% 60px' : '0 5% 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Contact</div>
          <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 32 : 42, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 12 }}>
            Parlons de vos besoins
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-3)', maxWidth: 500, margin: '0 auto' }}>
            Une question, un projet ? Contactez-nous, nous vous répondons sous 24h.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '40px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: 48 }}>✉️</p>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: 'var(--text)', margin: '16px 0 8px' }}>Message envoyé !</h3>
                <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Nous vous recontacterons dans les plus brefs délais.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  style={{ marginTop: 20, padding: '12px 28px', background: 'var(--red)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontFamily: F, fontWeight: 600, fontSize: 14 }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: F }}>Nom complet *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)', fontSize: 14, fontFamily: F, outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--red)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: F }}>Email *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)', fontSize: 14, fontFamily: F, outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--red)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: F }}>Téléphone</label>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)', fontSize: 14, fontFamily: F, outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--red)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: F }}>Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)', fontSize: 14, fontFamily: F, outline: 'none', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--red)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <button type="submit" className="btn-primary" style={{ fontSize: 14, padding: '16px', width: '100%' }}>
                  Envoyer le message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {[
              { icon: '📍', title: 'Adresse', text: '13 Avenue Georges Lasserre\n33400 Talence' },
              { icon: '📞', title: 'Téléphone', text: '05 56 78 12 34\nLun-Ven 9h-12h / 14h-17h', href: 'tel:+33556781234' },
              { icon: '✉️', title: 'Email', text: 'contact@sosaidesdomicile.fr', href: 'mailto:contact@sosaidesdomicile.fr' },
              { icon: '🕐', title: 'Horaires', text: 'Lundi – Vendredi : 9h – 17h\nSamedi : sur rendez-vous\nDimanche : fermé' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '20px 24px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <p style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</p>
                <h3 style={{ fontFamily: F, fontWeight: 800, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{item.title}</h3>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: 14, color: 'var(--red)', textDecoration: 'none', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {item.text}
                  </a>
                ) : (
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.text}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
