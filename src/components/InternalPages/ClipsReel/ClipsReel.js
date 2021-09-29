import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import ClipsReelBanner from './ClipsReelBanner'
import ClipsReelFeature from './ClipsReelFeature'
import ClipsReelTestimonials from './ClipsReelTestimonials'
import { Helmet } from 'react-helmet'

function ClipsReel() {
    return (
        <div>

             <Helmet>
                <title>Vega6 | ClipsReel</title>
            </Helmet>
            
            <Navbar/>
            <ClipsReelBanner/>
            <ClipsReelFeature/>
            <ClipsReelTestimonials/>
            <Footer/>

        </div>
    )
}

export default ClipsReel
