import React from 'react'
import feature9 from '../../images/feature9.png';
import niche4 from '../../images/niche4.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import AgencyHead from '../AgencyReel/AgencyHead';
import Agencycard from '../AgencyReel/Agencycard';

function PodreelFeaturs() {
    return (
        <div>
             <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                               <Agencycard 
                                 agencyimg={feature9}
                                 agencycontent="Broadcast your Live Video – Even When You’re Sleeping"
                                 agencypara="Easily schedule and stream pre-recorded videos for maximum
                                 traffic and engagement. Work smarter and grow your list in no
                                 time."
                               />
                        </div>
                        <div className="col-md-6">
                               <Agencycard 
                                 agencyimg={niche4}
                                 agencycontent="Simultaneously Stream Across 12 Social Media Platforms"
                                 agencypara="Go live across Facebook, Twitter, YouTube, Periscope, Twitch,
                                 MobCrush, Smashcast, WordPress, Blogger, Tumblr, LiveJournal and
                                 iNSTAGIB all at the same time."
                               />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                               <Agencycard 
                                 agencyimg={vicon3}
                                 agencycontent="Customizable Live Video Layout"
                                 agencypara="Stream professional-looking live videos with customized lower
                                 thirds, background music &amp; multilingual captions. Boost your
                                 watch time with these engaging visual tools."
                               />
                            
                        </div>
                        <div className="col-md-6">
                                <Agencycard 
                                 agencyimg={vicon4}
                                 agencycontent="Auto-Private Message Leads &amp; Auto-Moderate Comments"
                                 agencypara="Keep your livestream chat active &amp; spam-free with automatic
                                 filters and comments auto-reply. Privately respond to leads or
                                 customer feedback with the auto-private message feature."
                               />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PodreelFeaturs
