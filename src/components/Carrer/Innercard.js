import React from 'react'
import { Link } from 'react-router-dom'

function Innercard(props) {
    return (
                 
                    <div className="col-lg-4 col-md-6 mb-5 ">
                        <Link to="/carrerDetails">
                            <div className="opportunitites-box">
                            <div className="opport-head">
                                    <span><img src={props.num} alt="" className="img-fluid" /></span>
                                </div>
                                <div className="opport-para text-center mt-4">
                                    <h4>{props.name}</h4>
                                    <h6><span>{props.countary}</span> / {props.address}</h6>
                                </div>
                            </div>
                            </Link>
                    </div>
          
    )
}

export default Innercard
