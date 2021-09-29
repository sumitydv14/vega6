import React from 'react'
import vicon1 from '../../images/vicon1.png';
import vicon2 from '../../images/vicon2.png';
import vicon3 from '../../images/vicon3.png';
import vicon4 from '../../images/vicon4.png';
import Agencycard from '../AgencyReel/Agencycard';
import AgencyHead from '../AgencyReel/AgencyHead';

function CourseReelFeaturs() {
    return (
        <div>
             <section className="features-sec">
                <div className="container">
                    <AgencyHead  headname="Top Features" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon1}
                              agencycontent="Create Stunning High-Definition Courses In Minutes"
                              agencypara=" Produce up to 20 minute-long clips that are crisp, professional-looking, and web-optimized. Dominate any niche in no time."
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon2}
                              agencycontent="Upload 100s Of Videos A Week Easily"
                              agencypara="Get a video editor so user-friendly that you can polish multiple videos a day without breaking a sweat."
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <Agencycard 
                              agencyimg={vicon3}
                              agencycontent="Record In-App, Upload Your Own MP3, Or Use Text-To-Speech"
                              agencypara="Whether you prefer auto-generated narration through text-to-speech, record your audio within the app, or upload your own, enjoy the freedom to use any voiceover you like."
                            />
                        </div>
                        <div className="col-md-6">
                            <Agencycard 
                             agencyimg={vicon4}
                             agencycontent="Unlimited Access To Vast Media Library"
                             agencypara=" Make your courses engaging with 1000s of images, videos, background music to choose from. Drive your repeat customers with courses that stand out."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CourseReelFeaturs
