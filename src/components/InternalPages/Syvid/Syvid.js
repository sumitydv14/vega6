import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import SyvidBanner from './SyvidBanner'
import SyvidFeatures from './SyvidFeatures'
import SyvidTestimonials from './SyvidTestimonials'

function Syvid() {
    return (
        <div>
            <Navbar/>
            <SyvidBanner/>
            <SyvidFeatures/>
            {/* <SyvidTestimonials/> */}
            <Footer/>
        </div>
    )
}

export default Syvid
