import React from 'react'
import sec13img2_2 from '../../images/sec13img2_2.png';
import '../../../video.css';



function CurationNeosBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>CurationNeos</h1>
                                <p>
                                    Curate online content for maximum exposure and ranking. CurationNeos
                                    lets you convert trending content using keywords from any niche.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="http://www.trafficfresh.io/sales/curationneos/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={sec13img2_2} className="img-fluid w-75" alt />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://www.youtube.com/embed/u-S6hq-kPcY?"
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

export default CurationNeosBanner
