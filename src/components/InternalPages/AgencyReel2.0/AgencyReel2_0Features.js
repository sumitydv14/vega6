import React from 'react'
import viralvideocreator from '../../images/viralvideocreator.jpg';
import AIposter from '../../images/AIposter.jpg';
import viralcontenttopics1x from '../../images/viralcontenttopics1x.jpg';
import findviralcontenttopicsyoutube from '../../images/findviralcontenttopics(youtube).jpg';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';


function AgencyReel2_0Features() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features"/>
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard  
                             agencyimg={viralvideocreator}
                             agencycontent="Automatically Curate a Stream Of Content"
                             agencypara="Instantly turn 1 keyword into 100s of curated high-quality posts
                             on social media. Get a variety of fresh content delivered and
                             scheduled automatically."
                           />
                        </div>
                        <div className="col-md-6">
                             <Agencycard 
                              agencyimg={AIposter}
                              agencycontent="Find Clients Looking For Your Services"
                              agencypara=" Get businesses in need of social media management in any niche.
                              From prospecting to client management, AgencyReel does it all
                              for you."
                             />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={viralcontenttopics1x}
                              agencycontent="Instantly Create Fully-Customizable Content For Social Media
                              Sites"
                              agencypara="Choose from 1000s of images, quotes, videos, cinemagraphs, and
                              memes to get your engagement rolling. The sky’s the limit with
                              our rich media library."
                             />
                        </div>
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={findviralcontenttopicsyoutube}
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
export default AgencyReel2_0Features;
