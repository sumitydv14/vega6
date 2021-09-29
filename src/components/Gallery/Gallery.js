import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../Footer'
import Navbar from '../Navbar'
import GalleryBanner from './GalleryBanner'
import GalleryBox from './GalleryBox'
import GalleryContent from './GalleryContent'

function Gallery() {
    return (
        <div>
             <Helmet>
                <title>Vega6 | Gallery</title>
            </Helmet>

            <Navbar/>
            <GalleryBanner/>
            <GalleryBox />
            <GalleryContent/>
            <Footer/>
            
        </div>
    )
}

export default Gallery
