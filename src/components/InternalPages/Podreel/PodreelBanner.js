import React from 'react'
import  '../../../video.css';
import createimg from '../../images/create-full-hd.png';

function PodreelBanner() {
    return (
        <div>
             <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>Podreel</h1>
                                <p>
                                    Livestream without being live. LiveReel lets you simultaneously
                                    stream pre-recorded videos on multiple platforms—all hassle-free and
                                    autopilot.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://livereel.io/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={createimg} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.playerneos.com//embed/1063"
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

export default PodreelBanner
