import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <h1 className="customer_text">SOS AIDES À DOMICILE</h1>
            <p className="footer_lorem_text">
              Association déclarée proposant des services à domicile ou de proximité, favorisant le bien-être physique et/ou moral des personnes âgées, handicapées, dépendantes, des enfants et des familles.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h1 className="customer_text">Contact</h1>
            <p className="footer_lorem_text">
              13 Avenue Georges Lasserre<br />
              33400 Talence<br />
              SIREN : 539 339 960
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <h1 className="customer_text">Liens utiles</h1>
            <p className="footer_lorem_text1">
              <Link to="/">Accueil</Link><br />
              <Link to="/services">Services</Link><br />
              <Link to="/about">À propos</Link><br />
              <Link to="/contact">Contact</Link>
            </p>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Votre email" aria-label="Votre email" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2"><a href="#">S'abonner</a></span>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            &copy; 2025 SOS Aides à Domicile - Tous droits réservés - SIREN 539 339 960 - RNA W332012993
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
