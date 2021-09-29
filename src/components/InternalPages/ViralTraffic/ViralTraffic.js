import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import ViralTrafficBanner from './ViralTrafficBanner'
import ViralTrafficFeature from './ViralTrafficFeature'
import ViralTrafficTestimonials from './ViralTrafficTestimonials'

function ViralTraffic() {
    return (
        <div>
            <Navbar/>
            <ViralTrafficBanner/>
            <ViralTrafficFeature/>
            <ViralTrafficTestimonials/>
            <Footer/>
        </div>
    )
}

export default ViralTraffic
