import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/rich-prof.jpg'

const Home = () => {
  return (
    <div className="main w-full h-screen flex justify-start items-center font-poppins">
        <div className="mb-60 mr-60 flex items-center space-x-8">
            <Image
                src={ProfilePic}
                alt="Profile Image"
                className="profile-image rounded-full"
            />
            <div className="flex flex-col mb-10">
                <h1 className="text-5xl font-semibold text-gray-800">Ritchie Simmons</h1>
                <p className="text-sm font-comfortaa text-gray-600 mt-2">
                    Full-Stack web developer with a focus in React & MongoDB.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home