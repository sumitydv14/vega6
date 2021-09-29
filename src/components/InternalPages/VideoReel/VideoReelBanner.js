import React from 'react'
import '../../../video.css';
import createfullhd from '../../images/create-full-hd.png';

function VideoReelBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>VideoReel 2.0</h1>
                                <p>
                                    Easily create stunning social media videos in any niche. VideoReel
                                    2.0 is an easy-to-use video editing app that produces
                                    fully-customizable videos fit for any category.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://videoreel.io/salesc/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={createfullhd} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://player.vimeo.com/video/512131020?"
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

export default VideoReelBanner
