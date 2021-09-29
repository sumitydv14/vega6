import React from 'react'
import gropu44 from '../images/Group 42.png';
import Iframe from 'react-iframe';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';


function HomeUpcoming() {
    return (
        <div>
            <>
                {/* sec-3 start */}
                <section className="sec-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-3-heading text-center">
                                    <img src={gropu44} alt className="img-fluid" />
                                    <h2 className="mt-3">

                                        Upcoming  <span>Product</span>
                                    </h2>
                                    <p className="m-0">
                                        We work tirelessly in developing better technologies that solve
                                        everything commerce.
                                    </p>
                                    <span className="bottom-line" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12 col-lg-6 justify-content-center d-flex">
                                <div className="sec-3-img">
                                    <iframe src="https://player.vimeo.com/video/610562175?autoplay=1&loop=1"  width="620px" height="430px" mute="0"  allow='autoplay'  style={{border:"none"}} ></iframe> 
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 ">
                                <div className="sec-3-content">
                                    <h3>
                                        Clips<span>Reel</span>
                                    </h3>
                                    <p>
                                        Produce beautifully animated videos in seconds. ClipsReel uses AI
                                        to convert any keyword, URL, or Amazon/Shopify pages into a
                                        ready-to-use video.
                                    </p>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <div className="sec-3-box">
                                            <img src={c1} alt="c1" className="img-fluid" />
                                            <h4 className="mt-2">Create Instant Content</h4>
                                            <p className="mt-2">
                                                Turn any keyword, URL, or Amazon/Shopify page into a stunning
                                                animated video in a few clicks{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="sec-3-box">
                                            <img src={c2} alt="c2" className="img-fluid" />
                                            <h4 className="mt-2">Video &amp; Graphics Editor</h4>
                                            <p className="mt-2">
                                                Fully-customize your videos with a powerful drag-n-drop media
                                                editor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="sec-3-box">
                                            <img src={c3} alt="c2" className="img-fluid" />
                                            <h4 className="mt-2">Choose from 50 Voiceover Options</h4>
                                            <p className="mt-2">
                                                Simply copy-paste your text and have it spoken in 50 different
                                                voices and accents for your videos.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="sec-3-box">
                                            <img src={c4} alt="c3" className="img-fluid" />
                                            <h4 className="mt-2">Access Rich Media Library</h4>
                                            <p className="mt-2">
                                                Get unlimited access to 1000s of video clips, images, music,
                                                graphics, fonts, and more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sec-3 end */}
            </>

        </div>
    )
}

export default HomeUpcoming
