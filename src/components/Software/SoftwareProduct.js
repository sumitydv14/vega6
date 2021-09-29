import React from 'react'

import { Link } from 'react-router-dom';
import Groupicon from '../images/Groupicon.png';
import videoreel from '../images/videoreel.png';
import vidcurator from '../images/vidcurator.png';
import ViralTraffic from '../images/Viral Traffic.png';
import livereel from '../images/livereel.png';
import storyreel from '../images/syreel.png';
import clipsreelnew from '../images/CLIPSREEL LOGO PNG.png'; 
import coursereel from '../images/Repeat Grid 1.png';
import viralreellogobig from '../images/viralreel-logo-big.png';
import agencyreel from '../images/ag2.png';
import sydidlogo from '../images/sydidlogo.png';
import visualreel from '../images/visualreel.png';
import scriptreel from '../images/scriptreel.png';
import sonority from '../images/DARK.png';
import podreel from '../images/Layer 3.png';
import vidneos from '../images/vidneos.png';
import traffic from '../images/traffic.png';
import curationreel from '../images/curationreel.png';


function SoftwareProduct() {
    return (
        <div>
            <>
                {/* Our Products start */}
                <section className="ourProducts-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img src={Groupicon} alt=""  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our-porducts-head text-center">
                                    <h2>Our <span> Products </span> </h2>

                                    <span className="line-bar"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-lg-5 mt-md-5">
                            <div className="col-md-12 d-flex align-items-center">
                                <ul className="list-inline d-flex justify-content-center align-items-center  flex-wrap m-0">
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/videoreel">
                                             <img src={videoreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/vidcuratorfx">
                                             <img src={vidcurator} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/viraltraffic">
                                             <img src={ViralTraffic} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/livereel">
                                             <img src={livereel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/storyreel">
                                             <img src={storyreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/CourseReel">
                                             <img src={coursereel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/clipsreel2_0">
                                             <img src={clipsreelnew} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/viralreel">
                                             <img src={viralreellogobig} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/agencyreel2_0">
                                             <img src={agencyreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/syvid">
                                             <img src={sydidlogo} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/visualreel">
                                             <img src={visualreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/scriptreel">
                                             <img src={scriptreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/sonority">
                                             <img src={sonority} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/podreel">
                                             <img src={podreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/vidneos">
                                             <img src={vidneos} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/trafficfresh">
                                             <img src={traffic} alt />
                                         </Link>
                                        </div>
                                    </li>
                                    <li>  
                                        <div className="products-name">
                                         <Link to="/curationneos">
                                             <img src={curationreel} alt />
                                         </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                           
                           
                        </div>
                     
                        
                    </div>
                </section>
                {/* Our Produts end */}
            </>

        </div>
    )
}

export default SoftwareProduct
