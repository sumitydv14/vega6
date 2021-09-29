import React,{useState} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import swal from 'sweetalert';

function WordPressNews() {

    const [name , setName] = useState();
    const [email , setEmail ] = useState();
  
 


    const  newsHandlar = (e) => {
          e.preventDefault();
            const newsdata = {
                name :name,
                email:email,
            }
          console.warn(newsdata);  
          setName('');
          setEmail('');
          swal({
            title: "Data  Submited",
            text: `Thank you ${newsdata.name}  for Subscribe !`,
            icon: "success",
            button: "OK",
          });
    }

    return (
        <div>
            <>
                {/* wordpress newsletter section start */}
                <section className="newsletter-sec  text-white ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sign-content  text-center  mt-5">
                                    <h4>SIGN UP TO OUR <span>NEWSLETTER</span></h4>
                                    <p>
                                        Subscribe to our newsletter just by entering the name and email
                                        below.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-10 col-md-12 mx-auto">
                             
                                <div className="input-part">
                           <form   onSubmit={ (e) => { newsHandlar(e)}} >
                                <div className="row mt-4">
                            <div className="col-lg-5">
                                <div className="newsletter-secs mb-4">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="newsletter-secs mb-4">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            placeholder="Enter Email"
                                            name="email"
                                            value={email}
                                            className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-2 p-lg-0 d-flex mb-4  align-items-center ">
                                <div className="submit-btn-news text-white">
                                    <button type="submit" >
                                        SUBMIT NOW
                                    </button>
                                </div>
                            </div>
                          </div> 
                                </form>
                                </div>
                            </div>
                        </div>


                      
                    </div>
                </section>
                {/*wordpress newsletter section end  */}

                <SweetAlert
                    title="Here's a message!"
                   
                    show={false}
                    btnSize="sm"
                  />
            </>

        </div>
    )
}

export default WordPressNews
    
