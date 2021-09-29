import React from 'react'
import vuser from '../../images/vuser.png'
import ben from '../../images/Ben-Muray.png';
import brett from '../../images/brett-ingram.png';
import testi1 from '../../images/testi1.png';
import viconq from '../../images/viconq.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ViralReelTestimonials() {

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
                                                src={ben}
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
                                            ViralReel makes it 3-step easy to create videos that are fun but also connect with the audience and makes it so much easier to engage them. Social Media is full of videos that are motivational or funny or compilations of top-10 best-buys type videos and ViralReel lets you create them without complex editing and using just a keyword.
                                            </p>
                                            <h5 className="m-0">Ben Murray</h5>
                                            <span>Virtual Pioneer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={brett}
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
                                            Everyone creates those regular boring sales and marketing video. People are sorta blind to them. ViralReel lets you create fun entertaining videos that stand out in the newsfeed, gets more engagement, more comments, more shares and definitely helps turn those viewers into subscribers and buyers. On top of that, ViralReel is stupidly easy to use. Highly recommended.
                                            </p>
                                            <h5 className="m-0">Brett Ingram</h5>
                                            <span>Animaytor - Video Marketer</span>
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
                                            Creating plain boring videos isn't going to cut it. Your videos need to be entertaining as well. When you connect with the viewer emotionally, they automatically start trusting you and it's so much easier to bring them to your website and convert them into a sale. ViralReel lets you create these "Entertaining Videos" easily, using just a keyword and simple yet fully customizable editing. This is the next step in video marketing.
                                            </p>
                                            <h5 className="m-0">Todd Gross</h5>
                                            <span>Top Video Marketer</span>
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

export default ViralReelTestimonials
