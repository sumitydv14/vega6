import React from 'react'
import testi1 from '../../images/testi1.png';
import viconq from '../../images/viconq.png';
import testi2 from '../../images/testi2.png';
import testi3 from '../../images/testi3.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function PodreelTestimonials() {

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
                                                I’ve been doing Live Video online since 2006. They’re one of
                                                the best ways to generate more engagement, and to get better
                                                results. With LIVEreel, you can now stream On 12 different
                                                networks…that means reaching out to more viewers, getting more
                                                traffic and better results. Plus the engagement management
                                                features keeps me free while LIVEreel comments and replies to
                                                my viewers!”
                                            </p>
                                            <h5 className="m-0">Todd Gross</h5>
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
                                                Live videos are taking over and ignoring them is a big mistake
                                                but then again, it’s not for everyone. This is what I like
                                                about LIVEreel…it’s ability to make LIVE videos easier for
                                                everyone. I love the automation it has in place but mostly the
                                                simplicity of how easily I can do LIVE videos. Definitely use
                                                LIVEreel and stay on top of the video trend.”
                                            </p>
                                            <h5 className="">Neil Napier</h5>
                                            <span>CEO - KVSocial</span>
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
                                                I’ve been using LIVEreel for a bit and love the fact that I
                                                can use my pre-recorded videos to do LIVE videos. It helps us
                                                to reach out to our users in different timezones and also gets
                                                more viewers and traffic since we can now stream On 12
                                                networks, all at once.”
                                            </p>
                                            <h5 className="">Karthik Ramani</h5>
                                            <span>Co-Founder - Videosly</span>
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

export default PodreelTestimonials
