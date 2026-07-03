function Home() {
  return (
    <>
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="costum_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="furniture_text">SOS AIDES À DOMICILE</h1>
                <p className="there_text">Des services de proximité pour le bien-être de tous, à chaque étape de la vie.</p>
                <div className="contact_bt_main">
                  <div className="contact_bt"><a href="/contact">Contactez-nous</a></div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="furniture_text">AIDE AUX SENIORS</h1>
                <p className="there_text">Accompagnement et soins à domicile pour le maintien de l'autonomie des personnes âgées.</p>
                <div className="contact_bt_main">
                  <div className="contact_bt"><a href="/contact">Contactez-nous</a></div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="furniture_text">SOUTIEN AUX FAMILLES</h1>
                <p className="there_text">Des solutions adaptées pour accompagner les familles et leurs enfants au quotidien.</p>
                <div className="contact_bt_main">
                  <div className="contact_bt"><a href="/contact">Contactez-nous</a></div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
              <i><img src="/images/left-arrow.png" alt="prev" /></i>
            </a>
            <a className="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
              <i><img src="/images/right-arrow.png" alt="next" /></i>
            </a>
          </div>
        </div>
      </div>

      <div className="services_section layout_padding">
        <div className="container">
          <h1 className="services_taital">Nos services</h1>
          <p className="many_taital">Des prestations adaptées à vos besoins, dispensées par une équipe qualifiée</p>
          <div className="services_section2 layout_padding">
            <div className="row">
              {[
                { img: 'icon-1.svg', title: 'Aide aux seniors', desc: 'Maintien à domicile, accompagnement, soins et assistance pour nos aînés.' },
                { img: 'icon-2.svg', title: 'Aide aux familles', desc: 'Soutien à la parentalité, garde d\'enfants et accompagnement éducatif.' },
                { img: 'icon-3.svg', title: 'Personnes handicapées', desc: 'Accompagnement personnalisé pour favoriser l\'autonomie et l\'inclusion.' },
                { img: 'icon-4.svg', title: 'Services de proximité', desc: 'Courses, petits travaux, accompagnement aux rendez-vous et sorties.' },
              ].map((item, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div className="icon_1"><img src={`/images/${item.img}`} alt={item.title} /></div>
                  <h2 className="furnitures_text">{item.title}</h2>
                  <p className="dummy_text">{item.desc}</p>
                  <div className="read_bt_main">
                    <div className="read_bt"><a href="/services">En savoir +</a></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="about_text">Qui sommes-nous ?</h1>
              <p className="lorem_text">
                SOS Aides à Domicile est une association déclarée (RNA W332012993) créée le 2 novembre 2011. Notre objet social est de proposer des services à domicile ou de proximité, favorisant ainsi le bien-être physique et/ou moral des personnes âgées, des personnes handicapées, des personnes dépendantes ou non, des enfants et des familles.<br /><br />
                Basée à Talence (33400), notre équipe intervient sur tout le secteur avec professionnalisme et bienveillance.
              </p>
              <div className="read_bt1"><a href="/about">En savoir +</a></div>
            </div>
            <div className="col-md-6">
              <div className="image_1"><img src="/images/img-1.svg" alt="SOS Aides à Domicile" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="who_section layout_padding">
        <div className="container">
          <h1 className="who_taital">Notre engagement</h1>
          <h4 className="designer_text">BIEN-ÊTRE & PROXIMITÉ</h4>
          <p className="lorem_ipsum_text">
            Nous croyons que chacun mérite de vivre dignement chez soi, entouré de soins et d'attention. Notre équipe intervient avec respect, discrétion et professionnalisme pour accompagner les personnes dans leur quotidien. Que ce soit pour un soutien ponctuel ou un accompagnement régulier, nous sommes à vos côtés.
          </p>
        </div>
        <div className="get_bt_main">
          <div className="get_bt"><a href="/contact">Demander un devis</a></div>
        </div>
      </div>

      <div className="clients_section layout_padding">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="client_text">Témoignages</h1>
                <p className="ipsum_text">Ce que disent nos bénéficiaires</p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7"><img src="/images/img-7.svg" alt="Marie" /></div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">Marie L.</h1>
                        <p className="dolor_ipsum_text">Grâce à SOS Aides à Domicile, j'ai pu rester chez moi en toute sérénité. Leur équipe est formidable, à l'écoute et très professionnelle.</p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7"><img src="/images/img-8.svg" alt="Jean" /></div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">Jean-Pierre D.</h1>
                        <p className="dolor_ipsum_text">Un accompagnement précieux au quotidien. Je recommande vivement leurs services à toutes les familles qui cherchent une aide fiable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="contact_text">CONTACTEZ-NOUS</h1>
              <div className="mail_sectin">
                <input type="text" className="email-bt" placeholder="Nom" name="Name" />
                <input type="text" className="email-bt" placeholder="Email" name="Email" />
                <input type="text" className="email-bt" placeholder="Téléphone" name="Phone" />
                <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                <div className="send_bt"><a href="#">ENVOYER</a></div>
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
    </>
  )
}

export default Home
