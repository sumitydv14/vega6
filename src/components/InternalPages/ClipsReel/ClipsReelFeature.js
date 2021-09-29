import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import AgencyHead from '../AgencyReel/AgencyHead';

function ClipsReelFeature() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features"/>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="features-img">
                                        <img src={vicon1} alt className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7 d-flex align-items-center">
                                    <div className="features-content">
                                        <h4>Turn Any Keyword Or URL To A Unique Animated Video</h4>
                                        <p>
                                            Easily convert niched keywords or URL to a stunning animated
                                            video in minutes. Quickly build your page’s views, engagement,
                                            and leads without hassle!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="features-img">
                                        <img src={vicon2} alt className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7 d-flex align-items-center">
                                    <div className="features-content">
                                        <h4>
                                            Use Captions, Graphics, and Watermarks For Views &amp; Branding
                                        </h4>
                                        <p>
                                            Create distinct videos with captions and graphics that let your
                                            viewers watch even while on mute. Add your logo and watermark
                                            for maximum brand retention and content ownership.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="features-img">
                                        <img src={vicon3} alt className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7 d-flex align-items-center">
                                    <div className="features-content">
                                        <h4>Add High-Quality Voiceover With Text-To-Speech Tool</h4>
                                        <p>
                                            Simply copy-paste your text to turn it into a voiceover
                                            narration for your videos. Use human-like narrations to create
                                            videos that attract longer watch time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="features-img">
                                        <img src={vicon4} alt className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-7 d-flex align-items-center">
                                    <div className="features-content">
                                        <h4>
                                            Access Media Library With Royalty-Free Music, Images, Icons,
                                            Fonts
                                        </h4>
                                        <p>
                                            Get unlimited access to our growing media library that contains
                                            copyright-free media elements for your video. Consistently
                                            produce 100% customizable videos that stand out.{" "}
                                        </p>
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

export default ClipsReelFeature
