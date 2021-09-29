import React from 'react'
import stepimg2 from '../../images/stepimg2.png';
import '../../../video.css';

function ScriptReelBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>ScriptReel</h1>
                                <p>
                                    Get subtitles and captions in 3 simple steps. ScriptReel lets you
                                    create, sync, and translate your captions to 100+ languages.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://scriptreel.io/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="videoreel-img d-flex justify-content-center  mb-5">
                                <img src={stepimg2} className="img-fluid w-75" alt />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.playerneos.com//embed/1059"
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

export default ScriptReelBanner
