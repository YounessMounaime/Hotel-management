import React, { useState, useEffect } from 'react';
import './css/styleLogin.css';
import './css/styleCRUD.css';
import axios from 'axios';



const Register = () => {
  const [nomUser, setName] = useState('')
  const [prenomUser, setprenomUser] = useState('')
  const [telUser, settelUser] = useState('')
  const [adresseUser, setadresseUser] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')
  const handleSave = (id) => {
    const url = 'https://localhost:7172/api/Utilisateur';
    const data = {
      nomUser: nomUser,  
      prenomUser: prenomUser,
      telUser: telUser,
      adresseUser: adresseUser,
      email: email,
      password: password,
      role: 'Client',       
    };
  
    axios.post(url, data)
      .then((result) => {
  
        
      })
      .catch((error) => {
        console.error("Erreur lors de la sauvegarde :", error);
      });

  };
  return (
    <div>
      <section className="ftco-section" style={{backgroundColor: 'black'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5" style={{border: '1px solid #F3C300'}}>
              <fieldset>
                <legend style={{fontWeight: 'bold', color: '#F3C300'}}>
                  Créer un compte
                </legend>
                <div className="login-wrap p-0">
                  <form
                    action=""
              
                    enctype="multipart/form-data"
                    className="signin-form"
                    style={{backgroundColor: 'black'}}
                  >
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="text"
                        name="nom"
                        className="form-control"
                        placeholder="Nom"
                        value={nomUser}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="text"
                        name="prenom"
                        className="form-control"
                        placeholder="Prénom"
                        value={prenomUser}
                        onChange={(e) => setprenomUser(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="text"
                        name="tel"
                        className="form-control"
                        placeholder="Téléphone"
                        value={telUser}
                        onChange={(e) => settelUser(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="text"
                        name="adresse"
                        className="form-control"
                        placeholder="Adresse"
                        value={adresseUser}
                        onChange={(e) => setadresseUser(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="password"
                        name="password1"
                        className="form-control"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="password"
                        name="password2"
                        className="form-control"
                        placeholder="Cofirmation mot de passe"
                        required
                      />
                    </div>
                    <div className="form-group" style={{width: '400px'}}>
                      <input
                        type="submit"
                        name="submit"
                        value="S'inscrire"
                        onClick={()=>handleSave()}
                        style={{backgroundColor: '#F3C300', color: 'black', opacity: '0.8'}}
                        className="form-control btn text-black px-3"
                      />
                    </div>
                  </form>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
