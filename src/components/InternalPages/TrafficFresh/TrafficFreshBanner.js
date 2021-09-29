import React from 'react'
import sec9img2 from '../../images/sec9img2.png';
import '../../../video.css'

function TrafficFreshBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>TrafficFresh</h1>
                                <p>
                                    Promote your content with influential marketing. TrafficReel lets
                                    you strategically earn traffic, leads, and sales without the
                                    guesswork.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="http://www.trafficfresh.io/sales/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={sec9img2} className="img-fluid w-75" alt />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="http://www.youtube.com/embed/i_aeUkzGYIA?"
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

export default TrafficFreshBanner
