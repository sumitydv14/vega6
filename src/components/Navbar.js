import React from 'react'
import { Link , NavLink } from 'react-router-dom';
import logo from './images/logo.png';

function Navbar() {
    return (
        <div>
            <>
                {/* top header section start */}
                <section className="top-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 d-flex align-items-center">
                                <div className="contact-content">
                                    <ul className="list-inline m-0 d-flex">
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-mobile-alt" /> 0120-4554679
                                            </a>
                                        </li>
                                        <li className="ml-3">
                                            <a href="#">
                                                <i className="far fa-envelope" /> contact@vega6.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="top-logo">
                                  <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-end align-items-center">
                                <div className="contact-icon d-flex align-items-center">
                                    <div className="search-icon mr-4">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-search" />
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                aria-label="Amount (to the nearest dollar)"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </div>
                                    <div className="social-icon">
                                        <ul className="list-inline m-0 d-flex">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <i class="fab fa-linkedin-in"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                <i class="fab fa-twitter"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="!#">
                                                <i class="fab fa-youtube"/>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* top header section end  */}
                {/* navbar start  */}
                <nav className="navbar stroke navbar-expand-lg navbar-light navbar-me ">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav d-flex align-items-center mx-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/software">
                                        Software
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/wordpress">
                                        Wordpress
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/webapps">
                                        Web Apps
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/shopify">
                                        Shopify Apps
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/carrer">
                                        Career
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gallery">
                                        Gallery
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About us
                                    </NavLink>
                                </li>
                               
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* navbar end */}
            </>

        </div>
    )
}

export default Navbar
