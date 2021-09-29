import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import { Helmet } from 'react-helmet'

function Contact() {
    return (
        <div>

            <Helmet>
                <title>Vega6 | Contact</title>
            </Helmet>
            

            <Navbar/>
            <ContactMap/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contact
