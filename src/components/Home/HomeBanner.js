import React from 'react'
import { Link } from 'react-router-dom';
import apps from '../images/APPS.png';

function HomeBanner() {
    return (
        <div>
            <>
                {/* banner section stat */}
                <section className="sec-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-10 mx-auto col-12 d-flex align-items-center">
                                <div className="banner-content text-center">
                                    <h4>
                                        We are creating{" "}
                                        <span className="d-lg-block">
                                            the next generation of commerce
                                        </span>
                                    </h4>
                                    <p className="mt-4">
                                        We provide the solutions that our customers need to sell and to
                                        give our partners the tools to create those solutions.
                                    </p>
                                    <div className="view-btn mt-5">
                                        <Link to="/software" className="btn-change6">
                                            View All Products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-lg-5 mt-md-5 mt-sm-5 mt-3">
                            <div className="row">
                                <div className="col-md-12 mt-lg-5 mt-md-5 mt-sm-5 mt-3">
                                    <div className="header-img">
                                        <img
                                            src={apps}
                                            alt="banner-img"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* banner section end */}
            </>

        </div>
    )
}

export default HomeBanner
