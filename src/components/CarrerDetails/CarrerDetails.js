import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CarrerDetailsBanner from './CarrerDetailsBanner'
import CarrerDetailsForm from './CarrerDetailsForm'
import { Helmet } from 'react-helmet'
import {useLocation} from "react-router-dom"
import queryString from "query-string"


function CarrerDetails({location}) {

    // const location = useLocation();

    const type = queryString.parse(location.search).type;
    console.log(type);

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
