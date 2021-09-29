import React from 'react'

import Innercard from './Innercard';
import Mobileapp from '../images/Mobile app.png';
import phpicon from '../images/php icon.png';
import reacticon from '../images/react icon.png';
import Customersupport from '../images/Customer support.png'
import UIIX from '../images/UI IX.png';
import testingicon from '../images/testing icon.png';

function CarrerJobCard() {
    return (
        <div>
            <section className="opportunities">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="opportunitites-heading text-center">
                                <h2>Career Opportunities</h2>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <Innercard num={phpicon} name="PHP Developer" countary="India" address="Noida" />
                        <Innercard num={reacticon} name="REACT Developer" countary="India" address="Noida"/>
                        <Innercard num={Mobileapp} name="Mobile Application Developer" countary="India"  address="Noida" />
                        <Innercard num={UIIX} name="UI/UX Designer" countary="India"  address="Noida"/>
                        <Innercard num={Customersupport} name="Technical Customer Support" countary="India"  address="Noida"/>
                        <Innercard num={testingicon} name="Software Tester" countary="India"  address="Noida"/>
                    </div>
               </div>
            </section>
  
        </div>
    )
}

export default CarrerJobCard;
