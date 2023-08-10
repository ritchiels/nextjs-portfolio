'use client';

import { useState } from 'react'
import Image from 'next/image'
import ProfilePic from '../public/rich-prof.jpg'
import EmailModal from '@/components/EmailModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

const Home = () => {

    const [showEmailModal, setShowEmailModal] = useState(false);

    const toggleEmailModal = () => {
        setShowEmailModal(!showEmailModal);
    };

    return (
        <div className="main w-full h-screen flex justify-start items-center font-poppins">
            <div className="mb-40 flex items-center space-x-8">
                <Image
                    src={ProfilePic}
                    alt="Profile Image"
                    height={250}
                    width={250}
                    className="profile-image rounded-full fade-in-pic"
                />
                <div className="flex flex-col">
                    <h1 className="text-5xl font-semibold text-lapiz-lazuli fade-in-header">Ritchie Simmons</h1>
                    <p className="text-sm font-semibold font-comfortaa text-gray-600 mt-2 ml-2 mb-4 fade-in-text">
                        Full-stack web developer with a focus in React and MongoDB <br /> 📍 based in Florida, USA.
                    </p>
                    <div className="flex space-x-8 items-center text-lapiz-lazuli fade-in-socials">
                        <a href="https://github.com/ritchiels" className="socials">
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>
                        <a href="#" className="socials">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" onClick={toggleEmailModal} />
                        </a>
                        <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>
                        {showEmailModal && <EmailModal toggle={toggleEmailModal} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

    // empty div to help with spacing:

    // <div style={{ width: '5rem' }}></div>

    //framework icons to display:
    //html, css, javascript, react, nextjs, tailwind, mongodb
