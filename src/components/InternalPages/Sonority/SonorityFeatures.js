import React from 'react'
import son1 from '../../images/son1.png';
import son2 from '../../images/son2.png';
import son3 from '../../images/son3.png';
import son5 from '../../images/son5.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';


function SonorityFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                    
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={son1}
                              agencycontent="Use Real Human Voices to Read Your Script"
                              agencypara="Simply copy-paste any article or script and the Synthetic Speech
                              Technology instantly gives you a ready-to-use, captivating
                              voiceover with 15 voice styles to choose from."
                            />
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={son2}
                              agencycontent="Use and Create Unlimited Music Tracks for You and Your Clients"
                              agencypara="Never run out of music options. On top of the 1,000+ music
                              tracks from Sonority, its smart AI technology also composes
                              ready-made music tracks for you."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={son3}
                              agencycontent="Easily Mix &amp; Merge Your Content into Audio Tracks"
                              agencypara="Sonority’s intuitive dashboard lets anyone create a polished
                              audio track that fuses all your sound, audio, and voice tracks
                              in one ready-to-sell format."
                            />
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={son5}
                              agencycontent="Instantly Repurpose Your Audio Content into Videos"
                              agencypara="Sonority automatically converts any audio into a full-blown,
                              100% customizable video with graphics and visual assets added
                              for you."
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SonorityFeatures
