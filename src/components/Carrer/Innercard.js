import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Innercard(props) {

//     const history = useHistory();

//    const carrerDetails = (e) =>{
//     history.push("/carrerDetails?type="+e)
//    }

    return (
                 
                    <div className="col-lg-4 col-md-6 mb-5 ">
                        <Link to={`/carrerDetails#${props.name.replaceAll(" ","-").toLowerCase()}`}>
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

export default Innercard;
