import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import CourseReelBanner from './CourseReelBanner'
import CourseReelFeaturs from './CourseReelFeaturs'
import CourseReelTestimonials from './CourseReelTestimonials'

function CourseReel() {
    return (
        <div>
            <Navbar/>
            <CourseReelBanner/>
            <CourseReelFeaturs/>
            <CourseReelTestimonials/>
            <Footer/>
        </div>
    )
}

export default CourseReel
