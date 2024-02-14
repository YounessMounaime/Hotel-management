import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css';
import './vendors/css/style.css';
import './vendors/css/responsive.css';
import './vendors/nice-select/css/nice-select.css';
import './css/table.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const MesReservations = () => {
  const [data, setData] = useState([]);
  const { id } = useParams(); // Extract the 'id' parameter from the route

  useEffect(() => {
    if (id) {
      getReservationData(id);
    }
  }, [id]);

  const getReservationData = (userId) => {
    axios.get(`https://localhost:7172/api/Reservation/user/${userId}`)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching reservation data:", error);
      });
  };

  return (
    <div>
            
      <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle">Réservations</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><a href="index.html">Accueil</a></li>
                        <li className="active">Réservations</li>
                    </ol>
                </div>
            </div>
        </section>

        <section style={{backgroundColor: 'white'}}>
        <br/>
     
        <h1 style={{textAlign: 'center'}}>Ma liste des Chambres Réservées</h1>

        <table className="content-table" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <thead>
                <tr>
                    <th>Date d'Arrivée</th>
                    <th>Date de Départ</th>
                    <th>Numero chambre</th>

                </tr>
            </thead>
            <tbody>
  {data && data.length > 0 ? (
    data.map((item, index) =>
      item.numeroChambre !== null && item.numeroSalle === null ? (
        <tr key={index}>
          <td>{item.dateDebut}</td>
          <td>{item.dateFin}</td>
          <td>{item.numeroChambre}</td>
        </tr>
      ) : null
    )
  ) : (
    <tr>
      <td colSpan="8">Aucune réservation disponible.</td>
    </tr>
  )}
</tbody>

        </table>
        <br/>
        <hr/>
        <br/>
        <h1 style={{textAlign: 'center'}}>Ma liste des Salles Réservées</h1>
        <table className="content-table" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <thead>
                <tr>
                    <th>Date d'Arrivée</th>
                    <th>Date de Départ</th>
                    <th>Numéro salles</th>
                
                </tr>
            </thead>
            <tbody>
  {data && data.length > 0 ? (
    data.map((item, index) =>
      item.numeroChambre === null && item.numeroSalle !== null ? (
        <tr key={index}>
          <td>{item.dateDebut}</td>
          <td>{item.dateFin}</td>
          <td>{item.numeroSalle}</td>
        </tr>
      ) : null
    )
  ) : (
    <tr>
      <td colSpan="8">Aucune réservation disponible.</td>
    </tr>
  )}
</tbody>
        </table>
        <br/>
        </section>
    </div>
  );
};

export default MesReservations;
