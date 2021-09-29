import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import AboutBanner from './AboutBanner'
import AboutPart from './AboutPart'
import { Helmet } from 'react-helmet'

function About() {
    return (
        <div>

                <Helmet>
                      <title>Vega6 | About Us</title>
                 </Helmet>
            
            <Navbar/>
            <AboutBanner/>
            <AboutPart/>
            <Footer/>
        </div>
    )
}

export default About
