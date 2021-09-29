import React from 'react'

function ContactMap() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="map-sec">
                                <div
                                    id="map-container-google-1"
                                    className="z-depth-1-half map-container"
                                    style={{ height: 500 }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4106846652203!2d77.38550931508222!3d28.6174510824238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef870e6a4db3%3A0x95a1a6baf454e843!2sVega6%20Webware%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1618914101226!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="office-business">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="office-address">
                                            <h5>Office Address</h5>
                                            <h6 className="mt-4">240, C Block, Sector 63</h6>
                                            <h6>Noida</h6>
                                            <h6>Uttar Pradesh</h6>
                                            <h6>201307</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="business-hours">
                                            <h5>Business Hours</h5>
                                            <ul className="list-inline mt-4">
                                                <li>
                                                    <span>Monday - Friday :</span> 9:30am to 6:30 pm
                                                </li>
                                                <li>
                                                    <span>Saturday - Sunday :</span> day off
                                                </li>
                                            </ul>
                                            <ul className="list-inline businessicon">
                                                <li>
                                                    <span>
                                                        <i className="far fa-envelope" />
                                                    </span>
                                                    Contact@vega6.com
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fas fa-phone-alt" />
                                                    </span>
                                                    0120-4554679
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactMap
