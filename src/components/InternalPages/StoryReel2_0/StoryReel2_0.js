import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import StoryReel2_0Banner from './StoryReel2_0Banner'
import StoryReel2_0Features from './StoryReel2_0Features'
import StoryReel2_0Testimonials from './StoryReel2_0Testimonials'
import { Helmet } from 'react-helmet'

function StoryReel2_0() {
    return (
        <div>

            <Helmet>
               <title>Vega6 | StoryReel 2.0</title>
           </Helmet>

            <Navbar/>
            <StoryReel2_0Banner/>
            <StoryReel2_0Features/>
            <StoryReel2_0Testimonials/>
            <Footer/>
        </div>
    )
}

export default StoryReel2_0
