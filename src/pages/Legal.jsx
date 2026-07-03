import { useBreakpoint } from '../hooks/useBreakpoint';
import { useLocation } from 'react-router-dom';

const F = "'Outfit',sans-serif";

export default function Legal() {
  const { isMobile } = useBreakpoint();
  const { pathname } = useLocation();

  const pages = {
    '/mentions-legales': {
      title: 'Mentions Légales',
      content: `
<h2>Éditeur du site</h2>
<p><strong>SOS Aides à Domicile</strong><br/>
Association loi 1901<br/>
13 Avenue Georges Lasserre<br/>
33400 Talence, France<br/>
Tél. : 05 56 78 12 34<br/>
Email : contact@sosaidesdomicile.fr</p>
<h2>Identification</h2>
<p>SIREN : 539 339 960<br/>
RNA : W332012993<br/>
APE : 88.10A — Aide à domicile<br/>
IDCC : 2941 — Branche de l'aide à domicile</p>
<h2>Directeur de la publication</h2>
<p>M. le Président de l'association SOS Aides à Domicile.</p>
<h2>Hébergement</h2>
<p>Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA.</p>
<h2>Propriété intellectuelle</h2>
<p>L'ensemble du contenu du site est la propriété exclusive de l'association SOS Aides à Domicile. Toute reproduction, distribution ou utilisation sans autorisation est interdite.</p>
<h2>Droit applicable</h2>
<p>Droit français. Juridiction compétente : Tribunal Judiciaire de Bordeaux.</p>`
    },
    '/politique-confidentialite': {
      title: 'Politique de Confidentialité',
      content: `
<h2>Collecte des données</h2>
<p>Nous collectons uniquement les données nécessaires à la gestion de nos services : nom, prénom, adresse, téléphone, email. Ces données sont collectées via notre formulaire de contact ou lors d'échanges téléphoniques.</p>
<h2>Finalités</h2>
<p>Les données collectées servent exclusivement à :<br/>
- La réponse à vos demandes de devis<br/>
- La gestion de votre dossier client<br/>
- Le suivi des interventions à domicile</p>
<h2>Durée de conservation</h2>
<p>Vos données sont conservées pendant toute la durée de notre relation contractuelle et jusqu'à 3 ans après la fin de celle-ci.</p>
<h2>Vos droits</h2>
<p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@sosaidesdomicile.fr.</p>
<h2>Cookies</h2>
<p>Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage n'est utilisé.</p>`
    }
  };

  const page = pages[pathname] || pages['/mentions-legales'];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 100 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: isMobile ? '0 5% 60px' : '0 5% 80px' }}>
        <div style={{ marginBottom: 40 }}>
          <div className="section-eyebrow">Juridique</div>
          <h1 style={{ fontFamily: F, fontWeight: 900, fontSize: isMobile ? 32 : 42, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {page.title}
          </h1>
        </div>
        <div className="legal-content" dangerouslySetInnerHTML={{ __html: page.content }} style={{
          fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8
        }} />
      </div>
    </div>
  );
}
