import React from 'react'
import vidfx1 from '../../images/vidfx1.png';
import '../../../video.css';

function VidCuratorFXBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>VidCuratorFX</h1>
                                <p>
                                    Easily create videos from niched keywords. VidCuratorFX provides
                                    high-performing, customizable, and stunning videos in minutes.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://www.vidcuratorfx2.com/sales/index2.html?aid=1" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={vidfx1} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder mb-5">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://www.youtube.com/embed/e0j8zLfT6Ww?"
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

export default VidCuratorFXBanner
