import React from 'react'
import vuser from '../../images/vuser.png';
import viconq from '../../images/viconq.png'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function AgencyReelTestimonals() {

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
                                 {...option }
                            >
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={vuser}
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Vivamus auctor risus in bibendum accumsan. Nullam faucibus
                                                tincidunt quam eu dignissim. Nam bibendum tincidunt neque at
                                                dictum.
                                            </p>
                                            <h5 className="m-0">ROB RIVERA</h5>
                                            <span>LIFE MARKETING</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={vuser}
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Vivamus auctor risus in bibendum accumsan. Nullam faucibus
                                                tincidunt quam eu dignissim. Nam bibendum tincidunt neque at
                                                dictum.
                                            </p>
                                            <h5 className="m-0">ROB RIVERA</h5>
                                            <span>LIFE MARKETING</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="videoreel-user-box">
                                        <div className="videoreel-user-img">
                                            <img
                                                src={vuser}
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Vivamus auctor risus in bibendum accumsan. Nullam faucibus
                                                tincidunt quam eu dignissim. Nam bibendum tincidunt neque at
                                                dictum.
                                            </p>
                                            <h5 className="m-0">ROB RIVERA</h5>
                                            <span>LIFE MARKETING</span>
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

export default AgencyReelTestimonals
