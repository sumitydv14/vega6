import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';
function ViralTrafficFeature() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Produce Viral Videos Using Keywords"
                              agencypara="Easily make 100s of traffic-getting videos from keywords in
                              three simple steps. Whatever your niche, establish your online
                              presence in no time!"
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Use Human-Like Text-To-Speech Audio Narration"
                              agencypara="Produce human-like voiceover narration for your videos in
                              minutes. Maximize your watch time and engagement with
                              high-quality voiceovers."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Make Compilation Of Trending Videos On Autopilot"
                              agencypara="Get a DFY video compilation of trending clips that are
                              traffic-generating and equipped with high viral potential.
                              Simply upload or download, and see the numbers rolling."
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Multiply Your Exposure Videos Uploaded On High-Traffic Websites"
                              agencypara="Easily broadcast your 100% customizable video on Facebook,
                              YouTube, Twitter, or anywhere else online."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ViralTrafficFeature
