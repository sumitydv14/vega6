import React from 'react'
import { Link } from 'react-router-dom';
import footerlogo from './images/footerlogo.png';


function Footer() {
    return (
        <div>
            <>
                {/* footer start */}
                <section className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="footer-logo text-white">
                                    <img src={footerlogo} alt className="img-fluid" />
                                    <p className="mt-3">
                                        Vega6 is a software company that endeavor on highly proficient,
                                        timely delivered and cost effective softwares.We understand that
                                        technology has to keep and be in complete consonance with the
                                        competitive strategies of our clients and businesses we service.
                                    </p>
                                    <a href="!#">READ MORE</a>
                                </div>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-lg-center col-md-6 col-6">
                                <div className="footer-navigation">
                                    <h5>Navigation</h5>
                                    <ul className="list-inline mt-4">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/software">Software</Link>
                                        </li>
                                        <li>
                                            <Link to="/wordpress">WordPress</Link>
                                        </li>
                                        <li>
                                            <Link to="/webapps">Web Apss</Link>
                                        </li>
                                        <li>
                                            <Link to="/shopify">Shopify Apps</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-lg-center col-md-6 col-6">
                                <div className="footer-navigation">
                                    <h5>Quick Links</h5>
                                    <ul className="list-inline mt-4">
                                        <li>
                                            <Link  to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/carrer">Career</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex justify-content-lg-center col-md-6">
                                <div className="footer-content text-white">
                                    <h5>Contact</h5>
                                    <ul className="list-inline icons mt-4">
                                        <li>
                                            <a href="!#">
                                                <i className="fas fa-envelope mr-3" />
                                                Contact@vega6.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <i className="fas fa-phone-alt mr-3 " />
                                                0120-4554679
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="footer-social-icon">
                                        <ul className="list-inline d-flex">
                                            <li>
                                                <a href="!#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                <i class="fab fa-linkedin-in"/>
                                                </a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footer end */}
                {/* copyright section start */}
                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <span>© Copyright 2021 Vega6 ALL Rights Reserved</span>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <ul className="list-inline d-flex m-0">
                                    <li className="mr-3">
                                        <a href="https://reelapps.io/terms.html" target="_blank">Term &amp; Conditions</a>
                                    </li>
                                    <li className="mr-3">
                                        <a href="!#"  target="_blank">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="https://reelapps.io/privacy.html" target="_blank">Privacy &amp; Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* copyright section end */}
            </>

        </div>
    )
}

export default Footer
