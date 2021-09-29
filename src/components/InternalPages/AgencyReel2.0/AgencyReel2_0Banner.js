import React from 'react'
import a2 from '../../images/a2.jpg';
// import '../../../video.css';

function AgencyReel2_0Banner() {
    return (
        <div>
            <section className="videoreelsec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center pr-lg-0">
                            <div className="videoreel-banner text-white">
                                <h1>AgencyReel 2.0</h1>
                                <p>
                                    Your very own marketing agency in 100% automation. Instantly curate
                                    your content, schedule your posts, and manage all your clients in
                                    one powerful dashboard.
                                </p>
                                <div className="view-btn mt-4">
                                    <a href="https://agencyreel.io/yes/" target="_blank" className="btn-change6">
                                        Learn More
                                    </a>
                                </div>
                              
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="videoreel-img d-flex justify-content-center">
                                <img src={a2} alt className="img-fluid w-75" />
                            </div>
                            <div className="video-boder">
                                <div className="playerneos_wrapper">
                                    <div className="playerneos_wrapper1">
                                        <div
                                            className="wistia_responsive_padding"
                                            style={{ padding: "56.25% 0 0 0", position: "relative" }}
                                        >
                                            <div
                                                className="wistia_responsive_wrapper"
                                                style={{
                                                    height: "100%",
                                                    left: 0,
                                                    position: "absolute",
                                                    top: 0,
                                                    width: "100%"
                                                }}
                                            >
                                                <div
                                                    className="wistia_embed wistia_async_fxezanb499 videoFoam=true"
                                                    style={{
                                                        height: "100%",
                                                        position: "relative",
                                                        width: "100%"
                                                    }}
                                                >
                                                    <div
                                                        className="wistia_swatch"
                                                        style={{
                                                            height: "100%",
                                                            left: 0,
                                                            opacity: 0,
                                                            overflow: "hidden",
                                                            position: "absolute",
                                                            top: 0,
                                                            transition: "opacity 200ms",
                                                            width: "100%"
                                                        }}
                                                    >
                                                        <img
                                                            src="https://fast.wistia.com/embed/medias/fxezanb499/swatch"
                                                            style={{
                                                                filter: "blur(5px)",
                                                                height: "100%",
                                                                objectFit: "contain",
                                                                width: "100%"
                                                            }}
                                                            alt
                                                            aria-hidden="true"
                                                            onload="this.parentNode.style.opacity=1;"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default AgencyReel2_0Banner
