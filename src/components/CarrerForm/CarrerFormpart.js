import React, { useState } from 'react'
import swal from 'sweetalert';

function CarrerFormpart() {

    const [user, setUser] = useState({

        fname: '',
        lname: '',
        email: '',
        phone: '',
        file: '',
    })



    const OnInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const formhander = (e) => {
        e.preventDefault();

        setUser(user);



        setUser({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            file: ''
        })

        console.warn("user data ", user);
        swal({
            title: "Data  Submited",
            text: `Thank you ${user.fname}  for Subscribe !`,
            icon: "success",
            button: "OK",
        });
    }

    return (
        <div>
            <section className="carrerfrom-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto col-md-11 col-12">
                            <div className="form-warpper">
                                <div className="row">
                                    <div className="col-md-6 p-0">
                                        <div className="jop-position">
                                            <h6>You are applying for </h6>
                                            <h3>android developer </h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6 p-0">
                                        <div className="job-details">
                                            <h5>Just one last thing</h5>
                                            <p>we require your basic details to proceed with the application. this information helps us evaluate your application.</p>
                                            <hr />

                                            <form onSubmit={(e) => formhander(e)} >

                                                <h4>Personal details</h4>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <small>first name</small>
                                                        <input type="text"
                                                            className="form-control"
                                                            placeholder="First name"
                                                            name="fname"
                                                            value={user.fname}
                                                            onChange={(e) => OnInputChange(e)}
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <small>last name</small>
                                                        <input type="text"
                                                            className="form-control"
                                                            placeholder="Last name"
                                                            name="lname"
                                                            value={user.lname}
                                                            onChange={(e) => OnInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <small>Email address</small>
                                                        <input type="email" className="form-control" placeholder="abc@example.com"
                                                            name="email"
                                                            value={user.email}
                                                            onChange={(e) => OnInputChange(e)}
                                                        ></input>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <small>Mobile Number</small>
                                                        <input type="text"
                                                            className="form-control" placeholder="111-222-333-90"
                                                            name="phone"
                                                            value={user.phone}
                                                            onChange={(e) => OnInputChange(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <small>Your resume</small>
                                                        <div> <input type="text" value={user.file} readonly /></div>
                                                        <input type="file"
                                                            class="form-control-file"
                                                            name="file"
                                                            value={user.file}
                                                            onChange={(e) => OnInputChange(e)}
                                                        />
                                                        <div className="customfiles"><a href="#">Choose a file </a></div>
                                                        <small>(file size should not be more than 2MB)</small>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <button type="submit"

                                                            className={
                                                                user.fname !== "",
                                                                user.lname !== "",
                                                                user.email !== "",
                                                                user.phone !== "",
                                                                user.file !== ""

                                                                    ? 'enable' : 'desable'

                                                            }

                                                        >finish</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CarrerFormpart
