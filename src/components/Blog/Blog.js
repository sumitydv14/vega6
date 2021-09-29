import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import BlogBanner from './BlogBanner'
import { Helmet } from 'react-helmet'

function Blog() {
    return (
        <div>
             <Helmet>
                      <title>Vega6 | Blog</title>
                 </Helmet>
            <Navbar/>
            <BlogBanner/>
            <Footer/>
            
        </div>
    )
}

export default Blog
