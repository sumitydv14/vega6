import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function StoryReel2_0Features() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Create Stunning Stories From 100s Of Professionally-Designed
                              Templates"
                              agencypara="Get attention-grabbing story-style videos that inspire your
                              viewers to swipe up. Save hours editing and get stunning stories
                              in minutes."
                            />   
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Access 1000s Of Images, Fonts, Music And Videos For Your
                              Content/h4&gt;"
                              agencypara="Effortlessly create a short video that conveys and elevates
                              your brand with a rich library of visual elements, music
                              graphics, and fonts to choose from."
                            /> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Fully-Customize your Story-Style Videos In A Few Clicks"
                              agencypara="Make your audience remember your videos easily by branding it
                              with your own media content, logo, and watermark that boost
                              brand retention."
                            />
                        </div>
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Add Unique Swipe Up Animations On All Your Social Stories"
                              agencypara="What’s a beautifully-edited video without a call to action?
                              Convert your viewers to actual leads with unique, eye-grabbing
                              swipe up animations."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default StoryReel2_0Features
