import React from 'react'
import ScreenshotClipsReel from '../../images/Screenshot_ClipsReel.png';
import '../../../video.css';

function ClipsReel2_0Banner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>ClipsReel</h1>
                                <p>
                                    Create beautifully animated videos in seconds. Convert any URL,
                                    product page, or article into a fully-customizable video in any
                                    niche.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://clipsreel.io/sales/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img
                                    src={ScreenshotClipsReel}
                                    className="img-fluid w-75"
                                    alt
                                />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.playerneos.com//embed/1057"
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

export default ClipsReel2_0Banner
