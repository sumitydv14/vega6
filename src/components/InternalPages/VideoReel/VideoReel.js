import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import VideoReelBanner from './VideoReelBanner'
import VideoReelFeatures from './VideoReelFeatures'
import VideoReelTestimonials from './VideoReelTestimonials'
import { Helmet } from 'react-helmet'


function VideoReel() {
    return (
        <div>
           <Helmet>
               <title>Vega6 | VideoReel</title>
           </Helmet>
            <Navbar/>
            <VideoReelBanner/>
            <VideoReelFeatures/>
            <VideoReelTestimonials/>
            <Footer/>
        </div>
    )
}

export default VideoReel
