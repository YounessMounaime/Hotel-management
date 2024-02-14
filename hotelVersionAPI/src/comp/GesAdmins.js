import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css';
import './vendors/css/style.css';
import './vendors/css/responsive.css';
import './vendors/nice-select/css/nice-select.css';
import './css/table.css';
import Modal from 'react-bootstrap/Modal';
import modif from './image/icons8-modif-30.png';
import supp from './image/icons8-supp-30.png';
import axios from 'axios';

const GesAdmins = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nomUser, setName] = useState('')
  const [prenomUser, setprenomUser] = useState('')
  const [telUser, settelUser] = useState('')
  const [adresseUser, setadresseUser] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')

  const [editID, setEditId] = useState('');
  const [editnomUser, seteditnomUser] = useState('')
  const [editprenomUser, seteditprenomUser] = useState('')
  const [edittelUser, setedittelUser] = useState('')
  const [editadresseUser, seteditadresseUser] = useState('')
  const [editemail, seteditemail] = useState('')
  const [editpassword, seteditpassword] = useState('')
  const [editrole, seteditrole] = useState('')

  
  //Affichage des donnes
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

   //Ajouter les donnees
     
    const handleSave = (id) => {
    const url = 'https://localhost:7172/api/Utilisateur';
    const data = {
      nomUser: nomUser,  
      prenomUser: prenomUser,
      telUser: telUser,
      adresseUser: adresseUser,
      email: email,
      password: password,
      role: 'Admin',       
    };
  
    axios.post(url, data)
      .then((result) => {
        getdata_user();  
        
      })
      .catch((error) => {
        console.error("Erreur lors de la sauvegarde :", error);
      });

  };
//modifier   

    const handleEdit = (id) => {
      handleShow(); 
   axios.get(`https://localhost:7172/api/Utilisateur/${id}?numerouser=${id}`)
        .then((result) => {
          const data = result.data;
          seteditnomUser(data.nomUser);
          seteditprenomUser(data.prenomUser);
          setedittelUser(data.telUser);
          seteditadresseUser(data.adresseUser);
          seteditemail(data.email);
          seteditpassword(data.password);
          seteditrole(data.role);
          setEditId(data.numeroUser);
          getdata_user();
          //console.log(`Utilisateur avec ID ${data.numeroUser} `);
        });
    };


    const handleUpdate = () => {
      const url = `https://localhost:7172/api/Utilisateur/${editID}?numerouser=${editID}`;
    
      const updatedData = {
        numeroUser: editID,
        nomUser: editnomUser,
        prenomUser: editprenomUser,
        telUser: edittelUser,
        adresseUser: editadresseUser,
        email: editemail,
        password: editpassword,
        role: editrole,
      };
    
      axios.put(url, updatedData) 
        .then((result) => {
          console.log(`Utilisateur avec ID ${editID} mis à jour avec succès.`);
          getdata_user();
          handleClose();
        })
        .catch((error) => {
          console.log(`Problème avec l'utilisateur d'ID ${editID}.`);
          console.error("Erreur lors de la mise à jour :", error);
          handleClose();
        });
    };
    
    


//Supp
const handleDelete = (id) => {
  if (!id) {
    console.error('ID is undefined or null.');
    return;
  }
  if (window.confirm("Voulez-vous le supprimer ?")) {
  
    axios.delete(`https://localhost:7172/api/Utilisateur/${id}?numerouser=${id}`)

      .then((result) => {
      getdata_user();

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
                    <h2 className="page-cover-tittle">Gestion des Administrateurs</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><Link to="/accueiladmin">Accueil</Link></li>
                        <li className="active">Gestion des Administrateurs</li>
                    </ol>
                </div>
            </div>
        </section>
        <section class="hotel_booking_area">
            <div class="container">
            <br/><br/>
                <div class="section_title text-center">
                    <h1 class="title_color">Gestion des Administrateurs</h1>
                </div>
                <div class="row hotel_booking_table">
                    <div class="col-md-3">
                        <h2>Ajouter<br/> Un<br/> Admin</h2>
                    </div>
                    <div class="col-md-9">
                        <div class="boking_table">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="book_tabel_item">
                                        <div class="form-group">
                                            <div class='input-group text'>
                                                <input type='text' class="form-control" placeholder="Nom"
                                                onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class='input-group text'>
                                                <input type='text' class="form-control" placeholder="Téléphone"
                                                onChange={(e) => settelUser(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class='input-group text'>
                                                <input type='text' class="form-control" placeholder="Email"
                                                onChange={(e) => setemail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class='input-group text'>
                                              <input type='text' class="form-control" placeholder="Mot de passe"
                                              onChange={(e) => setpassword(e.target.value)}
                                              />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="book_tabel_item">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <div class='input-group text'>
                                                    <input type='text' class="form-control" placeholder="Prénom"
                                                    onChange={(e) => setprenomUser(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class='input-group text'>
                                                    <input type='text' class="form-control" placeholder="Adresse"
                                                    onChange={(e) => setadresseUser(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <a class="book_now_btn button_hover" onClick={handleSave}>AJOUTER</a>
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
            <h2>Listes des Administrateurs</h2>
        </div> */}
        <h1 style={{textAlign: 'center'}}>Listes des Administrateurs</h1>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {/* Utilisez la fonction map pour afficher les administrateurs */}
            {data.map((admin) => admin.role === 'Admin' && (
                <tr key={admin.numeroUser}>
                    <td>{admin.nomUser}</td>
                    <td>{admin.prenomUser}</td>
                    <td>{admin.telUser}</td>
                    <td>{admin.adresseUser}</td>
                    <td>{admin.email}</td>
                    <td>{admin.password}</td>
                    <td>
                        <button
                            style={{ background: 'transparent', border: '1px solid transparent' }}
                            onClick={() => handleEdit(admin.numeroUser)}
                        >
                            <img src={modif} alt="Modifier"/>
                        </button>
                    </td>
                    <td>
                        <button
                            style={{ background: 'transparent', border: '1px solid transparent' }}
                            onClick={() => handleDelete(admin.numeroUser)}
                        >
                            <img src={supp} alt="Supprimer"/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Add/Edit Utilisateur</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="form-group">
      <label>Nom :</label>
      <input
        type="text"

        placeholder="Enter nom"
        value={editnomUser}
        onChange={(e) => seteditnomUser(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Prénom :</label>
      <input
        type="text"

        placeholder="Enter prénom"
        value={editprenomUser}
        onChange={(e) => seteditprenomUser(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Téléphone :</label>
      <input
        type="text"

        placeholder="Enter téléphone"
        value={edittelUser}
        onChange={(e) => setedittelUser(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Adresse :</label>
      <input
        type="text"

        placeholder="Enter adresse"
        value={editadresseUser}
        onChange={(e) => seteditadresseUser(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Email :</label>
      <input
        type="email"

        placeholder="Enter email"
        value={editemail}
        onChange={(e) => seteditemail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label>Mot de passe :</label>
      <input
        type="password"

        placeholder="Enter mot de passe"
        value={"****"}
        onChange={(e) => seteditpassword(e.target.value)}
      />
    </div>

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

        <h1 style={{textAlign: 'center'}}>Listes des Clients</h1>
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
                        <button
                            style={{ background: 'transparent', border: '1px solid transparent' }}
                            onClick={() => handleDelete(admin.numeroUser)}
                        >
                            <img src={supp} alt="Supprimer"/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>








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

export default GesAdmins;
