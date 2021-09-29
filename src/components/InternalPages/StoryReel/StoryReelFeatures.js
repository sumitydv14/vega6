import React from 'react'
import feature9 from '../../images/feature9.png';
import niche4 from '../../images/niche4.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';



function StoryReelFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={feature9}
                              agencycontent="Get Stunning Stories From 100s Of Professionally-Designed
                              Templates"
                              agencypara="Get attention-grabbing vertical videos that inspire your viewers
                              to swipe up. Save hours editing and get stunning stories in
                              minutes."
                            /> 
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={niche4}
                              agencycontent="Access 1000s Of Images, Fonts, Music And Videos For Your Content"
                              agencypara="See top-ranking videos for any keyword and instantly analyse
                              your potential to outrank these with color-coded indicators.
                              Fewer hours on research, more time on your content."
                            /> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Fully-Customized And Brandable Stories In A Few Clicks"
                              agencypara="Insert your own media content, logos, and watermarks into your
                              videos and easily produce stories that boost brand retention."
                            /> 
                            
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Put Swipe Up Animation On All Your Social Stories"
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

export default StoryReelFeatures
