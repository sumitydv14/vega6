import React from 'react'
import { Link } from 'react-router-dom'

function HomeBlogCard(props) {
    return (
    
             <div className="col-lg-4  col-md-8 mx-auto d-flex justify-content-center ">
                            <div className="blog-card">
                                <div className="card">
                                    <div className="card-img-body">
                                        <img
                                            className="img-fluid"
                                            src={props.blogimg}
                                            alt="Blog image"
                                        />
                                    </div>
                                    <div className="card-body-blog">
                                        <h6 className>
                                            <span>
                                                <i className="fas fa-calendar-alt mr-2" />
                                            </span>
                                            {props.blogdate}
                                        </h6>
                                        <h5>
                                            {props.blogname}
                                        </h5>
                                        <p className="card-text">
                                            {props.blogpara}
                                        </p>
                                        <Link to="/blog">
                                            {props.blogbtn}
                                            <span className="ml-3">
                                                <img src={props.blogicon}  alt="" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
     
    )
}

export default HomeBlogCard
