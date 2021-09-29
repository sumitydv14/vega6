import React from 'react'
import softimg from '../images/softimg.png';
function SoftwareBanner() {
    return (
        <div>
            <>
                {/* software solution start  */}
                <section className="software-sec">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="software-heading text-center">
                                    <h2>The Complete And Advanced Software Solution</h2>
                                    <p>
                                        We provide the solutions that our customers need to sell and to
                                        give our partners the tools to create those solutions.
                                    </p>

                                    <a href="#">Learn More</a>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 mx-auto">
                                    <div className="softbanner-img d-flex justify-content-center">
                                        <img src={softimg} alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* software solution end */}
            </>

        </div>
    )
}

export default SoftwareBanner
