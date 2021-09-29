import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from './Agencycard';
import AgencyHead from './AgencyHead';


function AgencyReelFeature() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead headname="Top Features"/>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                             agencyimg={vicon1}
                             agencycontent="Effortlessly Schedule A Stream Of Auto-Generated Content" 
                             agencypara="No need to spend hours and hundreds just to create high-quality
                             posts on social media. Get a variety of fresh content delivered
                             and scheduled automatically."     
                             />
                            
                        </div>
                        <div className="col-md-6">
                            <Agencycard
                              agencyimg={vicon2}
                              agencycontent="Find Clients Looking For Your Services"
                              agencypara="Get businesses in need of social media management on any niche.
                              Build a steady stream of profit in no time."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Produce Unlimited Fully-Customizable Content For Social Media
                              Sites"
                              agencypara=" Choose from 1000s of images, quotes, videos, cinemagraphs, and
                              memes to get your engagement rolling. The sky’s the limit with
                              our growing media library."
                            />
                        </div>
                        <div className="col-md-6">
                              <Agencycard 
                               agencyimg={vicon4}
                               agencycontent="Post Across Multiple Social Media Accounts For Your Clients"
                               agencypara="Easily manage multiple accounts for your clients with a
                               dashboard that keeps your post schedule organized. Publish
                               across high-traffic social media sites hassle-free."
                              />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AgencyReelFeature
