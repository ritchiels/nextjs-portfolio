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
            <div className="card-group">
                <div className="little-card">
                    <Image src={Bootstrap} alt="Bootstrap" />
                </div>
                <div className="big-card card">
                    <Image src={FrontEnd} alt="Front End Cert" />
                </div>
                <div className="little-card card">

                </div>
                <div className="little-card card">

                </div>
                <div className="big-card card">
                    <Image src={FullStack} alt="Full Stack Cert" />
                </div>
                <div className="little-card card">

                </div>
            </div>
        </div>
    )
}

export default Accolades

    // <>
    //     <div className="flex flex-col items-center space-x-10">
    //         <p className="text-gray-700 text-center font-comfortaa font-bold text-xl mt-20 mb-10">Nucamp 6-Month Full-Stack Bootcamp Certifications</p>
    //         <div className="grid grid-cols-2 items-center gap-20">
    //             <Image src={FrontEnd} alt="Front End Cert" className="flex flex-col" height={400} width={400} />
    //             <Image src={FullStack} alt="Full Stack Cert" height={400} width={400} />
    //         </div>
    //         <div className="grid grid-cols-2 items-center gap-6 mb-20 mt-20 ">
    //             <Image src={Bootstrap} alt="Bootstrap Cert" height={200} width={200} />
    //             <Image src={ReactPic} alt="React Cert" height={200} width={200} />
    //             <Image src={ReactNativePic} alt="Native Cert" height={200} width={200} />
    //             <Image src={BackEnd} alt="Backend Cert" height={200} width={200} />
    //         </div>
    //     </div>
    //     <div className="flex flex-col justify-center">
    //         <p className="text-gray-700 text-center font-comfortaa font-bold text-xl mt-20 mb-10">Google Skills Boost Badges</p>
    //         <hr width="50%" className="m-auto" />
    //         <a href="https://www.cloudskillsboost.google/public_profiles/55f3847a-9862-424c-a8dc-3ac5ce58a1ba" for="skillsboost">
    //             <Image src={Workspace} alt="Workspace" className="m-auto mt-4 mb-40" height={300} width={300} />
    //         </a>
    //     </div>
    // </>