import React from 'react'

function Wordcard(props) {
    return (
       
             <div className="col-lg-4 col-md-6  col-sm-6 col-12  mb-5">
                <div className="product-cards">
                    <div className="row">
                        <div className="col-6">
                            <div className="product-card-img">
                                <img src={props.porductsimg} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-6 pl-0 customsizecontent  d-flex align-items-center text-left">
                            <div className="product-card-content">
                                <h4>{props.productsname}</h4>
                                <p className="m-0" >{props.productpara}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    )
}

export default Wordcard
