import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import TrafficFreshBanner from './TrafficFreshBanner'
import TrafficFreshFeatures from './TrafficFreshFeatures'
import TrafficFreshTestimonials from './TrafficFreshTestimonials'
import { Helmet } from 'react-helmet'

function TrafficFresh() {
    return (
        <div>
           <Helmet>
               <title>Vega6 | TrafficFresh</title>
           </Helmet>
            <Navbar/>
            <TrafficFreshBanner/>
            <TrafficFreshFeatures/>
            <TrafficFreshTestimonials/>
            <Footer/> 
        </div>
    )
}

export default TrafficFresh
