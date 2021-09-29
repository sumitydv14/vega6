import React from 'react'
import knifefork from '../images/knife&fork.png';
import gift from '../images/gift.png';
import halfheart from '../images/half-heart.png';
import clock from '../images/clock.png' 

import health from '../images/health.png';
import fun from '../images/fun.png';
import strength from '../images/Strength.png';
import idea from '../images/Idea.png'

function GalleryContent() {
    return (
         <section className="gallerycontent-sec">
             <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="content-wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="gallerycontent-box  px-lg-5 px-md-3 ">
                                    <h2>What’s it like working at Vega6?</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="gallerycontent-para">
                                    <h5>Self-improvement is the root of innovation. We constantly work hard to stay one step ahead, so keeping our team inspired and motivated is at the core of how we operate.</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-10 col-md-12 mx-auto">
                        <div className="gallerycontent-item mt-5">
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <div className="item-content d-flex ">
                                        <div className="item-icon">
                                            <img src={idea} alt="" className="img-fluid"/> 
                                        </div>
                                        <div className="item-para ">
                                            <h3>Big ideas come from big appetites.</h3>
                                            <p>We firmly believe that appetite for work begins with the gut. Never run out of fuel with our stacked pantry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                     <div className="item-content d-flex ">
                                        <div className="item-icon">
                                            <img src={health} alt="" className="img-fluid"/> 
                                        </div>
                                        <div className="item-para">
                                            <h3>Breakthroughs, not burnouts.</h3>
                                            <p>Your wellbeing comes first at Vega6. Recharge and rest worry-free with our paid sick leaves.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <div className="item-content d-flex ">
                                        <div className="item-icon">
                                            <img src={strength} alt="" className="img-fluid"/> 
                                        </div>
                                        <div className="item-para ">
                                            <h3>Strength in diversity.</h3>
                                            <p>Regardless of geography or backgrounds, we strive hard to build a community of individuals who can rely on each other.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                     <div className="item-content d-flex ">
                                        <div className="item-icon">
                                            <img src={fun} alt="" className="img-fluid"/> 
                                        </div>
                                        <div className="item-para ">
                                            <h3>We take your fun seriously. </h3>
                                            <p>Happy people are inspired people. We’re always brewing routine-breakers and open forums to shake things up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
             </div>
         </section>
    )
}

export default GalleryContent
