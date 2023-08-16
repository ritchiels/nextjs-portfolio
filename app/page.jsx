'use client';

import { useEffect, useState, useRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Toast, ToastHeader, ToastBody } from 'reactstrap';
import Image from 'next/image'
import ProfilePic from '../public/rich-prof.jpg'
import EmailModal from '@/components/EmailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import emailjs from '@emailjs/browser'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notebook from '../img/notebook_S.png'
config.autoAddCss = false



const Home = () => {
    // state
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    // email logic
    const toggleEmailModal = () => {
        console.log('toggling email modal');
        setShowEmailModal(!showEmailModal);
    };

    const toggleToast = () => {
        setShowToast(!showToast);
    }

    const form = useRef();

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                toggleToast();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showToast])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_4s88vzf',
            'template_8ojz16j',
            form.current,
            'PKTpMx9_Hrr5oH_Ct'
        )
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });

        toggleToast();
        toggleEmailModal();
    };
    //calendar logic

    return (
        <div className="main flex flex-col justify-center items-center font-poppins overflow-y-auto">
            {/* profile */}
            <div className="grid grid-col md:flex items-center md:space-x-8 lg:pr-20">
                <div className="flex flex-col">
                    <Image
                        src={ProfilePic}
                        alt="Profile Image"
                        height={250}
                        width={250}
                        className="profile-image m-auto rounded-full fade-in-pic"
                    />
                    <div className="hidden md:flex md:flex-col tech-stack">
                        <p className="text-lg text-center font-bold font-comfortaa text-gray-500 mt-10 mb-4 fade-in-text">
                            Techs I enjoy using:
                        </p>
                        <div className="flex space-x-6 justify-center fade-in-socials">
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" for="html">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" for="css">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" for="javascript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://tailwindcss.com/docs/installation" for="tailwind">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="stack-icons" />
                            </a>
                        </div>
                        <div className="flex space-x-6 mt-2 justify-center fade-in-socials">
                            <a href="https://react.dev/" for="react">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://nextjs.org/docs" for="nextjs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="stack-icons"/>
                            </a>
                            <a href="https://nodejs.org/en/docs" for="nodejs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://www.mongodb.com/docs/" for="mongodb">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="stack-icons" />
                            </a>
                        </div>
                        <div className="flex space-x-6 mt-2 justify-center fade-in-socials">
                            <a href="https://mui.com/material-ui/getting-started/" for="mui">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://cloud.google.com/docs" for="cloud">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="stack-icons"/>
                            </a>
                            <a href="https://www.figma.com/developers" for="figma">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="stack-icons"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-5xl font-semibold m-auto mt-4 text-lapiz-lazuli fade-in-header">Ritchie Simmons</h1>
                    <p className="text-lg md:text-sm text-center font-bold font-comfortaa text-gray-500 mt-4 ml-2 mb-4 fade-in-text">
                        Full-stack React developer
                    </p>
                    <p className="text-md md:text-sm text-center font-semibold font-comfortaa text-gray-500 mt-4 ml-2 mb-4 fade-in-text">
                        📍 Florida, USA.
                    </p>
                    <div className="flex space-x-16 md:space-x-14 items-center m-auto mt-2 mb-4 text-lapiz-lazuli fade-in-socials">
                        <a href="https://github.com/ritchiels" className="socials">
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>
                        <button className="socials" onClick={toggleEmailModal}>
                            <FontAwesomeIcon icon={faEnvelope} size="xl" />
                        </button>
                        <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>
                        {showEmailModal && <EmailModal toggle={toggleEmailModal} />}
                    </div>
                    <hr className="fade-in-socials"/>
                    <div className="flex flex-col items-center">
                        <a href="/projects" className="fade-in-socials">
                            <Image src={Notebook} alt="projects" height={175} width={175} />
                        </a>
                        <p className="projects-text text-sm md:text-md font-comfortaa font-semibold mb-4 text-gray-500 fade-in-text">
                            Click or tap the notebook <br /> to check out some of my projects!
                        </p>
                    </div>
                    <div className="flex flex-col md:hidden tech-stack">
                        <p className="text-2xl md:text-lg text-center font-bold font-comfortaa text-gray-500 mt-10 mb-10 md:mb-4 fade-in-text">
                            Techs I enjoy using:
                        </p>
                        <div className="flex space-x-6 justify-center fade-in-socials">
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" for="html">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" for="css">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" for="javascript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://tailwindcss.com/docs/installation" for="tailwind">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="stack-icons" />
                            </a>
                        </div>
                        <div className="flex space-x-6 mt-2 justify-center fade-in-socials">
                            <a href="https://react.dev/" for="react">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://nextjs.org/docs" for="nextjs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="stack-icons"/>
                            </a>
                            <a href="https://nodejs.org/en/docs" for="nodejs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://www.mongodb.com/docs/" for="mongodb">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="stack-icons" />
                            </a>
                        </div>
                        <div className="flex space-x-6 mt-2 justify-center fade-in-socials">
                            <a href="https://mui.com/material-ui/getting-started/" for="mui">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="stack-icons" />
                            </a>
                            <a href="https://cloud.google.com/docs" for="cloud">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="stack-icons"/>
                            </a>
                            <a href="https://www.figma.com/developers" for="figma">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="stack-icons"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <Modal isOpen={showEmailModal} toggle={toggleEmailModal} centered>
                <ModalHeader className="modal-header text-lapiz-lazuli font-poppins">
                    Send me an email 📩
                </ModalHeader>
                <ModalBody>
                    <form ref={form} className="modal-form font-poppins" onSubmit={sendEmail}>
                        <label>Name: </label>
                        <input type="text" name="from_name" />
                        <label>Email Address: </label>
                        <input type="email" name="email" />
                        <label>Subject: </label>
                        <input type="subject" name="subject" />
                        <label>Message: </label>
                        <textarea name="message" />
                    </form>
                </ModalBody>
                <ModalFooter className="flex justify-between">
                    <Button color="" onClick={toggleEmailModal} className="text-lapiz-lazuli">
                        Close
                    </Button>
                    <Button color="primary" type="submit" onClick={sendEmail}>Send</Button>
                </ModalFooter>
            </Modal>
            {/* toast */}
            <div className={`toast-overlay ${showToast ? "show" : ""}`}>
                <Toast isOpen={showToast} toggle={toggleToast} className="email-toast" id="custom-toast">
                    <ToastBody className="text-center bg-success" toggle={toggleToast}>
                        Email Sent Successfully <span className="ml-1">✔</span> <br />Thanks for reaching out
                    </ToastBody>
                </Toast>
            </div>
        </div>
    )
}

export default Home

    // empty div to help with spacing:

    // <div style={{ width: '5rem' }}></div>
    //todo: add 'projects' button linking to 'projects' page
    //todo: edit modal buttons (color, positioning), consider changing Poppins
    //todo: turn sections of code into components i.e. stack-icons, profile, etc.
    //todo: add accolades page with certifs and badges, link to it on homepage with svg
    //todo: find optimal way to handle tech-stack/notebook switching spots (simplify code?)