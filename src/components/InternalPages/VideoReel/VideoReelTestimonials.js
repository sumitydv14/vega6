import React from 'react'
import testi2 from '../../images/testi2.png';
import viconq from '../../images/viconq.png';
import testi1 from '../../images/testi1.png';
import testi5 from '../../images/testi5.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function VideoReelTestimonials() {
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
                                                Videos do grab attention,especially when you post them on your
                                                Facebook or any social media profile. They're always better
                                                than posting Text. VideoReel gave us tha ability to post more
                                                video-based updates, helping us increase our engagement.
                                                Creating videos for social media is super easy with VideoReel
                                                and it's something we recommend using.
                                            </p>
                                            <h5 className="m-0">Neil Napier</h5>
                                            <span>CEO - KYVIO &amp; KVSOCIAL</span>
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
                                                What makes Videoreel unique is that it comes packed with loads
                                                of templates, video clips and images! This Makes it so much
                                                easiest to quickly and create a brand new video animation for
                                                your ads or your social posts. I highly recommend it !
                                            </p>
                                            <h5>Todd Gross</h5>
                                            <span>VIDEO MARKETER</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={testi5}
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
                                                Very easy to use. Express and Drag and drop editor, both are
                                                fun to use and make it so much easier to videos. This is
                                                possibly the coolest video app out there, especially with over
                                                175 gorgeous templates that I can quickly customize for any
                                                niche I want.
                                            </p>
                                            <h5 >Rashvin</h5>
                                            <span>FIG PAID ADVERTISER</span>
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

export default VideoReelTestimonials
