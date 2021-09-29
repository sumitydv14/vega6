import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import WordPressNews from '../WordPress/WordPressNews'
import ShopifyBanner from './ShopifyBanner'

import ShopifyProdusts from './ShopifyProdusts'
import { Helmet } from 'react-helmet'

function ShopifyApps() {
    return (
        <div>

               <Helmet>
                <title>Vega6 | ShopifyApps</title>
            </Helmet>

            <Navbar/>
            <ShopifyBanner/>
            <ShopifyProdusts/>
           <WordPressNews/>
            <Footer/>
        </div>
    )
}

export default ShopifyApps
