import React from 'react'
import testi2 from '../../images/testi2.png';
import testi3 from '../../images/testi3.png';
import testi5 from '../../images/testi5.png';
import testi1 from '../../images/testi2.png';
import viconq from '../../images/viconq.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


function VisualReelTestimonials() {

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
                                                Visual Content works. Period. If you’re not creating and
                                                sharing cinemagraphs, memes, quote-pics; you’re missing out on
                                                all that free traffic you could be getting from social media.
                                                VisualReel’s automation feature makes it a hands free process
                                                for anyone who wants to do this. Just set and forget.
                                                Brilliant.
                                            </p>
                                            <h5 className="">Neil Napier</h5>
                                            <span>KVSocial</span>
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
                                                I like how fast and easy it is to create visual content with
                                                VisualReel. Saves me time from searching for content to use…
                                                the libraries have enough cinemagraphs, memes and quote-pics
                                                to play around with and you can easily find something for
                                                every niche. Definitely something I would recommend if you’re
                                                like me and want to save time. Agency license upgrade is a
                                                plus.
                                            </p>
                                            <h5 className="">Karthik Ramani</h5>
                                            <span>EverLesson</span>
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
                                                "I have been playing with VisualReel for the last few days and
                                                I have to say, being able to create everything from one single
                                                dashboard and using all the available graphic elements from
                                                the library supplied makes this new software super easy and
                                                fun to use. Unlike any other software I've tried, with
                                                VisualReel I can create visual graphics and post them from one
                                                place within minutes. Great work guys, we will be adding this
                                                to our arsenal of tools we use daily in our business. "
                                            </p>
                                            <h5 className="m-0">Paul Okeeffe</h5>
                                            <span>Global Marketing Ninja</span>
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
                                                As some of you are aware, I use visual content all the time in
                                                my marketing. Like videos, it is important when it comes to
                                                getting the user’s attention. Use VisualReel to make it fast
                                                and easy to create all those cinemagraphs, memes and
                                                quote-pictures without spending time that you don't have!
                                            </p>
                                            <h5 className="">Todd Gross</h5>
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

export default VisualReelTestimonials
