import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css';
import './vendors/css/style.css';
import blog5 from './image/blog/main-blog/m-blog-5.jpg';
import admin1 from './image/blog/admin1.jpg';
import admin2 from './image/blog/admin2.jpg';

const ReservationSalle = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [email, setEmail] = useState('');
  const [reservationStatus, setReservationStatus] = useState(null);

  useEffect(() => {

    axios.get(`https://localhost:7172/api/SalleReunion/${id}?numerosalle=${id}`)
      .then((result) => {
        setRoomDetails(result.data);
      })
      .catch((error) => {
        console.log("Error fetching room details:", error);
      });
  }, [id]);

  const handleSave = async () => {

    const usersUrl = 'https://localhost:7172/api/Utilisateur';

    try {

      const usersResponse = await axios.get(usersUrl);


      const filteredUsers = usersResponse.data.filter(user => user.email === email);


      if (filteredUsers.length > 0) {
    
        const numeroUser = filteredUsers[0].numeroUser; 


        const reservationUrl = 'https://localhost:7172/api/Reservation';
        const reservationData = {
          dateDebut: startDate,
          dateFin: endDate,
          numeroChambre: null,
          numeroSalle: id,
          numeroUser: numeroUser,
        };


        const reservationResponse = await axios.post(reservationUrl, reservationData);

        console.log("Réservation réussie :", reservationResponse.data);
        setReservationStatus("Réservation réussie !");
      } else {
        console.error("Aucun utilisateur trouvé avec cet email.");
      }
    } catch (error) {

      console.error("Erreur lors de la réservation :", error);
      setReservationStatus("Erreur lors de la réservation. Veuillez réessayer.");
    }
  };

  
  return (
    <div>

      <section className="breadcrumb_area blog_banner_two">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle f_48">Détails salle</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="chambres.html">Chambres</a></li>
                        <li className="active">Détails Salle</li>
                    </ol>
                </div>
            </div>
        </section>
        <section className="blog_area single-post-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list">
                        <div className="single-post row">
                            <div className="col-lg-12">
                                <div className="feature-img">
                                {roomDetails ? (
                                    <>
                                      <img className="img-fluid" src={roomDetails.urlImage} alt=""/>
                                    
                                    
                                      </>
                                          ) : (
                                        <p>Loading...</p>
                                                          )}
                                  
                                </div>									
                            </div>
                        </div><br/>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <div className="blog_info text-right">
                                <div className="post_tag">
                                    <a href="#">Food,</a>
                                    <a href="#">Technology,</a>
                                    <a href="#">Politics,</a>
                                    <a href="#">Lifestyle</a>
                                </div>
                            
                                  {roomDetails ? (
          <>
                  <ul  className="blog_meta list_style">
                        <li>Capacite: {roomDetails.capacite}</li>
                        <li>Prix : {roomDetails.prix_SR}DH</li>
                          </ul>
                                  </>
                                          ) : (
                                        <p>Loading...</p>
                                                          )}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row hotel_booking_table">
                    <div className="col-md-3">
                        <h2>Réservez<br/> Votre<br/> Chambre</h2>
                    </div>
                    <div className="col-md-9">
                    {reservationStatus && (
          <div style={{ marginBottom: '20px', color: reservationStatus.includes('réussie') ? 'green' : 'red' }}>
            {reservationStatus}
          </div>
        )}
                        <div className="boking_table">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="book_tabel_item">
                                        <div className="form-group">
                                            <div className='input-group date' id='datetimepicker1'>
                                                <input type='date' 
                                                  value={startDate}
                                                  onChange={(e) => setStartDate(e.target.value)}
                                                className="form-control" 
                                                placeholder="Date d'Arrivée"/>
                                                <span className="input-group-addon">
                                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="book_tabel_item">
                                      <div className="form-group">
                                          <div className='input-group date' id='datetimepicker11'>
                                              <input type='date' className="form-control" placeholder="Date de Départ"
                                              
                                              value={endDate}
                                              onChange={(e) => setEndDate(e.target.value)}
                                              />
                                          
                                              <span className="input-group-addon">
                                                  <i className="fa fa-calendar" aria-hidden="true"></i>
                                              </span>
                                            
                                          </div>
                                      </div>
                                    </div>
                                    <input type='email' className="form-control" placeholder="email"
                                                    value={email}
                                                    onChange={(e) =>  setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <div className="book_tabel_item">
                                        <a className="book_now_btn button_hover" onClick={handleSave}>Réserver maintenant</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="comments-area">
                    <h4>2 Commentaires</h4>
                    <div className="comment-list">
                        <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                    <img src={admin1} alt="" style={{width: '60px',  height: '60px'}}/>
                                </div>
                                <div className="desc">
                                    <h5><a href="#">EL HASSOUNI Otmane</a></h5>
                                    <p className="date">3 Janvier 2024 à 15h01 </p>
                                    <p className="comment">
                                    Les équipements modernes, tels que la télévision à écran plat et le Wi-Fi rapide
                                    </p>
                                </div>
                            </div>
                            <div className="reply-btn">
                                   <a href="" className="btn-reply text-uppercase">répondre</a> 
                            </div>
                        </div>
                    </div>	
                    <div className="comment-list">
                        <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                    <img src={admin2} alt="" style={{width: '50px', height: '60px'}}/>
                                </div>
                                <div className="desc">
                                    <h5><a href="#">MOUNAIME Youness</a></h5>
                                    <p className="date">15 Janvier 2024 à 20h16 </p>
                                    <p class="comment">
                                    Le personnel de l'hôtel était exceptionnellement attentionné et serviable!!!
                                    </p>
                                </div>
                            </div>
                            <div className="reply-btn">
                                <a href="" className="btn-reply text-uppercase">répondre</a> 
                            </div>
                        </div>
                    </div>	                                             				
                </div>
                </div>
                </section>
    </div>
  );
};

export default ReservationSalle;
