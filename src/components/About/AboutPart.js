import React from 'react'
import aboutimg1 from '../images/aboutimg1.png';
import aboutimg2 from '../images/aboutimg2.png';

function AboutPart() {
    return (
        <div>
            <section className="about-us-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-us-heading text-center">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 pr-lg-0">
                            <div className="about-us-img">
                                <img src={aboutimg1} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center pl-lg-5">
                            <div className="about-us-content">
                                <h6>Our Purpose</h6>
                                <h4>
                                    We’re a diverse team of creators driven to grow with our clients.
                                </h4>
                                <p>
                                    Our mission is to create products that push our technical
                                    boundaries. We strive to deliver tools that stand out from the
                                    industry, with our clients’ needs and growth ultimately in mind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-lg-5 mt-md-5">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="about-us-content">
                                <h6>Our Vision</h6>
                                <h4>
                                    Our focus on value-adding innovations fuels us towards excellence.
                                </h4>
                                <p>
                                    Our vision is to be at the forefront of the commerce innovation
                                    industry through next-generation products that our clients can
                                    consistently rely on.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 pl-lg-0">
                            <div className="about-us-img">
                                <img src={aboutimg2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutPart
