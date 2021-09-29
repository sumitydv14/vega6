import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import SoftwareBanner from './SoftwareBanner'
import SoftwareProduct from './SoftwareProduct'
import { Helmet } from 'react-helmet'
function Software() {
    return (
        <div>
              
              <Helmet>
                <title>Vega6 | Software</title>
              </Helmet>

            <Navbar/>
            <SoftwareBanner/>
            <SoftwareProduct/>
            <Footer/>
        </div>
    )
}

export default Software
