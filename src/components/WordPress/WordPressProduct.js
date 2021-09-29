import React from 'react'
import wpWpdollar from '../images/wp-Wpdollar.png';
import wpsocialneostheme from '../images/wp-socialneostheme.png';
import wpvideoappmonarchy from '../images/wp-videoappmonarchy.png';
import wpwpclickbank from '../images/wp-wpclickbank.png';
import wpVidneos from '../images/wp-Vidneos.png';
import logocover from '../images/logocover.png';
import Wordcard from './Wordcard';



function WordPressProduct() {
    return (
        <div>
            <section className="wordpress-banner-sec">
                <div className="container-fluid px-lg-5">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="logo-cover wplogocover  text-center">
                                <img src={logocover} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row wordpresssize  d-flex justify-content-center ">
                        <Wordcard porductsimg={wpWpdollar} productsname="Wpdollar3" productpara="The Most Powerful store builder in the market for Amazon."/>
                        <Wordcard porductsimg={wpsocialneostheme} productsname="SocialNeos Theme" productpara="Push message your users any time, on any device"   />
                        <Wordcard porductsimg={wpvideoappmonarchy} productsname="VideoApp Monarchy" productpara="A wp Plugin that actually generates traffic for you."   />
                        <Wordcard porductsimg={wpwpclickbank} productsname="WpClickBank" productpara="Auto posts, text ads, banner ads, contextual ads - all in one plugin"   />
                        <Wordcard porductsimg={wpVidneos} productsname="Vidneos Theme" productpara="Master the art of video blogging and attract massive traffic."   />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WordPressProduct
