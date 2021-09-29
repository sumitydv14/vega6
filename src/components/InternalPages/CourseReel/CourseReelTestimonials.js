import React from 'react'
import viconq from '../../images/viconq.png';
import testi1 from '../../images/testi1.png';
import testi2 from '../../images/testi2.png';
import cyrilGupta from '../../images/cyrilGupta.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function CourseReelTestimonials() {

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
                                                I like the ease of use and speed ClipsReel offers. Creating
                                                videos using just the URL of an article or landing page is
                                                helpful and time saving. The customisation options are plenty
                                                but not over kill, making sure you can give you own voice to
                                                the video being created. A fun to use software and something I
                                                definitely recommend to help you get more visibility using
                                                videos online.”
                                            </p>
                                            <h5 className="mt-4">Todd Gross</h5>
                                            <span>Video Marketer</span>
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
                                                ClipsReel is really easy and fun to use. We can turn any of
                                                blog posts into engaging videos automatically and customise
                                                them with our brand identity so easily. The ability to add
                                                voice over using text to speech is very powerful as well.
                                                These videos are great, loved by the viewers and help us rank
                                                higher on search terms as well. I highly recommend using
                                                ClipsReel.”
                                            </p>
                                            <h5 className="mt-4">Neil Napier</h5>
                                            <span>KVSocial</span>
                                        </div>
                                    </div>
                                </div>
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
                                                ClipsReel lets me turn my blog posts and articles into feature
                                                length videos that look great. That’s an extra piece of
                                                interactive content I can create with in minutes use for ads
                                                or content marketing. Ability to add voice over using text -
                                                to - speech with so many languages and accents option is
                                                great. These videos are really powerful and something you
                                                should be creating and using in your marketing.”
                                            </p>
                                            <h5 className="m-0">Cyril Gupta</h5>
                                            <span>TeknikForce</span>
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

export default CourseReelTestimonials
