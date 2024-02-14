import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/css/style.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import room1 from './image/room1.jpg';
import room2 from './image/room2.jpg';
import room3 from './image/room3.jpg';
import room4 from './image/room4.jpg';


const Accueil = () => {
  
  const [chambresData, setChambresData] = useState([]);
  const [sallesReunionData, setSallesReunionData] = useState([]);

  const getChambres = () => {
    axios.get('https://localhost:7172/api/Chambre')
      .then((result) => {
        setChambresData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching Chambres data:", error);
      });
  };

  const getSallesReunion = () => {
    axios.get('https://localhost:7172/api/SalleReunion')
      .then((result) => {
        setSallesReunionData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching SallesReunion data:", error);
      });
  };

  useEffect(() => {
    getChambres();
    getSallesReunion();
  }, []);


  return (
    <div>
      <section className="banner_area">
      <div className="booking_table d_flex align-items-center">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.9"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="banner_content text-center">
            <h6>LOIN DE LA VIE MONOTONE</h6>
            <h2 style={{color: '#FFC107'}}>Détends ton esprit</h2>
            <p>
              Si vous voullez réserver des chambres ou des salles à notre Hotel, vous pourriez
              être très confus quant à la<br />
              différence de prix. Vous pouvez en voir pour aussi peu que 500 MAD
              par nui.
            </p>
            <a href="#" className="btn theme_btn button_hover">Commencer</a>
          </div>
        </div>
      </div>
    </section>
    
    <section id="chambres" className="accomodation_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">NOS CHAMBRES</h2>
          </div>
          <div className="row mb_30">
            {chambresData && chambresData.length > 0 ? (
              chambresData.map((item, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="accomodation_item text-center">
                    <div className="hotel_img">
                      <img src={item.urlImage} alt={`room-${index}`} style={{ height: '200px', width: 'auto' }} />
                      <Link to={`/reservationchambre/${item.numeroChambre}`} className="btn theme_btn button_hover" style={{ backgroundColor: 'black', color: 'white' }}>
  Réserver
</Link>
                    </div>
                    <a href="#"><h4 className="sec_h4">{item.typeChambre}</h4></a>
                    <h5>{item.prix_chambre} MAD<small>/nuit</small></h5>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading Chambres...</div>
            )}
          </div>
        </div>
      </section>
    
    <section id="salles" >
    <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">NOS SALLES DE REUNION</h2>
          </div>
          <div className="row mb_30">
            {sallesReunionData && sallesReunionData.length > 0 ? (
              sallesReunionData.map((item, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="accomodation_item text-center">
                    <div className="hotel_img">
                      <img src={item.urlImage} alt={`room-${index}`} style={{ height: '200px', width: 'auto' }} />
                      <Link to={`/reservationsalle/${item.numeroSalle}`} className="btn theme_btn button_hover" style={{ backgroundColor: 'black', color: 'white' }}>
  Réserver
</Link>

                    </div>
                    <h4 className="sec_h4">Capacite:{item.capacite
                    }</h4>
                    <h5>{item.prix_SR} MAD<small>/JOUR</small></h5>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading Chambres...</div>
            )}
          </div>
        </div>
        <br /><br /><br />
    </section>

    <section id="services" className="facilities_area section_gap">
      <div
        className="overlay bg-parallax"
        data-stellar-ratio="0.8"
        data-stellar-vertical-offset="0"
        data-background=""
      ></div>
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title_w">Nos Services Royals</h2>
        </div>
        <div className="row mb_30">
          <div className="col-lg-4 col-md-6">
            <div className="facilities_item">
              <h4 className="sec_h4"><i className="lnr lnr-dinner"></i>Restaurant</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="facilities_item">
              <h4 className="sec_h4">
                <i className="lnr lnr-bicycle"></i>Club de sport
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="facilities_item">
              <h4 className="sec_h4"><i className="lnr lnr-shirt"></i>Piscine</h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="facilities_item">
              <h4 className="sec_h4">
                <i className="lnr lnr-car"></i>Louer une voiture
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="facilities_item">
              <h4 className="sec_h4">
                <i className="lnr lnr-construction"></i>Gymnésie
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="facilities_item">
              <h4 className="sec_h4"><i className="lnr lnr-coffee-cup"></i>Boisson</h4>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Accueil;
