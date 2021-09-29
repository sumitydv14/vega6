import React from 'react'
import CountUp from 'react-countup';

function CarrerCounter() {

    const onComplete = () => {
        console.log('Completed! 👏');
      };
      
      const onStart = () => {
        console.log('Started! 💨');
      };

      const reset = () =>{
           console.log('Resetted');
      }

    return (
        <div>
            <section  className="counter-sec">
              <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-12">
                        <div className="counter-up text-center text-white ">
                            <p className="counter-count m-0">
                              <CountUp  start={0} end={25} duration={4}/>+
                            </p>
                            <h3>Team Member</h3>
                        </div>
                   </div>
                    <div className="col-lg-3 col-12">
                        <div className="counter-up text-center text-white ">
                            <p className="counter-count m-0">
                               <CountUp start={0} end={85} duration={4}   />+
                            </p>
                            <h3>Products</h3>
                        </div>
                   </div>
                    <div className="col-lg-3 col-12">
                        <div className="counter-up text-center text-white ">
                            <p className="counter-count m-0">
                              <CountUp start={0} end={250} duration={4}/>+
                            </p>
                            <h3>Like</h3>
                        </div>
                   </div>
                    <div className="col-lg-3 col-12">
                        <div className="counter-up text-center text-white ">
                            <p className="counter-count m-0">
                              <CountUp start={0} end={350} duration={4} />+
                            </p>
                            <h3>user</h3>
                        </div>
                   </div>
               </div>
               </div>
            </section>
        </div>
    )
}

export default CarrerCounter
