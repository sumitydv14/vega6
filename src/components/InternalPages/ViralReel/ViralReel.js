import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import ViralReelBanner from './ViralReelBanner'
import ViralReelFeatures from './ViralReelFeatures'
import ViralReelTestimonials from './ViralReelTestimonials'

function ViralReel() {
    return (
        <div>
            <Navbar/>
            <ViralReelBanner/>
            <ViralReelFeatures/>
            <ViralReelTestimonials/>
            <Footer/>
        </div>
    )
}

export default ViralReel
