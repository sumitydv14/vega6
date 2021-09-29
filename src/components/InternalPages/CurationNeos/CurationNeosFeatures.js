import React from 'react'
import vicon1 from '../../images/vicon1.png'
import vicon2 from '../../images/vicon2.png'
import vicon3 from '../../images/vicon3.png'
import vicon4 from '../../images/vicon4.png'
import AgencyHead from '../AgencyReel/AgencyHead'
import Agencycard from '../AgencyReel/Agencycard'

function CurationNeosFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Grab Engaging Online Content In 5 Clicks"
                              agencypara="No need to brainstorm on making your next blog viral. Grab any
                              trending content and make it your own in minutes."
                        />
                          
                        </div>
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Double Your Traffic &amp; Leads With Curated Content"
                              agencypara="Consistently produce high-quality content whatever niche you’re
                              in. Simply convert keywords to profitable content guaranteed to
                              get you ahead of the competition."
                        />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Automate Your Upload Schedule On High-Traffic Sites"
                              agencypara="Publish your content across all websites in a single click. No
                              more need for a social media manager with a powerful dashboard
                              that lets you schedule and upload across major platforms."
                        />
                           
                        </div>
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="100% Customizable Content"
                              agencypara="Make any content uniquely yours and brandable. Rank high with
                              curated content while getting your business exposure and leads."
                        />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CurationNeosFeatures
