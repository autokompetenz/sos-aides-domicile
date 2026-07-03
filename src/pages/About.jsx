function About() {
  return (
    <>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="about_text">Qui sommes-nous ?</h1>
              <p className="lorem_text">
                SOS Aides à Domicile est une association déclarée, créée le 2 novembre 2011, régie par la loi du 1er juillet 1901. Immatriculée au Registre National des Associations sous le numéro W332012993, notre association a pour objet de proposer des services à domicile ou de proximité, favorisant ainsi le bien-être physique et/ou moral de personnes âgées, de personnes handicapées, de personnes dépendantes ou non, d'enfants et des familles.<br /><br />
                Notre siège social est situé au 13 Avenue Georges Lasserre, 33400 Talence. Nous intervenons dans le cadre de la convention collective de l'aide, de l'accompagnement, des soins et des services à domicile (IDCC 2941).<br /><br />
                Notre équipe est composée de professionnels qualifiés, formés et passionnés par l'accompagnement des personnes. Nous mettons un point d'honneur à offrir un service de qualité, respectueux de la dignité et de l'intimité de chacun.
              </p>
            </div>
            <div className="col-md-6">
              <div className="image_1"><img src="/images/img-1.svg" alt="SOS Aides à Domicile" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="who_section layout_padding">
        <div className="container">
          <h1 className="who_taital">Informations légales</h1>
          <h4 className="designer_text">TRANSPARENCE & CONFIANCE</h4>
          <p className="lorem_ipsum_text">
            <strong>SIREN :</strong> 539 339 960<br />
            <strong>SIRET (siège) :</strong> 539 339 960 00020<br />
            <strong>Forme juridique :</strong> Association déclarée<br />
            <strong>N° TVA :</strong> FR43539339960<br />
            <strong>RNA :</strong> W332012993 (inscrit le 02/11/2011)<br />
            <strong>Code NAF / APE :</strong> 88.10A (Aide à domicile)<br />
            <strong>Convention collective :</strong> IDCC 2941 - Branche de l'aide, de l'accompagnement, des soins et des services à domicile
          </p>
        </div>
      </div>
    </>
  )
}

export default About
