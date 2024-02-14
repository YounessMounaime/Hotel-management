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
//import 'bootstrap/dist/css/bootstrap.min.css';
 import Modal from 'react-bootstrap/Modal';

const GesChambres = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [etat, setEtat] = useState('');
  const [typeChambre, setTypeChambre] = useState('');
  const [capacite, setCapacite] = useState(0);
  const [numeroTel, setNumeroTel] = useState('');
  const [numeroEtage, setNumeroEtage] = useState(0);
  const [urlImage, setUrlImage] = useState('');
  const [prix_chambre, setPrix] = useState('');

  const [editID, setEditId] = useState('');
  const [editEtat, setEditEtat] = useState('');
  const [editTypeChambre, setEditTypeChambre] = useState('');
  const [editCapacite, setEditCapacite] = useState(0);
  const [editNumeroTel, setEditNumeroTel] = useState('');
  const [editNumeroEtage, setEditNumeroEtage] = useState(0);
  const [editUrlImage, setEditUrlImage] = useState('');
  const [editPrix, setEditPrix] = useState('');

  // Affichage des données
  const [data, setData] = useState([]);
  const getChambres = () => {
    axios.get('https://localhost:7172/api/Chambre')
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getChambres();
  }, []);

  // Ajouter les données
  const handleSave = () => {
    const url = 'https://localhost:7172/api/Chambre';
    const data = {
      etat: "null",
      typeChambre: typeChambre,
      capacite: capacite,
      numeroTel: numeroTel,
      numeroEtage: numeroEtage,
      urlImage: urlImage,
      prix_chambre : prix_chambre,
  

    };

    axios.post(url, data)
      .then((result) => {
        getChambres();
      })
      .catch((error) => {
        console.error("Erreur lors de la sauvegarde :", error);
      });
  };

  // Modifier
  const handleEdit = (id) => {
    handleShow();
    axios.get(`  https://localhost:7172/api/Chambre/${id}?numerochambre=${id}`)
      .then((result) => {
        const data = result.data;
        setEditEtat(data.etat);
        setEditTypeChambre(data.typeChambre);
        setEditCapacite(data.capacite);
        setEditNumeroTel(data.numeroTel);
        setEditNumeroEtage(data.numeroEtage);
        setEditUrlImage(data.urlImage);
        setEditId(data.numeroChambre);
        setEditPrix(data.prix_chambre)
      });
  };

  const handleUpdate = () => {
    const url = `https://localhost:7172/api/Chambre/${editID}?numerochambre=${editID}`;
    const updatedData = {
      numeroChambre: editID,
      etat: editEtat,
      typeChambre: editTypeChambre,
      capacite: editCapacite,
      numeroTel: editNumeroTel,
      numeroEtage: editNumeroEtage,
      urlImage: editUrlImage,
      prix_chambre: editPrix,
    };

    axios.put(url, updatedData)
      .then((result) => {
        console.log(`Chambre avec ID ${editID} mis à jour avec succès.`);
        getChambres();
        handleClose();
      })
      .catch((error) => {
        console.log(`Problème avec la chambre d'ID ${editID}.`);
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
    if (window.confirm("Voulez-vous le supprimer ?")) {
      axios.delete(`https://localhost:7172/api/Chambre/${id}?numerochambre=${id}`)
        .then((result) => { 
          getChambres();
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
                    <h2 className="page-cover-tittle">Gestion des Chambres</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><Link to="/accueiladmin">Accueil</Link></li>
                        <li className="active">Gestion des Chambres</li>
                    </ol>
                </div>
            </div>
        </section>
      <section className="hotel_booking_area">
            <div className="container">
            <br/><br/>
                <div className="row hotel_booking_table">
                    <div className="col-md-3">
                        <h2>Ajouter<br/> Une Chambre</h2>
                    </div>
                    <div className="col-md-9">
                        <div className="boking_table">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="book_tabel_item">
                                        <div className="input-group">
                                        <select className="wide" value={typeChambre} onChange={(e) => setTypeChambre(e.target.value)} style={{height: '50px', width: '247px', backgroundColor: 'black', color: 'white', border: '1px groove #2B3146'}}>
  <option data-display="Type">Type de Chambre</option>
  <option value="Classique">Classique</option>
  <option value="Normale">Normale</option>
  <option value="Luxe">Luxe</option>
</select>

                                        </div>
                                        <div className="form-group">
                                            <div className='input-group text'>
                                                <input type='number' className="form-control" placeholder="Nombre de lits" min="1" max="4"
                                                              value={capacite}
                                                              onChange={(e) => setCapacite(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <div className='input-group text'>
                                                <input type='text' className="form-control" placeholder="Numéro de téléphone"
                                                              value={numeroTel}
                                                              onChange={(e) => setNumeroTel(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="book_tabel_item">
                                        <div className="input-group">
                                        <select className="wide" value={numeroEtage} onChange={(e) => setNumeroEtage(parseInt(e.target.value, 10))} style={{height: '50px', width: '247px', backgroundColor: 'black', color: 'white', border: '1px groove #2B3146'}}>
  <option data-display="Etage">Numéro d'Etage</option>
  <option value="1">Etage 1</option>
  <option value="2">Etage 2</option>
  <option value="3">Etage 3</option>
  <option value="4">Etage 4</option>
  <option value="5">Etage 5</option>
</select>

                                        </div><div className="form-group">
                                            <div className='input-group text'>
                                                <input type='text' className="form-control" placeholder="URL Image"
                                                              value={urlImage}
                                                              onChange={(e) => setUrlImage(e.target.value)}
                                                />
                                            </div>
                                            <div className='input-group text'>
                                                <input type='Number' className="form-control" placeholder="Prix"
                                                              value={prix_chambre}
                                                              onChange={(e) => setPrix(e.target.value)}/>
                                            </div>
                                            <a className="book_now_btn button_hover" href="#" onClick={handleSave}>
   AJOUTER
</a>

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
        {/* <div className="divTitre">
            <h2>Listes des Chambres</h2>
        </div> */}
        <h1 style={{textAlign: 'center'}}>Listes des Chambres</h1>
        <table className="content-table" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <thead>
                <tr>
                    <th>Numéro chambre</th>

                    <th>Type</th>
                    <th>Capacite</th>
                    <th>Numéro telephone</th>
                    <th>Numéro étage</th>
                    <th>Image</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
   {data.map(chambre => (
      <tr key={chambre.numeroChambre} style={{backgroundColor: chambre.numeroChambre % 2 === 0 ? '#fff' : '#F3F3F3'}}>
         <td>{chambre.numeroChambre}</td>

         <td>{chambre.typeChambre}</td>
         <td>{chambre.capacite}</td>
         <td>{chambre.numeroTel}</td>
         <td>{chambre.numeroEtage}</td>
         <td><img src={chambre.urlImage}  style={{ height: '100px', width: 'auto' }} /></td>
         <td>
            <button style={{background: 'transparent', border: '1px solid transparent'}} onClick={() => handleEdit(chambre.numeroChambre)}>
               <img src={modif} alt="Modifier"/>
            </button>
         </td>
         <td>
            <button style={{background: 'transparent', border: '1px solid transparent'}} onClick={() => handleDelete(chambre.numeroChambre)}>
               <img src={supp} alt="Supprimer"/>
            </button>
         </td>
      </tr>
   ))}
</tbody>

        </table>
    
        <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Ajouter/Modifier Chambre</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Input pour l'état */}
    <input
      type="text"
    //  className="form-control"
      placeholder="Saisissez l'état"
      value={editEtat}
      onChange={(e) => setEditEtat(e.target.value)}
    />
    {/* Input pour le type de chambre */}
    <input
      type="text"
    //  className="form-control"
      placeholder="Saisissez le type de chambre"
      value={editTypeChambre}
      onChange={(e) => setEditTypeChambre(e.target.value)}
    />
    {/* Input pour la capacité */}
    <input
      type="number"
    //  className="form-control"
      placeholder="Saisissez la capacité"
      value={editCapacite}
      onChange={(e) => setEditCapacite(e.target.value)}
    />
    {/* Input pour le numéro de téléphone */}
    <input
      type="text"
    //  className="form-control"
      placeholder="Saisissez le numéro de téléphone"
      value={editNumeroTel}
      onChange={(e) => setEditNumeroTel(e.target.value)}
    />
    {/* Input pour le numéro d'étage */}
    <input
      type="number"
    //  className="form-control"
      placeholder="Saisissez le numéro d'étage"
      value={editNumeroEtage}
      onChange={(e) => setEditNumeroEtage(e.target.value)}
    />
    {/* Input pour l'URL de l'image */}
    <input
      type="text"
      //className="form-control"
      placeholder="Saisissez l'URL de l'image"
      value={editUrlImage}
      onChange={(e) => setEditUrlImage(e.target.value)}
    />
    {/* Input pour le prix */}
    <input
      type="text"
      //className="form-control"
      placeholder="Saisissez le prix"
      value={editPrix}
      onChange={(e) => setEditPrix(e.target.value)}
    />
  </Modal.Body>
  <Modal.Footer>
    <button className="btn btn-secondary" onClick={handleClose}>
      Fermer
    </button>
    <button className="btn btn-primary" onClick={handleUpdate}>
      Enregistrer les modifications
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

export default GesChambres;
