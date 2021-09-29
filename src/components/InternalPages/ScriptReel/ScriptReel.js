import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import ScriptReelBanner from './ScriptReelBanner'
import ScriptReelFeatures from './ScriptReelFeatures'
import ScriptReelTestimonials from './ScriptReelTestimonials'
import { Helmet } from 'react-helmet'

function ScriptReel() {
    return (
        <div>

            <Helmet>
               <title>Vega6 | ScriptReel</title>
           </Helmet>

            <Navbar/>
            <ScriptReelBanner/>
            <ScriptReelFeatures/>
            <ScriptReelTestimonials/>
            <Footer/>
        </div>
    )
}

export default ScriptReel
