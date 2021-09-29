import React from 'react'
import brand1 from '../images/brand1.png';
import brand2 from '../images/brand2.png';
import brand3 from '../images/brand3.png';
import brand4 from '../images/brand4.png';
import livereel from '../images/livereel.png';
import storyreel from '../images/syreel.png';
import clipsreelnew from '../images/CLIPSREEL LOGO PNG.png'; 
import coursereel from '../images/Repeat Grid 1.png';
import viralreellogobig from '../images/viralreel-logo-big.png';
import agencyreel from '../images/ag2.png';
import sydidlogo from '../images/sydidlogo.png';
import scriptreel from '../images/scriptreel.png';
import sonority from '../images/DARK.png';
import podreel from '../images/Layer 3.png';
import vidneos from '../images/vidneos.png';
import traffic from '../images/traffic.png';
import curationreel from '../images/curationreel.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Link } from 'react-router-dom';


function HomeProduct() {
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
          items: 4
      }
  }
    }
    return (
        <div>
            <>
  {/* sec- 6 start */}
  <section className="sec-6">
    <div className="container">
      {/* <div class="row">
               <div class="col-md-12">
                    <div class="sec-6-heading text-center">
                         <h2>Our Products</h2>
                    </div>
               </div>
          </div> */}
      <div className="row mt-5 ">
        <div className="col-md-12">
          <OwlCarousel className="owl-carousel owl-theme" 
             {...option}
           
          >
            <div className="item">
              <figure className="m-0">
                <Link to="/viraltraffic">
                  <img src={brand1} alt className="img-fluid" />
                </Link>
              </figure>
            </div>
            <div className="item">
              <figure className="m-0">
                <Link to="/visualreel">
                  <img src={brand2} alt className="img-fluid" />
                </Link>
              </figure>
            </div>
            <div className="item">
              <figure className="m-0">
                <Link to="/videoreel">
                  <img src={brand3} alt className="img-fluid" />
                </Link>
              </figure>
            </div>
            <div className="item">
              <figure className="m-0">
                <Link to="/livereel">
                  <img src={livereel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>

            <div className="item">
              <figure className="m-0">
                <Link to="/storyreel">
                  <img src={storyreel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/clipsreel2_0">
                  <img src={clipsreelnew} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/coursereel">
                  <img src={coursereel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/viralreel">
                  <img src={viralreellogobig} alt className="img-fluid" />
                </Link>
              </figure>
            </div>



            <div className="item">
              <figure className="m-0">
                <Link to="/agencyreel">
                  <img src={agencyreel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/syvid">
                  <img src={sydidlogo} alt className="img-fluid" />
                </Link>
              </figure>
            </div>

            <div className="item">
              <figure className="m-0">
                <Link to="/scriptreel">
                  <img src={scriptreel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>

            <div className="item">
              <figure className="m-0">
                <Link to="/sonority">
                  <img src={sonority} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/podreel">
                  <img src={podreel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/vidneos">
                  <img src={vidneos} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/traffic">
                  <img src={traffic} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


            <div className="item">
              <figure className="m-0">
                <Link to="/curationreel">
                  <img src={curationreel} alt className="img-fluid" />
                </Link>
              </figure>
            </div>


          </OwlCarousel>
        </div>
      </div>
    </div>
  </section>
  {/* sec-6 end */}
</>

        </div>
    )
}

export default HomeProduct
