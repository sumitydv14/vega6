import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import HomeBanner from './HomeBanner'
import HomeBlog from './HomeBlog'
import HomeBulding from './HomeBulding'
import HomeProduct from './HomeProduct'
import HomeResent from './HomeResent'
import HomeUpcoming from './HomeUpcoming'
import { Helmet } from 'react-helmet'

function Home() {
    return (
        <div>

                <Helmet>
                <title>Vega6 | Home</title>
                </Helmet>

            <Navbar/>
            <HomeBanner/>
            <HomeBulding/>
            <HomeUpcoming/>
            <HomeResent/>
            <HomeBlog/>
            <HomeProduct/>
            <Footer/>
        </div>
    )
}

export default Home
