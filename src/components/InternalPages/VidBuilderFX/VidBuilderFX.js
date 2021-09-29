import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import VidBuilderFXBanner from './VidBuilderFXBanner'
import VidBuilderFXFetures from './VidBuilderFXFetures'
import VidBuilderFXTestimonials from './VidBuilderFXTestimonials'
import { Helmet } from 'react-helmet'

function VidBuilderFX() {
    return (
        <div>
            <Helmet>
               <title>Vega6 | VidBuilderFX</title>
           </Helmet>
            <Navbar/> 
            <VidBuilderFXBanner/>
            <VidBuilderFXFetures/>
            <VidBuilderFXTestimonials/>
            <Footer/>
        </div>
    )
}

export default VidBuilderFX
