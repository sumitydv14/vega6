import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import StoryReelBanner from './StoryReelBanner'
import StoryReelFeatures from './StoryReelFeatures'
import StoryReelTestimonials from './StoryReelTestimonials'
import { Helmet } from 'react-helmet'

function StoryReel() {
    return (
        <div>
            
            <Helmet>
               <title>Vega6 | StoryReel</title>
           </Helmet>

            <Navbar/>
            <StoryReelBanner/>
            <StoryReelFeatures/>
            <StoryReelTestimonials/>
            <Footer/>

        </div>
    )
}

export default StoryReel
