import React from 'react'
import endless from '../../images/endless.png';
import '../../../video.css';

function VisualReelBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>VisualReel</h1>
                                <p>
                                    Create effective visual content easily. VisualReel lets you create
                                    trending visual content with memes, quotes, and engaging media in
                                    minutes.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://visualreel.io/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img">
                                <img src={endless} alt className="img-fluid" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.playerneos.com//embed/1062"
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

export default VisualReelBanner
