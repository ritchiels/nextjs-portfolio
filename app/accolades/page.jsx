import React from 'react'
import Image from 'next/image'
import FrontEnd from '../../img/frontendcertif.png'
import FullStack from '../../img/fullstackcertif.png'


const Accolades = () => {
  return (
    <>
    <div className="grid grid-cols-2 justify-center">
        <p className="text-gray-700 text-center">Nucamp Full-Stack Bootcamp Certifications</p>
        <Image src={FrontEnd} alt="Front End Cert" height={400} width={400} />
        <Image src={FullStack} alt="Full Stack Cert" height={400} width={400} />
    </div>
    </>
  )
}

export default Accolades