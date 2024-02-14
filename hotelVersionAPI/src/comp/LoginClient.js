import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/styleLogin.css';
import video from './image/BG/videoback.mp4';
import logo from './image/hotel-removebg.png';
import { useParams } from 'react-router-dom';
const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();
  const params = useParams(); 

  const handleLogin = async () => {
    try {
      const response = await fetch(`https://localhost:7172/api/Utilisateur/loginClt?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const user = await response.json();
        setUserData(user);
        const userId = user && user.numeroUser; 
        navigate(`/MesReservations/${userId}`); 
        setLoginStatus(`Welcome, ${user.NomUser}!`);
      } else if (response.status === 404) {
        setLoginStatus(`Incorrect email or password for ${email}`);
      } else {
        setLoginStatus('An error occurred during login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginStatus('An error occurred during login');
    }
  };

  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <form id="form1" method="post" action="" style={{ backgroundColor: 'transparent' }}>
        <section className="ftco-section" style={{ backgroundColor: 'transparent' }}>
          <div className="container">
            <br /><br /><br /><br /><br />
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-2">
                <Link className="text-decoration-none" to="/">
                  <img className="heading-section" src={logo} style={{ width: '180px', height: '100px' }} alt="" />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center" style={{ width: '1100px' }}>
              <div className="col-md-6 col-lg-5" style={{ width: '700px' }}>
                <div className="login-wrap p-0">
                  <br />
                  <form action="" method="post" className="signin-form" style={{ width: '400px', backgroundColor: 'transparent' }}>
                    <div className="form-group">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="username" name="username" className="form-control" placeholder="Nom d'utilisateur" style={{ width: '400px' }} required />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password" name="password" className="form-control" placeholder="Mot de passe" style={{ width: '400px' }} required />
                      <span toggle="#password_field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                    </div>
                    <div className="form-group">
                      <button type="button" onClick={handleLogin} style={{ backgroundColor: '#F3C300', color: 'black', opacity: '.8', width: '400px' }} className="form-control btn text-black px-3">
                        Se connecter
                      </button>
                      <p>{loginStatus}</p>
                    </div>
                    <Link to="/inscription" style={{ color: '#F3C300', textDecoration: 'none' }}>
                      Créer un compte?
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default LoginClient;
