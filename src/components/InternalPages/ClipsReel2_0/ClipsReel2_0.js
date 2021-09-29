import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import ClipsReel2_0Banner from './ClipsReel2_0Banner'
import ClipsReel2_0Features from './ClipsReel2_0Features'
import ClipsReel2_0Testimonials from './ClipsReel2_0Testimonials'
import { Helmet } from 'react-helmet'

function ClipsReel2_0() {
    return (
        <div>
               
               <Helmet>
                   <title>Vega6 | ClipsReel 2.0</title>
               </Helmet>

            <Navbar/>
            <ClipsReel2_0Banner/>
            <ClipsReel2_0Features/>
            <ClipsReel2_0Testimonials/>
            <Footer/>
        </div>
    )
}

export default ClipsReel2_0
