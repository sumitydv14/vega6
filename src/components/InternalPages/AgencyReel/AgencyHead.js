import React from 'react'

function AgencyHead(props) {
    return (
        <div className="row">
        <div className="col-md-12">
            <div className="topfeatures-heading text-center">
                <h2>{props.headname}</h2>
            </div>
        </div>
    </div>
    )
}

export default AgencyHead
