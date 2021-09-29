import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import PodreelBanner from './PodreelBanner'
import PodreelFeaturs from './PodreelFeaturs'
import PodreelTestimonials from './PodreelTestimonials'

function Podreel() {
    return (
        <div>
            <Navbar/>
            <PodreelBanner/>
            <PodreelFeaturs/>
            {/* <PodreelTestimonials/> */}
            <Footer/>
        </div>
    )
}

export default Podreel
