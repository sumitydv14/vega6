import React from 'react'
import andrew from '../../images/andrew.png'
import viconq from '../../images/viconq.png'
import testi2 from '../../images/testi2.png'
import cyrilGupta from '../../images/cyrilGupta.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TrafficFreshTestimonials() {

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
                                                I think this will be a great tool to help marketers create
                                                better content and leverage influencers to get quick, targeted
                                                traffic to their videos, squeeze pages, or other content.
                                            </p>
                                            <h5>Andrew Darius</h5>
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
                                                TrafficFresh takes the right approach at getting high-quality,
                                                targeted traffic quickly to your videos &amp; content without
                                                paying for ads. Blackhat bogus ranking software and tactics
                                                just don't work anymore. We are taking our business
                                                mainstream- and TrafficFresh is the first stop to get free
                                                traffic. I highly recommend this to anyone struggling to get
                                                traffic quickly to their page.
                                            </p>
                                            <h5 >Neil Napier</h5>
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
                                                TrafficFresh is one powerful software. Think of BuzzSumo but
                                                10X better and 10X cheaper. I can put my content right before
                                                the top players in my niche and leverage their authority and
                                                audience to get traffic. This is simply amazing! Pick it up
                                                before these guys change their mind and stop selling it at
                                                this crazy price.
                                            </p>
                                            <h5>Cyril 'JEET' Gupta</h5>
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

export default TrafficFreshTestimonials
