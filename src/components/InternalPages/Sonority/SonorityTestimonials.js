import React from 'react'
import ankur from '../../images/ankur.png';
import viconq from '../../images/viconq.png';
import rashvin from '../../images/rashvin.png';
import toddgross from '../../images/todd-gross.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


function SonorityTestimonials() {

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
                                                src={ankur}
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
                                                I create a lot of VSLs and DEMO videos and don’t always have
                                                time to record voice-overs or search of a nice background
                                                music myself. Using Sonority has made it easier for me to
                                                quickly create video sales letters and demos for my software
                                                products or products I’m reviewing as an affiliate. The voices
                                                sound so real and the music fits perfect for the sales and
                                                demo videos. With so many voice artists to choose from, it
                                                makes it all so easy. Two thumbs up.
                                            </p>
                                            <h5 className="m-0">ANKUR SHUKLA</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={rashvin}
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
                                        <div className="videoreel-testionials-content text-center mt-4 mb-5">
                                            <p>
                                                We create a lot of YouTube video ads and having Sonority makes
                                                it so much easier and faster to churn out new version of video
                                                ads in minutes. Human-sounding voices, any accents languages
                                                for perfect targeting and royalty free copyright free music to
                                                avoid any bans. Sonority is a game changers and a must have
                                                tool.
                                            </p>
                                            <h5 className="mt-0">RASHVIN</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={toddgross}
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
                                                Unlike a lot of tools out there that create robotic sounding
                                                voice-overs, Sonority helps you create near-perfect
                                                human-sounding voice-overs and amazing unique music for your
                                                videos. So many voice artists to choose from, so many
                                                languages and so many music combination to pick from. If you
                                                create videos, Sonority is the last tool you’ll need for your
                                                audios. Very cool.
                                            </p>
                                            <h5 className="m-0">TODD GROSS</h5>
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

export default SonorityTestimonials
