import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import AgencyReel2_0Banner from './AgencyReel2_0Banner'
import AgencyReel2_0Features from './AgencyReel2_0Features'
import AgencyReel2_0Testimonials from './AgencyReel2_0Testimonials'
import { Helmet } from 'react-helmet'

function AgencyReel2_0() {
    return (
        <div>

               <Helmet>
                <title>Vega6 | AgencyReel 2.0</title>
               </Helmet>

            <Navbar/>
            <AgencyReel2_0Banner/>
            <AgencyReel2_0Features/>
            <AgencyReel2_0Testimonials/>
            <Footer/>
        </div>
    )
}

export default AgencyReel2_0
