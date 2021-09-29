import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import VidCuratorFXBanner from './VidCuratorFXBanner'

import VidCuratorFXFeatures from './VidCuratorFXFeatures'
import VidCuratorFXTestimonials from './VidCuratorFXTestimonials'
import { Helmet } from 'react-helmet'

function VidCuratorFX() {
    return (
        <div>
            <Helmet>
               <title>Vega6 | VidCuratorFX</title>
           </Helmet>
            <Navbar/>
            <VidCuratorFXBanner/>
            <VidCuratorFXFeatures/>
            <VidCuratorFXTestimonials/>
            <Footer/>
        </div>
    )
}

export default VidCuratorFX
