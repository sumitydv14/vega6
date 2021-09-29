import React from 'react'
import cyrilGupta from '../../images/cyrilGupta.png';
import testi3 from '../../images/testi3.png';
import testi2 from '../../images/testi2.png';
import testi1 from '../../images/testi1.png';
import viconq from '../../images/viconq.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';



function ScriptReelTestimonials() {

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
                            <OwlCarousel className="owl-carousel owl-theme"
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
                                            <span>TeknikForce</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={testi3}
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
                                                ScriptReel is an easy to use video app to automatically create
                                                and add captions in any video automatically. And you can
                                                translate those to any language, even create multi-lingual
                                                voice over for the videos. Very cool and very useful app,
                                                definitely going to help us reach a broader audience. Highly
                                                recommended.
                                            </p>
                                            <h5 className="m-0">Karthik Ramani</h5>
                                            <span>EverLesson</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={testi2}
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
                                                I run ads and social media posts with video. Usually they
                                                don't get much engagement. Then I tried out ScriptReel - and
                                                voila - adding captions, editing them and translating them
                                                made it easier to reach a wider audience. Love it, and
                                                recommend it
                                            </p>
                                            <h5 className="mt-4">Neil Napier</h5>
                                            <span>KV SOCIAL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={testi1}
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
                                                Captions make it much easier for your videos, and especially
                                                video ads, to be consumed by viewers. This helps you to
                                                increase video retention, and thus conversions. ScriptReel
                                                makes it SO much easier to automatically create captions, but
                                                what is really cool is how ScriptReel helps to translate them
                                                as well into many different languages! This is a very useful
                                                app! Highly recommended.
                                            </p>
                                            <h5 className="m-0">Todd Gross</h5>
                                            <span>Super Affiliate &amp; Video Marketer</span>
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

export default ScriptReelTestimonials
