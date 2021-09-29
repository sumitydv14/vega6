import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import WordPressBanner from './WordPressBanner'
import WordPressNews from './WordPressNews'
import WordPressProduct from './WordPressProduct'
import { Helmet } from 'react-helmet'

function WordPress() {
    return (
        <div>
               <Helmet>
                <title>Vega6 | WordPress</title>
               </Helmet>
            <Navbar/>
            <WordPressBanner/>
            <WordPressProduct/>
            <WordPressNews/>
            <Footer/>
        </div>
    )
}

export default WordPress
