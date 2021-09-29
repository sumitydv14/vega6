import React from 'react'
import vicon from '../images/vicon.png';
import ag2 from '../images/ag2.png';
import macbook from '../images/Macbook Pro 16.png';

function HomeResent() {
    return (
        <div>
            <>
                {/* sec-4 start  */}
                <section className="sec-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-4-heading text-center">
                                    <img src={vicon} alt className="img-fluid" />
                                    <h2 className="mt-2 mb-0">
                                        Our Recent <span>Product</span>
                                    </h2>
                                    <span className="bottomline" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-5 d-flex align-items-center">
                                <div className="sec-4-content">
                                    <img src={ag2} alt className="img-fluid" />
                                    <p className="mt-4">
                                        Our already-powerful digital marketing agency app just got even
                                        better with viral content and video maker, along with full Agency
                                        Rights added in.
                                    </p>
                                    <div className="get-more-btn mt-4">
                                        <a href="#" className="btn-change6">
                                            Get More Info{" "}
                                            <span>
                                                <i className="fas text-white fa-long-arrow-alt-right" />
                                            </span>{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="sec-4-img">
                                    <img src={macbook} className="img-fluid" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sec-4 end */}
            </>

        </div>
    )
}

export default HomeResent
