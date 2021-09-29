import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import SonorityBanner from './SonorityBanner'
import SonorityFeatures from './SonorityFeatures'
import SonorityTestimonials from './SonorityTestimonials'
import { Helmet } from 'react-helmet'

function Sonority() {
    return (
        <div>

            <Helmet>
               <title>Vega6 | Sonority</title>
           </Helmet>

            <Navbar/>
            <SonorityBanner/>
            <SonorityFeatures/>
            <SonorityTestimonials/>
            <Footer/>
        </div>
    )
}

export default Sonority
