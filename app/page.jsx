import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/rich-prof.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

const Home = () => {
  return (
    <>
        <div className="main w-full h-screen flex justify-start items-center font-poppins">
            <div className="mb-40 flex items-center space-x-8">
                <Image
                    src={ProfilePic}
                    alt="Profile Image"
                    height={250}
                    width={250}
                    className="profile-image rounded-full fade-in-pic"
                />
                <div className="flex flex-col mb-10">
                    <h1 className="text-5xl font-semibold text-lapiz-lazuli fade-in-header">Ritchie Simmons</h1>
                    <p className="text-sm font-semibold font-comfortaa text-gray-600 mt-2 ml-2 fade-in-text">
                        Full-Stack web developer with a focus in React & MongoDB.
                    </p>
                </div>
                <div className="fade-in-socials text-lapiz-lazuli space-x-4">
                    <a href="https://github.com/ritchiels" className="socials">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="mailto:ritchie.simmons@gmail.com" className="socials">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home

