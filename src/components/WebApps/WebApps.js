import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import WordPressNews from '../WordPress/WordPressNews'
import WebAppsBanner from './WebAppsBanner'
import { Helmet } from 'react-helmet'
import WebAppsProduct from './WebAppsProduct'

function WebApps() {
    return (
        <div>
               <Helmet>
                <title>Vega6 | WebApps</title>
            </Helmet>
            <Navbar/>
            <WebAppsBanner/>
            <WebAppsProduct/>
            <WordPressNews/>
            <Footer/>
        </div>
    )
}

export default WebApps
