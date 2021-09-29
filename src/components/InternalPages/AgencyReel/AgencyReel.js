import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import AgencyReelBanner from './AgencyReelBanner'
import AgencyReelFeature from './AgencyReelFeature'
import AgencyReelTestimonals from './AgencyReelTestimonals'
import { Helmet } from 'react-helmet'

function AgencyReel() {
    return (
        <div>
               <Helmet>
                <title>Vega6 | AgencyReel</title>
            </Helmet>
            <Navbar/>
            <AgencyReelBanner/>
            <AgencyReelFeature/>
            <AgencyReelTestimonals/>
            <Footer/>
        </div>
    )
}

export default AgencyReel
