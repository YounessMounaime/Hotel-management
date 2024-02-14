import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css';
import './vendors/css/style.css';
import './vendors/css/responsive.css';
import './vendors/nice-select/css/nice-select.css';
import './css/table.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Clients = () => {
  const [data, setData] = useState([]);
  const getdata_user = () => {
    axios.get('https://localhost:7172/api/Utilisateur')
      .then((result) => {
        setData(result.data);
        //console.log(result.data)
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getdata_user();
  }, []);

  return (
    <div>
      <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle">Nos Clients</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><a href="index.html">Accueil</a></li>
                        <li className="active">Nos Clients</li>
                    </ol>
                </div>
            </div>
        </section>

        <section style={{backgroundColor: 'white'}}>
        <br/>
        {/* <div className="divTitre">
            <h2>Listes des Réservations</h2>
        </div> */}
        <h1 style={{textAlign: 'center'}}>Liste des Clients</h1>
        <table class="content-table" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Email</th>
                    <th>Mot de passe</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {/* Utilisez la fonction map pour afficher les administrateurs */}
            {data.map((admin) => admin.role != 'Admin' && (
                <tr key={admin.numeroUser}>
                    <td>{admin.nomUser}</td>
                    <td>{admin.prenomUser}</td>
                    <td>{admin.telUser}</td>
                    <td>{admin.adresseUser}</td>
                    <td>{admin.email}</td>
                    <td>******</td>
                  
                    <td>
                        {/* <button
                            style={{ background: 'transparent', border: '1px solid transparent' }}
                        //    onClick={() => handleDelete(admin.numeroUser)}
                        >
                            <img src={supp} alt="Supprimer"/>
                        </button> */}
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
        <br/>
        </section>
    </div>
  );
};

export default Clients;
