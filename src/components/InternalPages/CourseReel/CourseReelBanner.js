import React from 'react'
import '../../../video.css';
import course from '../../images/course.png';

function CourseReelBanner() {
    return (
        <div>
             <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>CourseReel</h1>
                                <p>
                                Get high-volume and high-quality courses with ease. CourseReel is a cloud-based tool that delivers crisp video courses on any niche hassle-free.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://coursereel.io/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center mb-5">
                                <img
                                    src={course}
                                    className="img-fluid w-75"
                                    alt
                                />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <iframe
                                            className="playerneos_iframe"
                                            frameBorder={0}
                                            scrolling="no"
                                            src="https://player.vimeo.com/video/448070209"
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

export default CourseReelBanner
