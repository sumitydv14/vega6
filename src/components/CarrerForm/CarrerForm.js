import React from 'react'
import CarrerDetailsBanner from '../CarrerDetails/CarrerDetailsBanner'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CarrerFormpart from './CarrerFormpart'

function CarrerForm() {
    return (
        <div>
            <Navbar/>
            <CarrerDetailsBanner/>
            <CarrerFormpart/>
            <Footer/>
        </div>
    )
}

export default CarrerForm
