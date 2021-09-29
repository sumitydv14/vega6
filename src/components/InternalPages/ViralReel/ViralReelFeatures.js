import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function ViralReelFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Create 100s Of High-Definition Videos and GIFs A Day From A
                              Keyword"
                              agencypara="Dominate your niche with consistent high-quality uploads that
                              build your brand’s presence. Create a solid base of followers
                              just by using keyword-generated content!"
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Manage Up To 500 Social Media Accounts With Ease"
                              agencypara="Syndicate your post schedule and simultaneously publish your
                              content across all your social media accounts. Save hundreds in
                              hiring a social media manager!"
                            />
                            
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Get High-Quality Text-To-Speech Voiceovers"
                              agencypara="Boost your viewership with life-like voiceover narrations you
                              can get in minutes. Simply copy-paste your text and get your
                              ready-to-use voiceover!"
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Access A Vast Library Of Images, Music, Fonts And Videos"
                              agencypara="Choose from 1000s of media elements to make your video stand
                              out. Easily edit your next engaging content that is teeming with
                              viral potential."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ViralReelFeatures
