import React from 'react'
import vicon1 from '../../images/vicon1.png'
import vicon2 from '../../images/vicon2.png'
import vicon3 from '../../images/vicon3.png'
import vicon4 from '../../images/vicon4.png'
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';



function VidneosFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Research With Ease"
                              agencypara="Get tailor-fit research data to know how to optimize your title,
                              write effective video descriptions and tags, as well as get an
                              overview of your target audience."
                            />
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Get Detailed Video Niche Analysis"
                              agencypara="Get data-driven recommendations in uploading your content on
                              Google and YouTube. Know what topics are trending and what
                              keywords are hot on the search queries."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Leverage The Algorithm To Rank Higher On Your Niche"
                              agencypara="Publish high-potential content using tools for auto-backlink,
                              keyword ranking, tested and proven algorithms and tag analysis."
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Create Unlimited Addicting Videos Hassle-Free"
                              agencypara=" Produce engaging videos with our custom voiceovers, background
                              jingle music, HD stock images, and other media elements."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default VidneosFeatures
