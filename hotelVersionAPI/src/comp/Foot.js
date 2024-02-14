import React from "react";
import './css/style.css';
import './css/scroll.css';
import './css/css/style.css';
import './css/css/bootstrap.min.css';
import info from './img/icons8-info-30.png';
import catalog from './img/icons8-catalog-30.png';
import lien from './img/icons8-lien-30.png';
import contact from './img/icons8-carte-contact-30.png';
import accueil from './img/icons8-accueil-24.png';
import courrier from './img/icons8-courrier-24.png';
import téléphone from './img/icons8-téléphone-25.png';
import impression from './img/icons8-impression-25.png';


const Foot = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted py-1">
        <section>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-2">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-2">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <img src={info} alt="info" />
                            A propos de nous
                        </h6>
                        <p>
                        Si vous voullez réserver des chambres ou des salles à notre Hotel, vous pourriez être très confus quant à la
différence de prix. Vous pouvez en voir pour aussi peu que 500 MAD par nui.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-3 mb-3">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <img src={catalog} alt="catalog" />
                            Directions
                        </h6>
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}>Dr.Nouhaila Bensalah </a>
                        </p>
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}>Youness Mounaime</a>
                        </p>
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}> Otmane El hassouni</a>
                        </p>
                    
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}>Emsi-Agdal</a>
                        </p>
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}>2023/2024</a>
                        </p>
                      
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-2 mb-3">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <img src={lien} alt="lien" />
                            Liens Utiles
                        </h6>
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}>Fes Marriott Hotel Jnan Palace </a>
                        </p>
                        <p>
                            <a href="#" className="text-reset" style={{textDecoration: 'none'}}>chambres climatisées, une piscine extérieure, une salle de sport et un sauna. </a>
                        </p>

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-4 mx-3 mb-2">
                        <h6 className="text-uppercase fw-bold mb-1">
                            <img src={contact} alt="contact" />
                            Contact
                        </h6>
                        <br/>
                        <p className="fs-6"> 
                            <img src={accueil} alt="accueil" />   Emplacement privilégié au cœur de Fès
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Du Lundi au Dimanche:
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24h/24h
                        </p>
                        <p> <img src={courrier} alt="courrier" /> elhassouniotmane88@gmail.com</p>
                        <p> <img src={courrier} alt="courrier" /> y.mounaime2002@gmail.com</p>
                        <p> <img src={téléphone} alt="téléphone" /> +212 688-512850</p>
                        <p> <img src={impression} alt="impression" /> +212 762-780157</p>
                    </div>
                </div>
                </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            <span style={{color: '#000', fontWeight: 'bold'}}>DROITS D'AUTEUR  © </span> <span style={{color: '#FFC107', fontWeight: 'bold'}}>MOUNAIME Youness - EL HASSOUNI Otmane</span>
            
        </div>
      </footer>
    </div>
  );
};

export default Foot;
