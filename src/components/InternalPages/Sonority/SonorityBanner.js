import React from 'react'
import son4 from '../../images/son4.png';
import '../../../video.css';

function SonorityBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>Sonority</h1>
                                <p>
                                    Get high-quality voiceovers, music and audio tracks, and full-blown
                                    videos you can use for your ads, courses, presentations, demos, and
                                    more.
                                </p>
                                <div class="view-btn mt-4">
                            <a href="https://heysonority.com/sales/" target="_blank" class="btn-change6">Learn More</a>
                        </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center">
                                <img src={son4} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.playerneos.com//embed/1523"
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

export default SonorityBanner
