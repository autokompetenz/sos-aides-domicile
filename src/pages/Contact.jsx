function Contact() {
  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="contact_text">Contactez-nous</h1>
            <div className="mail_sectin">
              <input type="text" className="email-bt" placeholder="Nom" name="Name" />
              <input type="text" className="email-bt" placeholder="Email" name="Email" />
              <input type="text" className="email-bt" placeholder="Téléphone" name="Phone" />
              <textarea className="massage-bt" placeholder="Votre message" rows="5" id="comment" name="Message"></textarea>
              <div className="send_bt"><a href="#">ENVOYER</a></div>
            </div>
            <div style={{ color: '#fff', marginTop: '30px' }}>
              <p><strong>SOS Aides à Domicile</strong></p>
              <p>13 Avenue Georges Lasserre, 33400 Talence</p>
              <p>SIREN : 539 339 960</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_main">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=13+Avenue+Georges+Lasserre+33400+Talence+France" width="600" height="500" frameBorder="0" style={{ border: 0, width: '100%' }} allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
