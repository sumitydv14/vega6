import React from 'react'
import step2ftrIMG from '../../images/step2-ftrIMG.jpg';
import '../../../video.css';

function ViralReelBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>ViralReel</h1>
                                <p>
                                    Easily create 100s of viral content from keywords. ViralReel is an
                                    all-in-one video editor designed to produce engaging and social
                                    media-optimized videos in minutes.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://www.viralreel.io/sales/secure.html?aid=685227" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mb-5">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={step2ftrIMG} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.explaindioplayer.com/video/embed/2781"
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

export default ViralReelBanner
