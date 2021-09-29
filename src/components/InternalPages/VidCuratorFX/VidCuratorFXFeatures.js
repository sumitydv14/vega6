import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function VidCuratorFXFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Convert A Single Keyword To A Video"
                              agencypara="Turn any keyword to an awesome video within minutes. Boost
                              traffic and engagement for your business on any niche!"
                            />  
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Unlimited Access to Thousands Of Sleek Templates &amp; Elements"
                              agencypara="Easily produce 1000s of videos complete with customizable
                              templates, transitions, filters, and effects. Say goodbye to
                              hours of editing and rendering."
                            /> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Get High-Performing Videos In A Snap"
                              agencypara="Let our AI do the heavy lifting and quickly compile clips and
                              images tailor-fit for your video. Reach and even surpass your
                              content quota effortlessly."
                            /> 
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Access An Extensive Library of Images &amp; Videos"
                              agencypara="Choose from 1000s of royalty-free media assets to boost your
                              uploads across high-traffic social media sites."
                            /> 
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default VidCuratorFXFeatures
