import React from 'react'
import steps3 from '../../images/steps3.png';
import '../../../video.css';


function VidBuilderFXBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>VidBuilderFX</h1>
                                <p>
                                    Easily create viral videos that generate traffic. VidBuilderFX
                                    provides done-for-you videos using keywords and trending clips.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="#" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={steps3} className="img-fluid w-75" alt />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://www.youtube.com/embed/F07ZfsyKe5I"
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

export default VidBuilderFXBanner
