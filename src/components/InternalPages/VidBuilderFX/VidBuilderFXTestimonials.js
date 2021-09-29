import React from 'react'
import andrew from '../../images/andrew.png'
import viconq from '../../images/viconq.png'
import cyrilGupta from '../../images/cyrilGupta.png'
import testi2 from '../../images/testi2.png'
import testi3 from '../../images/testi3.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';



function VidBuilderFXTestimonials() {

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
                                                src={andrew}
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
                                                "Creating videos for your marketing is what could be a
                                                lifeline for you business. VidBuilderFX gives you the ability
                                                to create videos curated from trending videos clips. It means
                                                higher chance for sharing, liking and viewer coming back for
                                                more. The keyword based auto creation is huge time saver on
                                                top of it."
                                            </p>
                                            <h5 className="m-0">Andrew Darius</h5>
                                            <span>CEO - Explaindio.com</span>
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
                                                "VidBuilderFX is one of those apps that actually blew me away.
                                                With its ability to create videos that actually get tons of
                                                traffic on Facebook and then being able to create 100s of them
                                                using just a keyword, automatically is amazing. Definitely
                                                pick this up! "
                                            </p>
                                            <h5 className="mt-4 ">Cyril 'JEET' Gupta</h5>
                                            <span>TeknikForce</span>
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
                                                "What I love the most about VidBuilderFX is that the videos it
                                                creates for your marketing, actually are going get you more
                                                views and shares on their own since they’re curated from video
                                                clips that are already viral. This is possibly the easiest way
                                                to create videos for your marketing AND also get them viral on
                                                their own, automatically."
                                            </p>
                                            <h5 className="m-0">Neil Napier</h5>
                                            <span>KVSocial.com</span>
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
                                                "Creating videos using just a keywords is great…especially
                                                when you can publish them anywhere on Facebook knowing they
                                                can genuinely get viral. I love the ability to create, edit
                                                and publish multiple videos from just a single keyword, all
                                                automatically."
                                            </p>
                                            <h5 className="mt-4">Karthik Ramani</h5>
                                            <span>CoFounder - ReplayTap</span>
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

export default VidBuilderFXTestimonials
