import React from 'react'
import sharpsocial from '../images/wbp-sharpsocial.png';
import wbpVisiblybox from '../images/wbp-Visiblybox.png';
import wbpviralsoci from '../images/wbp-viralsoci.png'; 
import wbpvidrankneos from '../images/wbp-vidrankneos.png';
import logocover from '../images/logocover.png';
import Wordcard from '../WordPress/Wordcard';


function WebAppsProduct() {
    return (
        <div>
            <section className="webapps-banner-sec">
                <div className="container">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="logo-cover text-center">
                                    <img src={logocover} alt=""/>
                                </div>
                            </div>
                        </div>
                    <div className="row wordpresssize  d-flex justify-content-center ">
                          <Wordcard  porductsimg={sharpsocial} productsname="SharpSocial" productpara="Analyse your fanpage user comments and turn them into cash." />
                          <Wordcard porductsimg={wbpVisiblybox} productsname="Visibily" productpara="A powerful app that converts your traffic into subscriber leads and sales." />
                          <Wordcard porductsimg={wbpviralsoci} productsname="ViralSoci" productpara="A powerhouse for unlimited free Facebook Traffic & user engagement" />
                          <Wordcard porductsimg={wbpvidrankneos} productsname="VidRankNeos" productpara="All in one video marketing solution." />
                          <Wordcard porductsimg={sharpsocial} productsname="SharpSocial" productpara="Analyse your fanpage user comments and turn them into cash." />
                   </div>
                </div>
            </section>
        </div>
    )
}

export default WebAppsProduct
