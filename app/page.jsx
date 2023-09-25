'use client';

import { useEffect, useState, useRef } from 'react'
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, Toast, ToastHeader, ToastBody } from 'reactstrap';
import Image from 'next/image'
import ProfilePic from '../public/rich-prof.jpg'
import EmailModal from '@/components/EmailModal';
import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import emailjs from '@emailjs/browser'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DevBotPic from '../img/dev-bot-screen.png'
import PromptopiaPic from '../img/promptopia-screen.png'
import Vite from '../img/vite.svg'
import Github from '../img/github.svg'
import Vercel from '../img/logo-vercel.svg'
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
    //media query logic
    const isMediumScreen = useMediaQuery('(min-width: 768px)');

    return (
        <>
            <Container className="container flex flex-col justify-center items-center overflow-y-auto">
                {/* profile */}
                <section className="grid grid-col md:flex items-center md:space-x-8">
                    <div>
                        <Image
                            src={ProfilePic}
                            alt="Profile Image"
                            height={250}
                            width={250}
                            className="profile-image m-auto rounded-full fade-in-pic"
                        />
                    </div>
                    <div className="flex flex-col md:mt-10">
                        <h1 className="text-4xl md:text-4xl font-bold font-poppins m-auto mt-2 text-lapiz-lazuli fade-in-header">Ritchie Simmons</h1>
                        <div className="flex space-x-16 md:space-x-14 items-center m-auto mt-4 mb-2 text-lapiz-lazuli fade-in-socials">
                            <a href="https://github.com/ritchiels" className="socials">
                                <FontAwesomeIcon icon={faGithub} size={isMediumScreen ? 'xl' : '2xl'} />
                            </a>
                            <button className="socials" onClick={toggleEmailModal}>
                                <FontAwesomeIcon icon={faEnvelope} size={isMediumScreen ? 'xl' : '2xl'} />
                            </button>
                            <a href="https://www.linkedin.com/in/ritchie-simmons-060443231" className="socials">
                                <FontAwesomeIcon icon={faLinkedin} size={isMediumScreen ? 'xl' : '2xl'} />
                            </a>
                            {showEmailModal && <EmailModal toggle={toggleEmailModal} />}
                        </div>
                        <p className="text-lg md:text-md text-center font-bold font-comfortaa text-gray-500 mt-4 ml-2 mb-2 fade-in-text">
                            Full-stack React developer
                        </p>
                        <p className="text-md md:text-sm text-center font-semibold font-comfortaa text-gray-500 mt-2 ml-2 mb-4 fade-in-text">
                            📍 Florida, USA
                        </p>
                    </div>
                </section>
                <section className="mt-4">
                    <hr className="fade-in-socials" />
                    <div className="flex flex-col">
                        <p className="text-2xl md:text-sm text-center font-bold font-comfortaa text-gray-500 mt-2 mb-10 md:mb-4 fade-in-text">
                            Techs I enjoy using:
                        </p>
                        <div className="grid grid-cols-3 gap-6 m-auto mb-4 md:flex justify-center fade-in-socials">
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" for="html">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" for="css">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" for="javascript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://tailwindcss.com/docs/installation" for="tailwind">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://react.dev/" for="react">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://nextjs.org/docs" for="nextjs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://nodejs.org/en/docs" for="nodejs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://www.mongodb.com/docs/" for="mongodb">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://mui.com/material-ui/getting-started/" for="mui">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://cloud.google.com/docs" for="cloud">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://www.figma.com/developers" for="figma">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="mobile-stack-icons" />
                            </a>
                        </div>
                    </div>
                    <hr className="fade-in-socials" />
                </section>
                <p className="scroll font-montserrat font-medium text-lapiz-lazuli fade-in-text">Check out my <a href="/accolades" className="accolades">accolades</a> or take a look at some of my recent <a href="#projects" className="accolades">projects</a> below</p>
                {/* projects */}
                <section className="projects items-center relative m-auto mt-40 space-y-20" id="projects">
                    <div className="flex flex-row">
                        <a href="https://dev-bot.vercel.app/">
                            <Image
                                src={DevBotPic}
                                alt="Dev Bot Pic"
                                height={325}
                                width={325}
                                className="project-images rounded-lg hover:animate-pulse"
                            />
                        </a>
                        <div className="flex flex-col items-center justify-center pl-10">
                            <h2 className="text-lapiz-lazuli text-xl font-montserrat font-medium">Dev Bot</h2>
                            <p className="text-gray-600 text-sm font-comfortaa w-60 text-center">a chat bot made with JavaScript and Vite using OpenAI's api to utilize their gpt-3.5-turbo model</p>
                            <div className="flex flex-row space-x-12 justify-center items-center mt-2">
                                <a href="https://github.com/ritchiels/vite-js-devbot" className="flex flex-col items-center no-underline">   
                                    <Image
                                        src={Github}
                                        alt="Github"
                                        height={20}
                                        width={20}
                                        className="animate-bounce"
                                    />
                                <p className="text-gray-600 text-sm font-comfortaa">Code</p>
                                </a>
                                <a href="https://dev-bot.vercel.app/" className="flex flex-col items-center no-underline">
                                    <Image
                                        src={Vercel}
                                        alt="Deployment"
                                        height={20}
                                        width={20}
                                        className="animate-bounce"
                                    />
                                <p className="text-gray-600 text-sm font-comfortaa">Demo</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col items-center justify-center pr-10">
                            <h2 className="text-lapiz-lazuli text-xl font-montserrat font-medium">Promptopia</h2>
                            <p className="text-gray-600 text-sm font-comfortaa w-80 text-center">a forum for sharing and discovering AI prompts, complete with O-Auth sign-in, made using Next.js, Tailwind and MongoDB</p>
                            <div className="flex flex-row space-x-12 justify-center items-center mt-2">
                                <a href="https://github.com/ritchiels/nextjs-promptopia" className="flex flex-col items-center no-underline">   
                                    <Image
                                        src={Github}
                                        alt="Github"
                                        height={20}
                                        width={20}
                                        className="animate-bounce"
                                    />
                                <p className="text-gray-600 text-sm font-comfortaa">Code</p>
                                </a>
                                <a href="https://nextjs-promptopia-kappa.vercel.app/" className="flex flex-col items-center no-underline">
                                    <Image
                                        src={Vercel}
                                        alt="Deployment"
                                        height={20}
                                        width={20}
                                        className="animate-bounce"
                                    />
                                <p className="text-gray-600 text-sm font-comfortaa">Demo</p>
                                </a>
                            </div>
                        </div>
                        <a href="https://nextjs-promptopia-kappa.vercel.app/">
                            <Image
                                src={PromptopiaPic}
                                alt="Promptopia Pic"
                                height={325}
                                width={325}
                                className="project-images rounded-lg hover:animate-pulse"
                            />
                        </a>
                    </div>
                </section>
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
            </Container>
        </>
    )
}

export default Home

// empty div to help with spacing:
// <div style={{ width: '5rem' }}></div>

//todo: fill out 'projects' page
//todo: edit modal buttons (color, positioning), consider changing Poppins
//todo: turn sections of code into components i.e. stack-icons, profile, etc.
//todo: add accolades page with certifs and badges, link to it on homepage with svg
//todo: find optimal way to handle tech-stack/notebook switching spots (simplify code?)

// <div className="md:grid md:grid-cols-2 flex flex-col items-center">
//     <p className="projects-text text-sm md:text-md font-comfortaa font-semibold mt-4 text-gray-500 fade-in-text">
//         Click or tap the notebook <br /> to check out some of my projects!
//     </p>
//     <p className="projects-text text-sm md:text-md font-comfortaa font-semibold mt-4 text-gray-500 fade-in-text">
//         ...or the mug to see <br /> some of my accolades
//     </p>
//     <a href="/projects" className="fade-in-socials">
//         <Image src={Notebook} className="md:m-auto" alt="projects" height={300} width={300} />
//     </a>
//     <a href="/accolades" className="fade-in-socials">
//         <Image src={Tea} className="ml-10 md:ml-12" alt="accolades" height={175} width={175} />
//     </a>
// </div>    

