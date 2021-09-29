import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import VisualReelBanner from './VisualReelBanner'
import VisualReelFatures from './VisualReelFatures'
import VisualReelTestimonials from './VisualReelTestimonials'

function VisualReel() {
    return (
        <div>
            
            <Navbar/>
            <VisualReelBanner/>
            <VisualReelFatures/>
            <VisualReelTestimonials/>
            <Footer/>

        </div>
    )
}

export default VisualReel
