import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CarrerDetailsBanner from './CarrerDetailsBanner'
import CarrerDetailsForm from './CarrerDetailsForm'
import { Helmet } from 'react-helmet'

function CarrerDetails() {
    return (
        <div>
             
             <Helmet>
                 <title>Vega6 | CarrerDetails</title>
             </Helmet>

             <Navbar/>
             <CarrerDetailsBanner/>
             <CarrerDetailsForm/>
             <Footer/>
        </div>
    )
}

export default CarrerDetails
