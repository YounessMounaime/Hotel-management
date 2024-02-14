import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css';
import './vendors/css/style.css';
import './vendors/css/responsive.css';
import './vendors/nice-select/css/nice-select.css';
import './css/table.css';
import axios from 'axios';
import modif from './image/icons8-modif-30.png';
import supp from './image/icons8-supp-30.png';
 import Modal from 'react-bootstrap/Modal';


const GesSalles = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [numeroEtage, setNumeroEtage] = useState(0);
  const [capacite, setCapacite] = useState(0);
  const [urlImage, setUrlImage] = useState('');
  const [Prix_sr, setPrixSr] = useState('');

  

  const [editID, setEditId] = useState('');
  const [editNumeroEtage, setEditNumeroEtage] = useState(0);
  const [editCapacite, setEditCapacite] = useState(0);
  const [editUrlImage, setEditUrlImage] = useState('');
  const [editPrix, setEditPrix] = useState('');

  // Affichage des données
  const [data, setData] = useState([]);
  const getSallesReunion = () => {
    axios.get('https://localhost:7172/api/SalleReunion')
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getSallesReunion();
  }, []);

  // Ajouter les données
  const handleSave = () => {
    const url = 'https://localhost:7172/api/SalleReunion';
    const data = {
      numeroEtage: numeroEtage,
      capacite: capacite,
      urlImage: urlImage,
      Prix_sr:Prix_sr
        
    };

    axios.post(url, data)
      .then((result) => {
        getSallesReunion();
      })
      .catch((error) => {
        console.error("Erreur lors de la sauvegarde :", error);
      });
  };

  // Modifier
  const handleEdit = (id) => {
    handleShow();
    axios.get(`https://localhost:7172/api/SalleReunion/${id}?numerosalle=${id}`)
      .then((result) => {
        const data = result.data;
        setEditNumeroEtage(data.numeroEtage);
        setEditCapacite(data.capacite);
        setEditUrlImage(data.urlImage);
        setEditId(data.numeroSalle);
      });
  };

  const handleUpdate = () => {
    const url = `https://localhost:7172/api/SalleReunion/${editID}?numerosalle=${editID}`;
    const updatedData = {
      numeroSalle: editID,
      numeroEtage: editNumeroEtage,
      capacite: editCapacite,
      urlImage: editUrlImage,
    };

    axios.put(url, updatedData)
      .then((result) => {
        console.log(`Salle de réunion avec ID ${editID} mise à jour avec succès.`);
        getSallesReunion();
        handleClose();
      })
      .catch((error) => {
        console.log(`Problème avec la salle de réunion d'ID ${editID}.`);
        console.error("Erreur lors de la mise à jour :", error);
        handleClose();
      });
  };

  // Suppression
  const handleDelete = (id) => {
    if (!id) {
      console.error('ID is undefined or null.');
      return;
    }
    if (window.confirm("Voulez-vous la supprimer ?")) {
      axios.delete(` https://localhost:7172/api/SalleReunion/${id}?numerosalle=${id}`)
        .then((result) => {
          getSallesReunion();
          if (result.status === 200) {
            console.log('oui ');
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression :', error);
        });
    }
  };
  return (
    <div>
      <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle">Gestion des Salles</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><Link to="/accueiladmin">Accueil</Link></li>
                        <li className="active">Gestion des Salles</li>
                    </ol>
                </div>
            </div>
        </section>
        <section class="hotel_booking_area">
            <div class="container">
            <br/><br/>
                <div class="row hotel_booking_table">
                <div class="col-md-3">
  <h2>Ajouter<br /> Une Salle</h2>
</div>
<div class="col-md-9">
  <div class="boking_table">
    {/* Input fields for new meeting room */}
    {/* Make sure to bind values to the respective state variables */}
    <div class="row">
      <div class="col-md-4">
        <div class="book_tabel_item">
          <div class="form-group">
            {<div class='input-group text'>
              <input type='text' class="form-control" placeholder="URL image" onChange={(e) => setUrlImage(e.target.value)} />
            </div> }
            <div class='input-group text'>
              <input type='number' class="form-control" placeholder="Prix" min="1" onChange={(e) => setPrixSr(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="book_tabel_item">
          <div class="form-group">
            <div class="form-group">
              <select class="wide" onChange={(e) => setNumeroEtage(e.target.value)} style={{height: '50px', width: '247px', backgroundColor: 'black', color: 'white', border: '1px groove #2B3146'}}>
                {/* Options for floor selection */}
                <option data-display="Etage">Numéro d'Etage</option>
                <option value="1">Etage 1</option>
                <option value="2">Etage 2</option>
                <option value="3">Etage 3</option>
                <option value="4">Etage 4</option>
                <option value="5">Etage 5</option>
              </select>
              <div class='input-group text'>
                <input type='number' class="form-control" placeholder="Capacite" min="1" max="4" onChange={(e) => setCapacite(e.target.value)} />
              </div>
            </div>
            {/* Button to add a new meeting room */}
            <a class="book_now_btn button_hover" href="#" onClick={handleSave}>AJOUTER</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                  
                </div>
            </div>
        </section>
        
        <section style={{backgroundColor: 'white'}}>
        <br/>
        <hr/>
        <br/>
  
        <h1 style={{textAlign: 'center'}}>Listes des Salles</h1>
        <table class="content-table" style={{ marginRight: 'auto', marginLeft: 'auto' }}>
  <thead>
    <tr>
      <th>Numéro salle</th>
      <th>Numéro étage</th>
      <th>Capacite</th>
      <th>Image</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {/* Use the 'data' state to map and display meeting rooms */}
    {data.map(room => (
      <tr key={room.numeroSalle} style={{ backgroundColor: '#F3F3F3' }}>
        <td>{room.numeroSalle}</td>
        <td>{room.numeroEtage}</td>
        <td>{room.capacite}</td>
        <td><img src={room.urlImage}  style={{ height: '100px', width: 'auto' }} /></td>
        <td>
          <button style={{ background: 'transparent', border: '1px solid transparent' }}>
            <img src={modif} alt="Modifier" onClick={() => handleEdit(room.numeroSalle)} />
          </button>
        </td>
        <td>
          <button style={{ background: 'transparent', border: '1px solid transparent' }}>
            <img src={supp} alt="Supprimer" onClick={() => handleDelete(room.numeroSalle)} />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Salle de Réunion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"

            placeholder="Enter Numero Etage"
            value={editNumeroEtage}
            onChange={(e) => setEditNumeroEtage(e.target.value)}
          />
          <input
            type="number"

            placeholder="Enter Capacite"
            value={editCapacite}
            onChange={(e) => setEditCapacite(e.target.value)}
          />
          <input
            type="text"

            placeholder="Enter URL Image"
            value={editUrlImage}
            onChange={(e) => setEditUrlImage(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleUpdate}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
        <br/>
        </section>

        <script src="../vendors/js/jquery-3.2.1.min.js"></script>
        <script src="../vendors/js/popper.js"></script>
        <script src="../vendors/js/jquery.ajaxchimp.min.js"></script>
        <script src="../vendors/nice-select/js/jquery.nice-select.js"></script>
        <script src="../vendors/js/stellar.js"></script>
        <script src="../vendors/js/custom.js"></script>
    </div>
  );
};

export default GesSalles;
