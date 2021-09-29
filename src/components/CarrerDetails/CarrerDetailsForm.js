import React, { useState } from 'react'
import svg from '../images/svg.jpg';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import CarrerRecuriment from './CarrerRecuriment';

function CarrerDetailsForm() {


    // const [user , setUser] = useState({
    //     fname:'',
    //     lname:'',
    //     email:'',
    //     phone:'',
    //     applyposition:'',
    //     date:'',
    //     empstatus:'',
    //     file:''
    // });




    // const onInputChange = (e) =>{
    //     setUser({...user ,[e.target.name]: e.target.value});
    // }

    // const onFormSubmit = (e) =>{
    //     e.preventDefault();


    //     console.warn(user)

    //     setUser({
    //         fname:'',
    //         lname:'',
    //         email:'',
    //         phone:'',
    //         applyposition:'',
    //         date:'',
    //         file:'',
    //         empstatus:''

    //     });

    //     swal({
    //         title: "Form  Submited",
    //         text: ` ${user.fname} Thank you form  is submited successfully !`,
    //         icon: "success",
    //         button: "OK",
    //       });

    // }



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
                                    aria-expanded="true"
                                    aria-controls="collapseOne">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>PHP Developer</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapseOne"
                                    className="collapse show"
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
                                    aria-expanded="false"
                                    aria-controls="collapseTwo">

                                    <div className="card-details">
                                        <div className="job-position d-flex justify-content-between">
                                            <div className="opport-para  mt-4">
                                                <h4>REACT Developer</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionjob"
                                >
                                    <CarrerRecuriment />
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
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapseThree"
                                    className="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionjob"
                                >
                                    <CarrerRecuriment />
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
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapsefour"
                                    className="collapse"
                                    aria-labelledby="headingfour"
                                    data-parent="#accordionjob"
                                >
                                    <CarrerRecuriment />
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
                                                <h4>Technical Customer Support</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapsefour"
                                    className="collapse"
                                    aria-labelledby="headingfour"
                                    data-parent="#accordionjob"
                                >
                                    <CarrerRecuriment />
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
                                                <h4>Software Tester</h4>
                                                <h6><span>India</span> / Noida</h6>
                                            </div>
                                            <div className="apply-now">
                                                <Link className="btn-change6" to="/carrerform">Apply Now</Link>                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="collapsefive"
                                    className="collapse"
                                    aria-labelledby="headingfive"
                                    data-parent="#accordionjob"
                                >
                                    <CarrerRecuriment />
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
