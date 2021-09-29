import React from 'react'
import goog from '../../images/goog.png';


function VidneosBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>VidNeos</h1>
                                <p>
                                    Get data-driven content marketing strategies. VidNeos is an
                                    all-in-one tool designed to research, analyze, rank, and create your
                                    content.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://www.vidneos.com/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img">
                                <img src={goog} className="img-fluid" alt />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://www.youtube.com/embed/F07ZfsyKe5I?"
                                            allow="autoplay"
                                        />
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

export default VidneosBanner
