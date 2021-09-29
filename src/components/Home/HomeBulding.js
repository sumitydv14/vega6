import React from 'react'

function HomeBulding() {
    return (
        <div>
            <>
                {/* Building solution start  */}
                <section className="building-sec">
                    <div className="container">
                        <div className="row  mx-auto">
                            <div className="col-lg-4 d-flex align-items-center ">
                                <div className="building-box">
                                    <h6>We Help With</h6>
                                    <h1>Building better solutions</h1>
                                    <a href="#">
                                        View All Products{" "}
                                        <span>
                                            <i className="fas fa-long-arrow-alt-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row d-flex flex-fill ">
                                    <div className="col-md-6  d-flex flex-fill ">
                                        <div className="buildcard text-white active">
                                            <h6>
                                                <i className="fas fa-cog" />
                                            </h6>
                                            <h5>Software</h5>
                                            <p>
                                                We design the best-in-class, cross platform, desktop based
                                                softwares to empower all your business needs.
                                            </p>
                                            <a href="#">
                                                Read More{" "}
                                                <span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex flex-fill ">
                                        <div className="buildcard text-white">
                                            <h6>
                                                <i className="fab fa-wordpress" />
                                            </h6>
                                            <h5>WordPress</h5>
                                            <p>
                                                We provide a wide range of WordPress plugins which are easy to
                                                use, beautifully coded to the highest WordPress standards.
                                            </p>
                                            <a href="#">
                                                Read More{" "}
                                                <span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 d-flex flex-fill">
                                    <div className="col-md-6 d-flex flex-fill ">
                                        <div className="buildcard text-white">
                                            <h6>
                                                <i className="fas fa-cloud" />
                                            </h6>
                                            <h5>WebApps</h5>
                                            <p>
                                                We develop cloud based SAAS apps that are a perfect
                                                combination of technology and creativity.
                                            </p>
                                            <a href="#">
                                                Read More{" "}
                                                <span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex flex-fill ">
                                        <div className="buildcard text-white">
                                            <h6>
                                                <i className="fab fa-shopify" />
                                            </h6>
                                            <h5>Shopify</h5>
                                            <p>
                                                We provide top notch apps for the Shoppify market place to
                                                cater all your ecom needs under one roof.
                                            </p>
                                            <a href="#">
                                                Read More{" "}
                                                <span>
                                                    <i className="fas fa-long-arrow-alt-right" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Building solution end  */}
            </>

        </div>
    )
}

export default HomeBulding
