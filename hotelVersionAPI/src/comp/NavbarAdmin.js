import React from "react";
import { Link, NavLink } from "react-router-dom";
import './css/style.css';
import './css/scroll.css';
import './css/css/style.css';
import './css/css/bootstrap.min.css';
import logo from './image/logo-removebg-preview.png';
import client from './image/icons8-groupe-premier-plan-sélectionné-50.png';
import gestion from './image/icons8-la-gestion-50.png';
import chambre from './image/icons8-chambre-50.png';
import salle from './image/icons8-salle-50.png';
import reservation from './image/icons8-evénement-accepté-50.png';

import user from './image/icons8-user-64.png';


const NavbarAdmin = () => {
  return (
    <div>
      <header>
        <marquee scrollamount="10" direction="right" className="fs-5">✅ CLIENTS ✅ 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ GESTION DES CHAMBRES ✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ GESTION DES SALLES ✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ RESERVATIONS ✅
        </marquee>

        <nav className="navbar navbar-expand-lg bg-gradient">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" to="/accueiladmin">
                        <img src={logo} height="80" width="170" alt="00"/>
                    </Link>
                </div>
                
                <div class="container-fluid ms-5">
                    <div class="collapse navbar-collapse ps-5 ms-5" id="main_nav">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                    </div>
                </div>
                <ul className="navbar-nav ms-5 ps-5">
                    <li className="nav-item">
                      <NavLink className="mx-3" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" to="/authentification"><img src={user} className="rounded-circle my-2" height="40" /></NavLink>
                    </li>
                </ul>
            </div>
        </nav>


        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid ms-5">
                <div className="collapse navbar-collapse ps-5 ms-5" id="main_nav">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ul className="navbar-nav" id="custumFont">
                    <img src={client} height="31" className="mt-2 pl-2" />
                        <Link className="dropdown-item" to="/clients">CLIENTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        <img src={gestion} height="31" className="mt-2 pl-2" />
                        <li className="nav-item dropdown" >
                            <a class="dropdown-item" href="/gestionchambres">GESTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <ul className="dropdown-menu fade-up">
                                <li>
                                    <Link className="dropdown-item" to="/gestionchambres">
                                        <img src={chambre} height="31" className="mt-2 pl-2" />&nbsp;
                                        CHAMBRES
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/gestionsalles">
                                        <img src={salle} height="31" className="mt-2 pl-2" />&nbsp;
                                        SALLES
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <img src={reservation} height="31" className="mt-2 pl-2" />
                        <Link className="dropdown-item" to="/reservations">RESERVATIONS</Link>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarAdmin;
