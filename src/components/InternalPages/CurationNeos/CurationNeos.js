import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import CurationNeosBanner from './CurationNeosBanner';
import CurationNeosFeatures from './CurationNeosFeatures';
import CurationNeosTestimonials from './CurationNeosTestimonials';
import { Helmet } from 'react-helmet'

function CurationNeos() {
    return (
        <div>

           <Helmet>
               <title>Vega6 | CurationNeos</title>
           </Helmet>

            <Navbar/>
            <CurationNeosBanner/>
            <CurationNeosFeatures/>
            {/* <CurationNeosTestimonials/> */}
            <Footer/>
        </div>
    )
}

export default CurationNeos;
