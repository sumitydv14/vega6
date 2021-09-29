import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function ScriptReelFeatures() {
    return (
        <div>
            <section className="features-sec">
                <div className="container">
                   
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Extract Captions From Your Video In Minutes"
                              agencypara=" No need to sit hours on end transcribing your video. Simply
                              upload your video or copy-paste a YouTube URL and instantly get
                              accurate captions in a snap"
                            />
                            
                        </div>
                        <div className="col-md-6">
                        <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Translate Your Caption to 100+ Languages"
                              agencypara=" Choose from over 100 language translations and enjoy a wider
                              audience reach. Use our voiceover options to create videos that
                              are accessible and inclusive."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Automatically Sync Your Captions To Your Audio"
                              agencypara="Make subtitling hassle-free with our readily-synced captions.
                              Save time, resources, and energy just to get reliable subtitles."
                            />
                        </div>
                        <div className="col-md-6">
                           <Agencycard 
                              agencyimg={vicon4}
                              agencycontent="Use 100% Customizable Caption Templates"
                              agencypara="Use ready-made caption templates to make your videos stand out.
                              Save time experimenting with fonts and colors, our caption
                              templates make it easy for you"
                            /> 
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ScriptReelFeatures
