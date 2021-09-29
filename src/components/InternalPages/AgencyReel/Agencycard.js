import React from 'react'

function Agencycard(props) {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="features-img">
                    <img src={props.agencyimg} alt className="img-fluid" />
                </div>
            </div>
            <div className="col-md-8 d-flex align-items-center">
                <div className="features-content">
                    <h4>{props.agencycontent}</h4>
                    <p>{props.agencypara}</p>
                </div>
            </div>
        </div>
    )
}

export default Agencycard
