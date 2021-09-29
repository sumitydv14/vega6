import React from 'react'
import Screenshot2 from '../../images/sheer_brute_force.jpg';
import '../../../video.css';

function SyvidBanner() {
    return (
        <div>
              <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>SyVID</h1>
                                <p>
                                Manage your campaigns with ease. SyVID handles your social media and video streaming accounts efficiently through upload and SEO automation.
                                </p>
                                <div class="view-btn mt-4">
                            <a href="https://syvid.io/" target="_blank" class="btn-change6">Learn More</a>
                        </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center">
                                <img src={Screenshot2} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.explaindioplayer.com/video/embed/1889"
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

export default SyvidBanner
