import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function VisualReelFatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Make Shareworthy Content In 3 Clicks"
                              agencypara="Create your next traffic-generating content within minutes.
                              Simply choose your media, customize it with your text &amp;
                              logo, and publish on any platform!"
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Simultaneously Auto-Post Across 10 Social Media Platforms"
                              agencypara="Automatically syndicate and schedule your uploads across 10
                              high-traffic social media sites. Multiply your exposure, leads,
                              and backlinks easily!"
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Produce High-Quality Visual Content On Any Format"
                              agencypara="Be unstoppable with 1000s of royalty-free content you can use
                              for your brand. Choose from our growing library of cinemagraphs,
                              memes, images, quotes-pics, and video clips you can publish."
                            />
                            
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="User-Friendly Drag-n-Drop Editor"
                              agencypara="Enjoy a straightforward interface that lets you create fresh
                              content for your business on the daily. Zero learning curve
                              required."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default VisualReelFatures
