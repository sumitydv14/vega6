import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CarrerBanner from './CarrerBanner'
import CarrerJobCard from './CarrerJobCard'
import { Helmet } from 'react-helmet'

import CarrerRecurament from './CarrerRecurament'

function Carrer() {
    return (
        <div>

            <Helmet>
                <title>Vega6 | Carrer </title>
            </Helmet>

            <Navbar/>
           <CarrerBanner/>
           <CarrerJobCard/>
      
           <CarrerRecurament/>
           <Footer/> 
        </div>
    )
}

export default Carrer
