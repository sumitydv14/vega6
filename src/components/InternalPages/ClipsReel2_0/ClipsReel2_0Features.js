import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';


function ClipsReel2_0Features() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features"/>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Create Videos Simply By Pasting Any URL or Text"
                              agencypara="Instantly convert any URL, text, or product page from Amazon,
                              Shopify and more into a full-blown video you can use for your
                              ads, demos, posts, and more."
                            />
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                            agencyimg={vicon2}
                            agencycontent="Access a Rich Library of Images, Fonts, Music And Videos"
                            agencypara="Choose from millions of images and videos, 650 background music
                            and 1,000 sleek fonts to effortlessly make all your videos
                            professional-looking."
                           />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                             agencyimg={vicon3}
                             agencycontent="Fully-Customize and Optimize your Videos In A Few Clicks"
                             agencypara="Make your videos brandable and fully-optimized for social media
                             by adding in your logos, call to action, watermark, and
                             exporting it into square, story, or standard video dimensions."
                           />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Get Captivating Voiceovers and Captions for all your Videos"
                              agencypara="Simply paste your text and ClipsReel instantly adds in smart
                              captions, subtitles, and high-quality narration for all your
                              videos with 25 voice styles to choose from."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ClipsReel2_0Features
