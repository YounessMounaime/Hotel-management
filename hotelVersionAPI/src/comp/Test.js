import React from "react";
import './css/style.css';
import './css/scroll.css';
import './css/css/style.css';
import './css/css/bootstrap.min.css';
import logo from './image/logo-removebg-preview.png';
import logoBN from './image/logoBN.png';
import icons8Xlsimport48 from './img/icons8-xls-import-48.png';
import ajouter from './img/icons8-ajouter.png';
import supprimer from './img/icons8-supprimer-30.png';
import chercher from './img/icons8-chercher-50.png';


const Navbar = () => {
  return (
    <div>
      <header>
        <marquee scrollamount="10" direction="right" className="fs-5">✅ Trésorerie Générale du Royaume ✅ 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ Gestion des morasses budgétaires✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ Site multilingue✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ Français - Arabe - Amazigh ✅
        </marquee>

        <nav className="navbar navbar-expand-lg bg-gradient">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand" href="#">
                        <img src={logo} height="80" width="170" alt="00"/>
                    </a>
                </div>
                <div className="container-fluid ms-5">
                    <div className="collapse navbar-collapse ps-5 ms-5" id="main_nav">
                        <ul className="navbar-nav" id="custumFont">
                            <a className="dropdown-item" style={{color: '#FFC107'}} href="Accueil">ACCUEIL</a>
                            <a className="dropdown-item" style={{color: '#FFC107'}} href="#accomodation_area">CHAMBRES</a>

                            <a className="dropdown-item" style={{color: '#FFC107'}} href="#accomodation_s">SALLE REUNION</a>
                            <a className="dropdown-item" style={{color: '#FFC107'}} href="#">RESTAURATIONS</a>
                            <a className="dropdown-item" style={{color: '#FFC107'}} href="#">CONNECTER</a>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid ms-5">
                <div className="collapse navbar-collapse ps-5 ms-5" id="main_nav">
                    <ul className="navbar-nav" id="custumFont">
                        <img src={icons8Xlsimport48} height="31" className="mt-2 pl-2" />
                        <a className="dropdown-item" href="#">CHAMBRES&nbsp;&nbsp;&nbsp;</a>
                        <img src={icons8Xlsimport48} height="31" className="mt-2 pl-2" />
                        <a className="dropdown-item" href="#">SALLES&nbsp;&nbsp;&nbsp;</a>
                        <img src={icons8Xlsimport48} height="31" className="mt-2 pl-2" />
                        <li className="nav-item dropdown" >
                            <a class="dropdown-item" href="#">SERVICES&nbsp;&nbsp;&nbsp;</a>
                            <ul className="dropdown-menu fade-up">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={ajouter} height="31" className="mt-2 pl-2" />
                                        RESTAURANT
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={supprimer} height="31" className="mt-2 pl-2" />
                                        CLUB DE SPORT
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={supprimer} height="31" className="mt-2 pl-2" />
                                        SPA
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img src={supprimer} height="31" className="mt-2 pl-2" />
                                        LOUER UNE VOITURE
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <img src={chercher} height="31" className="mt-2 pl-2" />
                        <a className="dropdown-item" href="#">MES RESERVATIONS</a>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
