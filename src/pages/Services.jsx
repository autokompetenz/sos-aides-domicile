function Services() {
  return (
    <div className="services_section layout_padding">
      <div className="container">
        <h1 className="services_taital">Nos services</h1>
        <p className="many_taital">Des prestations adaptées à vos besoins, dispensées par une équipe qualifiée</p>
        <div className="services_section2 layout_padding">
          <div className="row">
            {[
              { img: 'icon-1.png', title: 'Aide aux seniors', desc: 'Accompagnement au quotidien des personnes âgées : aide à la toilette, habillage, préparation des repas, accompagnement aux rendez-vous médicaux, stimulation cognitive et maintien du lien social. Notre objectif est de permettre à nos aînés de rester chez eux le plus longtemps possible dans les meilleures conditions.' },
              { img: 'icon-2.png', title: 'Aide aux familles', desc: 'Soutien à la parentalité, garde d\'enfants à domicile, aide aux devoirs, accompagnement périscolaire. Nous aidons les familles à concilier vie professionnelle et vie familiale en toute sérénité.' },
              { img: 'icon-3.png', title: 'Handicap & dépendance', desc: 'Accompagnement personnalisé pour les personnes en situation de handicap ou de dépendance. Aide aux gestes de la vie quotidienne, assistance à la mobilité, accompagnement dans les démarches administratives et sociales.' },
              { img: 'icon-4.png', title: 'Services de proximité', desc: 'Courses alimentaires, petits travaux domestiques, aide au jardinage, accompagnement aux sorties et promenades, transport accompagné. Tous les petits gestes qui font une grande différence au quotidien.' },
            ].map((item, i) => (
              <div className="col-lg-6 col-sm-6" key={i}>
                <div className="icon_1"><img src={`/images/${item.img}`} alt={item.title} /></div>
                <h2 className="furnitures_text">{item.title}</h2>
                <p className="dummy_text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
