'use client';

import { useEffect, useState, useRef } from 'react'
import { 
    Button, 
    Card, 
    CardTitle,
    CardBody,
    Container, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Toast,  
    ToastBody } from 'reactstrap';
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
import SumUpPic from '../img/sum-up-screen.png'
import Vite from '../img/vite.svg'
import Github from '../img/github.svg'
import Vercel from '../img/logo-vercel.svg'
import React from 'react'
import FrontEnd from '../img/frontendcertif.png'
import FullStack from '../img/fullstackcertif.png'
import Bootstrap from '../img/Bootstrap_Course_Completion.png'
import ReactPic from '../img/React_Course_Completion.png'
import ReactNativePic from '../img/React_Native_Course_Completion.png'
import BackEnd from '../img/Node_Express_MongoDB_Course_Completion.png'
import Workspace from '../img/workspace-addons.png'
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
                <div className="spacer" style={{ height: '175px' }} id="home"></div>
                <section className="grid grid-col md:flex items-center md:space-x-8 fade-in-header">
                    <div>
                        <Image
                            src={ProfilePic}
                            alt="Profile Image"
                            height={375}
                            width={437}
                            className="profile-image m-auto rounded-full fade-in-pic"
                            priority
                        />
                    </div>
                    <div className="flex flex-col md:mt-10">
                        <h1 className="intro-text text-4xl md:text-5xl font-dmserif font-bold m-auto mt-2 text-lapiz-lazuli fade-in-header bg-gradient-to-r from-sky-600 to-sky-800 text-transparent bg-clip-text">Hey, I'm<br /><span className="md:text-8xl ml-5">Ritchie</span></h1>
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
                        <p className="text-lg md:text-md text-center font-bold font-comfortaa text-gray-500 mt-4 ml-2 mb-2">
                            Full-stack React developer
                        </p>
                        <p className="text-md md:text-sm text-center font-semibold font-comfortaa text-gray-500 mt-2 ml-2 mb-2">
                            📍 Florida, USA
                        </p>
                    </div>
                </section>
                <section className="pt-5">
                    <hr className="fade-in-socials" />
                    <div className="flex flex-col">
                        <p className="text-2xl md:text-sm text-center font-bold font-comfortaa text-gray-500 mt-2 mb-10 md:mb-4 fade-in-text">
                            Techs I enjoy using:
                        </p>
                        <div className="grid grid-cols-3 gap-6 m-auto mb-4 md:flex justify-center fade-in-socials">
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" htmlFor="html">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" htmlFor="css">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" htmlFor="javascript">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://tailwindcss.com/docs/installation" htmlFor="tailwind">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://react.dev/" htmlFor="react">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://nextjs.org/docs" htmlFor="nextjs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://nodejs.org/en/docs" htmlFor="nodejs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://www.mongodb.com/docs/" htmlFor="mongodb">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://mui.com/material-ui/getting-started/" htmlFor="mui">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://cloud.google.com/docs" htmlFor="cloud">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="mobile-stack-icons" />
                            </a>
                            <a href="https://www.figma.com/developers" htmlFor="figma">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="mobile-stack-icons" />
                            </a>
                        </div>
                    </div>
                    <hr className="fade-in-socials" />
                </section>
                {/* projects */}
                <section className="projects items-center relative m-auto mt-30">
                    <div className="spacer" style={{ height: '80px' }} id="projects"></div>
                {/* devbot */}
                    <div className="flex flex-row mb-20">
                        <div className="flex flex-col">
                            <a href="https://dev-bot.vercel.app/">
                                <Image
                                    src={DevBotPic}
                                    alt="Dev Bot Pic"
                                    height={325}
                                    width={325}
                                    className="project-images rounded-lg hover:animate-pulse"
                                />
                            </a>
                            <div className="flex flex-row space-x-6 mt-3 m-auto">
                                <a href="https://vitejs.dev/">
                                    <Image
                                        src={Vite}
                                        alt="Vite Pic"
                                        height={25}
                                        width={25}
                                    />
                                </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" htmlFor="javascript">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="project-stack-icons" />
                                </a>
                            </div>
                        </div>
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
                {/* promptopia */}
                    <div className="flex flex-row mb-20">
                        <div className="flex flex-col items-center justify-center pr-10">
                            <h2 className="text-lapiz-lazuli text-xl font-montserrat font-medium mb-0">Promptopia</h2>
                            <p className="text-gray-600 text-sm m-0">(W.I.P.)</p>
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
                        <div className="flex flex-col">
                            <a href="https://nextjs-promptopia-kappa.vercel.app/">
                                <Image
                                    src={PromptopiaPic}
                                    alt="Promptopia Pic"
                                    height={325}
                                    width={325}
                                    className="project-images rounded-lg hover:animate-pulse"
                                />
                            </a>
                            <div className="flex flex-row space-x-6 m-auto mt-3">
                                <a href="https://nextjs.org/docs" htmlFor="nextjs">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="project-stack-icons" />
                                </a>
                                <a href="https://tailwindcss.com/docs/installation" htmlFor="tailwind">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="project-stack-icons" />
                                </a>
                                <a href="https://www.mongodb.com/docs/" htmlFor="mongodb">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="project-stack-icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                {/* sum up */}
                    <div className="flex flex-row mb-10">
                        <div className="flex flex-col">
                            <a href="https://sum-up.vercel.app/">
                                <Image
                                    src={SumUpPic}
                                    alt="Sum Up Pic"
                                    height={325}
                                    width={325}
                                    className="project-images rounded-lg hover:animate-pulse"
                                />
                            </a>
                            <div className="flex flex-row space-x-6 mt-3 m-auto">
                                <a href="https://vitejs.dev/">
                                    <Image
                                        src={Vite}
                                        alt="Vite Pic"
                                        height={25}
                                        width={25}
                                    />
                                </a>
                                <a href="https://react.dev/" htmlFor="react">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="project-stack-icons" />
                                </a>
                                <a href="https://tailwindcss.com/docs/installation" htmlFor="tailwind">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="project-stack-icons" />
                                </a>
                                <a href="https://redux.js.org/" htmlFor="redux">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="project-stack-icons" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center pl-10">
                            <h2 className="text-lapiz-lazuli text-xl font-montserrat font-medium">Sum Up</h2>
                            <p className="text-gray-600 text-sm font-comfortaa w-60 text-center">a SaaS project made with React that allows users to sum up an article from a given URL</p>
                            <div className="flex flex-row space-x-12 justify-center items-center mt-2">
                                <a href="https://github.com/ritchiels/sum-up-ai" className="flex flex-col items-center no-underline">   
                                    <Image
                                        src={Github}
                                        alt="Github"
                                        height={20}
                                        width={20}
                                        className="animate-bounce"
                                    />
                                <p className="text-gray-600 text-sm font-comfortaa">Code</p>
                                </a>
                                <a href="https://sum-up.vercel.app/" className="flex flex-col items-center no-underline">
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
                </section>
                {/* accolades */}
                <section className="items-center relative" id="accolades">
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
                            <div className="desc-card">
                                <Card>
                                    <CardTitle className="text-center mb-0 mt-2 text-xl font-semibold font-montserrat">
                                        NuCamp
                                    </CardTitle>
                                    <CardBody className="text-center px-4 py-1 mb-2">
                                        Graduated from an intensive 6-month full-stack bootcamp covering front-end models like Bootstrap, React & React Native, as well as back-end techs like Node.js & MongoDB.
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="big-card card">
                                <Image src={FullStack} alt="Full Stack Cert" />
                            </div>
                        </div>
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


//todo: edit modal, consider changing Poppins
//todo: set up mobile view
//todo: make anchors open in new tab: target="_blank"
//todo: add Dark Mode

//streak