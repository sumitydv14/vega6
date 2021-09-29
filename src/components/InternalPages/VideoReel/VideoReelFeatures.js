import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';


function VideoReelFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Create Stunning Videos For Any Niche In Three Simple Steps"
                              agencypara="Produce unlimited readily-optimized videos for social media
                              without any hassle. Multiply your traffic and engagement in no
                              time."
                            /> 
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Choose From 175 Professionally-Designed Video Templates"
                              agencypara="No need to spend hours just to get a social media video that
                              grabs attention. Simply select any template and get a unique
                              video in minutes."
                            />  
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Unlimited Access To All-In-One Media Library"
                              agencypara="Add sleek animations, unique fonts, videos, music, and images to
                              spice up your video. Consistently upload videos that make your
                              brand stand out."
                            />
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Fully-Customizable Videos That Solidify Your Brand"
                              agencypara="Create videos that drive your brand retention through
                              watermarks, logos, consistent brand colors, and more."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default VideoReelFeatures
