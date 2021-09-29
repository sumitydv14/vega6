import React from 'react'
import laptop from '../../images/laptop.png';
import  '../../../video.css';


function StoryReelBanner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>StoryReel</h1>
                                <p>
                                    Easily create brandable vertical videos for social media. StoryReel
                                    is a cloud-based app designed to attract traffic from Facebook,
                                    Instagram, and Snapchat through stories.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://storyreel.io/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img src={laptop} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://app.playerneos.com//embed/1060"
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

export default StoryReelBanner
