import React from 'react'
import Image from 'next/image'
import FrontEnd from '../../img/frontendcertif.png'
import FullStack from '../../img/fullstackcertif.png'
import Bootstrap from '../../img/Bootstrap_Course_Completion.png'
import ReactPic from '../../img/React_Course_Completion.png'
import ReactNativePic from '../../img/React_Native_Course_Completion.png'
import BackEnd from '../../img/Node_Express_MongoDB_Course_Completion.png'
import Workspace from '../../img/workspace-addons.png'



const Accolades = () => {
    return (
        <div className="accolades-container justify-center">
            <div className="card-group mb-20">
                <div className="little-card">
                    <Image src={Bootstrap} alt="Bootstrap Badge" />
                </div>
                <div className="little-card">
                    <Image src={ReactPic} alt="React Badge" />
                </div>
                <div className="little-card">
                    <Image src={ReactNativePic} alt="React Native Badge" />
                </div>
                <div className="little-card">
                    <Image src={BackEnd} alt="Back End Badge" />
                </div>
                <div className="big-card card">
                    <Image src={FrontEnd} alt="Front End Cert" />
                </div>
                <div className="big-card card">
                    <Image src={FullStack} alt="Full Stack Cert" />
                </div>
            </div>
        </div>
    )
}

export default Accolades