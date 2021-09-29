import React from 'react'
import vicon1 from '../../images/vicon1.png'
import vicon2 from '../../images/vicon2.png'
import vicon3 from '../../images/vicon3.png'
import vicon4 from '../../images/vicon4.png'
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function TrafficFreshFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Assess Trending Topics Just By Using Keywords"
                              agencypara="Tap into trends just by searching for keywords and uncovering a
                              ready list of popular content ideas. Get inspiration for your
                              next niche, product idea, or fresh content!"
                            />
                            
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Discover Hidden Traffic Goldmines"
                              agencypara="Quickly find hidden pockets of traffic across the web and use
                              these to your advantage. Leverage active forums by directing
                              them to the right content."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Leverage Your Google Ranking Through “Do-Follow” Blog Comments"
                              agencypara="Easily monitor which posts are gaining traction so you can
                              easily boost your Google ranking through do-follow comments."
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                            agencyimg={vicon4}
                            agencycontent="Use A Powerful Dashboard That Keeps You Up-To-Date"
                            agencypara="Keep organized with an all-in-one dashboard that quickly updates
                            you with traffic opportunities and to-do lists."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TrafficFreshFeatures;
