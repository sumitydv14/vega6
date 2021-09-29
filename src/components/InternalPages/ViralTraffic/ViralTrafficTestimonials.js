import React from 'react'
import testimonials2 from '../../images/testimonials2.png';
import cyril from '../../images/cyril.png';
import neilnapier from '../../images/neil_napier.jpg';
import viconq from '../../images/viconq.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ViralTrafficTestimonials() {

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
                                                src={testimonials2}
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
                                            This is a very cool traffic building app. The ability to connect 100s of fanpages, twitter and tumblr is great. PLUS you can curate and schedule copyright free viral content to be published like clockwork. No manual work or anything. Highly recommend if you want to build traffic without SEO.
                                            </p>
                                            <h5 className="m-0">Ankur Shukla</h5>
                                            <span>Top Affiliate</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={cyril}
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
                                                "Viral Traffic Builder is stupidly easy to use and hands free app. We could get it up and running, posting content in under 12 minutes. I love that fact that we really don’t have to do much, it finds the right kind of content that’s already proven to get traffic and publishes it for us. Hands down the most useful app out there if you want to start building free traffic. "
                                            </p>
                                            <h5 className="mt-4 ">Cyril Gupta</h5>
                                            <span>TeknikForce</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={neilnapier}
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
                                                "I like the simplicity and ease of Viral Traffic Builder. Just take any old or dead social profile or fan page, schedule value-driven real content that people love to engage with and you’ll be blown away by the results. Easy way to generate engagement and traffic"
                                            </p>
                                            <h5 className="m-0">Neil Napier</h5>
                                            <span>CEO KVSocial</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={testimonials2}
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
                                                "This is a very cool traffic building app. The ability to connect 100s of fanpages, twitter and tumblr is great. PLUS you can curate and schedule copyright free viral content to be published like clockwork. No manual work or anything. Highly recommend if you want to build traffic without SEO.."
                                            </p>
                                            <h5 className="mt-4">Ankur Shukla</h5>
                                            <span>Top Affiliate</span>
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

export default ViralTrafficTestimonials
