import React from 'react'
import sappsneonotify from '../images/sapps-neonotify.png';
import sappsneotimer from '../images/sapps-neotimer.png';
import logocover from '../images/logocover.png';
import Wordcard from '../WordPress/Wordcard';

function ShopifyProdusts() {
    return (
        <div>
            <section className="Shopify-banner-sec">
                <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <div className="logo-cover text-center">
                                 <img src={logocover} alt=""/>
                             </div>
                         </div>
                      </div>
                  <div className="row wordpresssize  d-flex justify-content-center ">
                       <Wordcard porductsimg={sappsneonotify} productsname="Neonotify" productpara="Explore the Smartest ways to Attract and Retain Visitors on your Shopify Store." />
                       <Wordcard porductsimg={sappsneotimer} productsname="Neotimer" productpara="Increase Sales Figures of your Shopify Store by adding Countdown Timers."/>
                   </div>
                </div>
            </section>

        </div>
    )
}

export default ShopifyProdusts
