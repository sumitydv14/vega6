import React, { useState } from 'react'
import svg from '../images/svg.jpg';
import swal from 'sweetalert';
import { Link , useHistory } from 'react-router-dom';
import CarrerRecuriment from './CarrerRecuriment';
import ReactRecuriment from './ReactRecuriment';
import MobileappRecuriment from './MobileappRecuriment';
import UIUXRecuriment from './UIUXRecuriment';
import TechnicalRecuriment from './TechnicalRecuriment';
import SoftwareTesterRecuriment from './SoftwareTesterRecuriment';


function CarrerDetailsForm() {

    let url =  window.location.href;
    let type =  url.split('#')[1];
    console.log( url.split('#')[1])

    const history = useHistory();

    const toCarrerForm = (e) =>{
        history.push('/carrerform' , { params : e });
    }

    return (

        <section className="employee-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto col-md-11 col-sm-12 col-12">
                        <h6>Back to Carrer</h6>
                        <div className="accordion" id="accordionjob">


                            <div className="card">
                                <div className="card-header pl-5"
                                    id="headingOne"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded={`${type == 'php-developer' ? true : false}`}
                                    aria-controls="collapseOne">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>PHP Developer</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                                {/* <Link className="btn-change6" to="/carrerform">Apply Now</Link>  */}
                                                <button className="btn-change6" onClick={(e) =>toCarrerForm("PHP Developer")}>Apply Now</button>                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapseOne"
                                    className={`collapse ${type == 'php-developer' ? 'show' : ''}`}
                                    aria-labelledby="headingOne"
                                    data-parent="#accordionjob"
                                >
                                    <CarrerRecuriment />
                                </div>
                            </div>




                            <div className="card">
                                <div className="card-header pl-5"
                                    id="headingTwo"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded={`${type == 'react-developer' ? true : false}`}
                                    aria-controls="collapseTwo">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>REACT Developer</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                            <button className="btn-change6" onClick={(e) =>toCarrerForm("REACT Developer")}>Apply Now</button>                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className={`collapse ${type == 'react-developer' ? 'show' : ''}`}
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionjob"
                                >
                                    <ReactRecuriment/>
                                </div>
                            </div>


                            

                            <div className="card">
                                <div className="card-header pl-5"
                                    id="headingThree"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>Mobile Application Developer</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                            <button className="btn-change6" onClick={(e) =>toCarrerForm("Mobile Application Developer")}>Apply Now</button>                                               </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapseThree"
                                    className="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionjob"
                                >
                                  <MobileappRecuriment/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header pl-5"
                                    id="headingfour"
                                    data-toggle="collapse"
                                    data-target="#collapsefour"
                                    aria-expanded="false"
                                    aria-controls="collapsefour">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>UI/UX Developer</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                            <button className="btn-change6" onClick={(e) =>toCarrerForm("UI / UX Developer")}>Apply Now</button>                                                  </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapsefour"
                                    className="collapse"
                                    aria-labelledby="headingfour"
                                    data-parent="#accordionjob"
                                >
                                   <UIUXRecuriment/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header pl-5"
                                    id="headingfive"
                                    data-toggle="collapse"
                                    data-target="#collapsefive"
                                    aria-expanded="false"
                                    aria-controls="collapsefive">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>Technical Customer Support</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                            <button className="btn-change6" onClick={(e) =>toCarrerForm("PHP Developer")}>Apply Now</button>                                                  </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapsefive"
                                    className="collapse"
                                    aria-labelledby="headingfive"
                                    data-parent="#accordionjob"
                                >
                                    <TechnicalRecuriment/>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header pl-5"
                                    id="headingsix"
                                    data-toggle="collapse"
                                    data-target="#collapsesix"
                                    aria-expanded="false"
                                    aria-controls="collapsesix">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>Software Tester</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapsesix"
                                    className="collapse"
                                    aria-labelledby="headingsix"
                                    data-parent="#accordionjob"
                                >
                                    <SoftwareTesterRecuriment/>
                                </div>
                            </div>
                           

                        </div>

                    </div>
                </div>
            </div>
        </section>


    )
}

export default CarrerDetailsForm
