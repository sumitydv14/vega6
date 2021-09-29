import React from 'react'

function CarrerRecurament() {
    return (
        <div>
            <section className="recurament-sec"> 
                 <div className="container">
                      <div className="row">
                           <div className="col-md-12">
                               <div className="carrer-heading text-center ">
                                  <h1>Learn Our Recruitment <span>Process</span></h1>
                                  <span className="linebar"></span>
                               </div>
                           </div>
                      </div>

                     <div className="row mt-5 d-flex  justify-content-center  ">
                         <div className="col-lg-3 col-md-5 d-flex flex-fill col-sm-6 col-12">
                             <div className="recuriment-card">
                                   <div className="recuriment-icon d-flex justify-content-between mt-2">
                                       <span ><i class="fas fa-2x fa-file"></i></span>
                                       <span style={{fontSize:'20px' }} >1</span>
                                   </div>
                                   <div className="recuriment-head mt-4">
                                       <h5>CV Submission</h5>
                                       <p>Submit your resume through our online portal after reading the job description.</p>
                                   </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-5 d-flex flex-fill col-sm-6 col-12">
                             <div className="recuriment-card">
                                   <div className="recuriment-icon d-flex justify-content-between mt-2">
                                       <span ><i class="fas fa-2x fa-phone-volume"></i></span>
                                       <span style={{fontSize:'20px' }} >2</span>
                                   </div>
                                   <div className="recuriment-head mt-4">
                                       <h5>Phone Screening</h5>
                                       <p>If you pass our CV evaluation, you will be invited for a telephone interview at a time of your choosing.</p>
                                   </div>
                             </div>
                         </div>

                         <div className="col-lg-3 col-md-5 d-flex flex-fill col-sm-6 col-12">
                             <div className="recuriment-card">
                                   <div className="recuriment-icon d-flex justify-content-between mt-2">
                                       <span ><i class="fas fa-2x fa-laptop-code"></i></span>
                                       <span style={{fontSize:'20px' }} >3</span>
                                   </div>
                                   <div className="recuriment-head mt-4">
                                       <h5>Skill Assessment </h5>
                                       <p>You will be invited to our head office for a skill and knowledge assessment.</p>
                                   </div>
                             </div>
                         </div>

                         <div className="col-lg-3 col-md-5 d-flex flex-fill col-sm-6 col-12">
                             <div className="recuriment-card">
                                   <div className="recuriment-icon d-flex justify-content-between mt-2">
                                       <span ><i class="fas fa-2x fa-users"></i></span>
                                       <span style={{fontSize:'20px' }} >4</span>
                                   </div>
                                   <div className="recuriment-head mt-4">
                                       <h5>Final Interview</h5>
                                       <p>If you pass all previous stages, we will invite you for a final interview.</p>
                                   </div>
                             </div>
                         </div>
                     </div>

                 </div>
            </section>
        </div>
    )
}

export default CarrerRecurament
