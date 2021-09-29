import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import LiveReelBanner from './LiveReelBanner'
import LiveReelFeatures from './LiveReelFeatures'
import LiveReelTestimonials from './LiveReelTestimonials'
import { Helmet } from 'react-helmet'

function LiveReel() {
    return (
        <div>
            <Helmet>
               <title>Vega6 | LiveReel</title>
           </Helmet>

            <Navbar/>
            <LiveReelBanner/>
            <LiveReelFeatures/>
            <LiveReelTestimonials/>
            <Footer/>
            
        </div>
    )
}

export default LiveReel
