import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import VidneosBanner from './VidneosBanner'
import VidneosFeatures from './VidneosFeatures'
import VidneosTestimonials from './VidneosTestimonials'
import { Helmet } from 'react-helmet'

function Vidneos() {
    return (
        <div>
            <Helmet>
               <title>Vega6 | Vidneos</title>
           </Helmet>
            <Navbar/>
            <VidneosBanner/>
            <VidneosFeatures/>
            <VidneosTestimonials/>
            <Footer/>
        </div>
    )
}

export default Vidneos
