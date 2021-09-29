import React from 'react'
import cyrilGupta from '../../images/cyrilGupta.png';
import viconq from '../../images/viconq.png';
import BenMuray from '../../images/Ben-Muray.png';
import partnerstestitodd from '../../images/partners-testi-todd.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


function StoryReelTestimonials() {

    const  option = {
        loop:true,
        margin:10,
        nav:true,
        item:3,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
          0:{
              items: 1
          },
          600:{
              items: 3
          },
          1000:{
              items: 3
          }
      }
        }

    return (
        <div>
            <section className="testimonials-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials-heading text-center">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <OwlCarousel  className="owl-carousel owl-theme"  
                               {...option}
                            >
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={cyrilGupta}
                                                className="img-fluid"
                                                alt="testimonials-img"
                                            />
                                        </div>
                                        <div className="videoreel-open-qutoe">
                                            <img
                                                src={viconq}
                                                className="img-fluid"
                                                alt="open-qutoe-img"
                                            />
                                        </div>
                                        <div className="videoreel-testionials-content text-center mt-4">
                                            <p>
                                                If you hate writing captions or subtitles manually, ScriptReel
                                                is gold for you. It will automatically transcribe the audio,
                                                create captions, lets you customise them, translate them and
                                                put them on your videos, all in minutes. Love the fact that
                                                you can even create multi-lingual audio for your videos. Very
                                                useful for all sorts of videos we do. Definitely pick this up!
                                            </p>
                                            <h5 className="m-0">Cyril Gupta</h5>
                                            <span>Teknik Force</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={BenMuray}
                                                className="img-fluid"
                                                alt="testimonials-img"
                                            />
                                        </div>
                                        <div className="videoreel-open-qutoe">
                                            <img
                                                src={viconq}
                                                className="img-fluid"
                                                alt="open-qutoe-img"
                                            />
                                        </div>
                                        <div className="videoreel-testionials-content text-center mt-4">
                                            <p>
                                                There is a massive shift in video market and stories are at
                                                the centre of it. If you aren’t creating and publishing
                                                vertical stories videos, you’re probably going to miss out
                                                more than half your viewers and loose on sales. StoryReel
                                                makes it SO MUCH EASIER to create “stories” videos easily and
                                                publish anywhere. Very cool and highly recommended
                                            </p>
                                            <h5 className="mt-4">Ben Murray</h5>
                                            <span>Virtual Pioneer </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={partnerstestitodd}
                                                className="img-fluid"
                                                alt="testimonials-img"
                                            />
                                        </div>
                                        <div className="videoreel-open-qutoe">
                                            <img
                                                src={viconq}
                                                className="img-fluid"
                                                alt="open-qutoe-img"
                                            />
                                        </div>
                                        <div className="videoreel-testionials-content text-center mt-4">
                                            <p>
                                                Creating stories and publish them on social media can
                                                quadruple your views and traffic, and bring in more sales.
                                                StoryReel makes it so much easier to create great looking
                                                stories videos using its 100+ templates. PLUS their mobile app
                                                helps you share them anywhere, easily. Start creating stories
                                                videos today using StoryReel
                                            </p>
                                            <h5 className="mt-4">Todd Gross</h5>
                                            <span>Video Marketer</span>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default StoryReelTestimonials
