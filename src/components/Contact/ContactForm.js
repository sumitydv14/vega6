import React, { useState } from 'react'
import swal from 'sweetalert';

function ContactForm() {
   
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');

     
const contectSubmit = (e) => {
    e.preventDefault();

    const contactData = {
        name:name,
        email:email,
        message:message,
    }

    console.warn(contactData);

    setName('')
    setEmail('')
    setMessage('')
    swal({
        title: "Data Submited",
        text: ` ${name} Thank you for Fill the data !`,
        icon: "success",
        button: "OK",
      });


}
  




    return (
        <div>
            <section className="contactform-sec">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="contact-form mt-5">
                                <h5>Contact Form</h5>
                                <form className="mt-4" onSubmit={(e) =>contectSubmit(e)} >
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your name"
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                   value={message}
                                                    rows={15}
                                                    name="message"
                                                    placeholder="Message"
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4 ">
                                        <div className="col d-flex justify-content-end">
                                            <button type="submit" className={` btn-change6  ${
                                               name!==''&&
                                               email!==''&&
                                               message!==''
                                                ?'enabled':'disabled'
                                                } `} 

                                                disabled={
                                                    name!==''&&
                                                    email!==''&&
                                                    message!==''
                                                    ?false:true
                                                }
                                                
                                                
                                                >Submit</button>
                                             
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactForm
