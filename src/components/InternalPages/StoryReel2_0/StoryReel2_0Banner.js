import React from 'react'
import Screenshot2 from '../../images/Screenshot_2.png';
import '../../../video.css';

function StoryReel2_0Banner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>StoryReel</h1>
                                <p>
                                    Instantly create short brandable videos using fully-customizable
                                    templates optimized for social media, ads, and more.
                                </p>
                                <div class="view-btn mt-4">
                            <a href="https://storyreel.io/" target="_blank" class="btn-change6">Learn More</a>
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

export default StoryReel2_0Banner
