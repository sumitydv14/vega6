import React from 'react'
import connectup from '../../images/connect_up.jpg';
import sharevideo from '../../images/share_video.jpg';
import videobase from '../../images/video_base.jpg';
import uniquetitle from '../../images/unique_title.jpg'; 
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function SyvidFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                  
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={connectup}
                              agencycontent=" Upload On 9 Video Sharing Websites and 11 Social Media Sites In 1 Click"
                              agencypara="Multiply your exposure with a one-click connect feature that lets you upload on multiple social media sites simultaneously. Ger more views with ease!"
                            />    
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={sharevideo}
                              agencycontent="Use Video-Based Campaigns To Boost Your Rank"
                              agencypara="Organize your video campaigns conveniently with an in-built control panel that tracks your progress, performance, and schedule."
                            /> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={videobase}
                              agencycontent="Automatically Spin Title, Description And Keyword For Worry-Free Uploads"
                              agencypara="Get automatically revised title, description, and keyword with every upload. Avoid flag-downs while also testing out which variation works best."
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={uniquetitle}
                              agencycontent="Evaluate Your SEO-Optimization In Real-Time"
                              agencypara="Instantly assess your title, keyword, and description with unique SEO rankings generated in a click. Rank easily with this powerful analysis tool."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SyvidFeatures
