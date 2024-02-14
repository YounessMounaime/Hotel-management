import React from "react";
import { Link, NavLink } from "react-router-dom";
import './css/style.css';
import './css/scroll.css';
import './css/css/style.css';
import './css/css/bootstrap.min.css';

import logo from './image/logo-removebg-preview.png';
import logoBN from './image/logoBN.png';
import chambre from './image/icons8-chambre-50.png';
import salle from './image/icons8-salle-50.png';
import service from './image/icons8-service-50.png';
import restaurant from './image/icons8-table-de-restaurant-50.png';
import sport from './image/icons8-gencive--50.png';
import spa from './image/icons8-spa-50.png';
import voiture from './image/icons8-voiture-64.png';
import reservation from './image/icons8-evénement-accepté-50.png';
import user from './image/icons8-user-64.png';


const Navbar = () => {
  return (
    <div>
      <header>
        <marquee scrollamount="10" direction="right" className="fs-5">✅ RESERVEZ DES CHAMBRES ✅ 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ RESERVEZ DES SALLES ✅ 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ PROFITEZ DE MEILLEURS SERVICES ✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ RESTAURANT ✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ CLUB DE SPORT ✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ SPA ✅
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ✅ LOUEZ DES VOITURES ✅
        </marquee>

        <nav className="navbar navbar-expand-lg bg-gradient">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" to="/">
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
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <ul className="navbar-nav" id="custumFont">
                        <img src={chambre} height="31" className="mt-2 pl-2" />
                        <a className="dropdown-item" href="#chambres">CHAMBRES&nbsp;&nbsp;&nbsp;</a>
                        <img src={salle} height="31" className="mt-2 pl-2" />
                        <a className="dropdown-item" href="#salles">SALLES&nbsp;&nbsp;&nbsp;</a>
                        <img src={service} height="31" className="mt-2 pl-2" />
                        <a className="dropdown-item" href="#services">SERVICES&nbsp;&nbsp;&nbsp;</a>
                        <img src={reservation} height="31" className="mt-2 pl-2" />
                        <Link className="dropdown-item" to="/loginclient">MES RESERVATIONS</Link>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
      <form id="form1">
        <div className="w-25 offcanvas offcanvas-end" style={{opacity:'80%'}} id="offcanvasRight">
          <div className="offcanvas-header">
          </div>
          <br/>
          <h6 style={{padding: '10px 10px 10px 10px', textAlign: 'center'}}>Bienvenue</h6>
          <h6 style={{padding: '10px 10px 10px 10px', textAlign: 'center'}}>Vous êtes Administrateur</h6>        
          <div className="offcanvas-header">
            <Link to="/authentification"><input type="button" style={{backgroundColor:'#FFC107', color: 'black', opacity: '.8', textAlign: 'center', width: '140px'}} className="form-control btn text-black px-3" value="Se connecter"/></Link>&nbsp; &nbsp;
            <Link to="/inscription"><input type="button" style={{backgroundColor:'#FFC107', color: 'black', opacity: '.8', textAlign: 'center', width: '140px'}} className="form-control btn text-black px-3" value="S'inscrire"/></Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
