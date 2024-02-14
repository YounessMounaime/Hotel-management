import React from "react";
import './vendors/css/bootstrap.css';
import './vendors/linericon/style.css';
import './vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css';
import './vendors/css/style.css';
import room1 from './image/room1.jpg';
import room2 from './image/room2.jpg';
import room3 from './image/room3.jpg';
import room4 from './image/room4.jpg';


const Chambres = () => {
  return (
    <div>
      <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle">Chambres</h2>
                    <ol className="breadcrumb" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                        <li><a href="index.html">Accueil</a></li>
                        <li className="active">Chambres</li>
                    </ol>
                </div>
            </div>
        </section>
        <section className="accomodation_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Nos Chambres</h2>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room1} alt=""/>
                                <a href="#" className="btn theme_btn button_hover" style={{backgroundColor: 'black', color: 'white'}}>Réserver</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Chambre Double de Luxe</h4></a>
                            <h5>1000 MAD<small>/nuit</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room2} alt=""/>
                                <a href="#" className="btn theme_btn button_hover" style={{backgroundColor: 'black', color: 'white'}}>Réserver</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Chambre Simple de Luxe</h4></a>
                            <h5>1500 MAD<small>/nuit</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room3} alt=""/>
                                <a href="#" className="btn theme_btn button_hover" style={{backgroundColor: 'black', color: 'white'}}>Réserver</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Suite Lune de Miel</h4></a>
                            <h5>2000  MAD<small>/nuit</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={room4} alt=""/>
                                <a href="#" className="btn theme_btn button_hover" style={{backgroundColor: 'black', color: 'white'}}>Réserver</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Double Économique</h4></a>
                            <h5>2500 MAD<small>/nuit</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="hotel_booking_area">
            <div className="container">
              <div className="row hotel_booking_table">
                <div className="col-md-3">
                    <h2>Réservez<br/> Votre<br/> Chambre</h2>
                </div>
                <div className="col-md-9">
                    <div className="boking_table">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="book_tabel_item">
                                    <div className="form-group">
                                        <div className='input-group date' id='datetimepicker1'>
                                            <input type='date' className="form-control"/>
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
                                          <input type='date' className="form-control"/>
                                          <span className="input-group-addon">
                                              <i className="fa fa-calendar" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="book_tabel_item">
                                    <a className="book_now_btn button_hover" href="#">Réserver maintenant</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <br/><br/>
        </section>
    </div>
  );
};

export default Chambres;
