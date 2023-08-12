'use client';

import { useState, useRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Image from 'next/image'
import ProfilePic from '../public/rich-prof.jpg'
import EmailModal from '@/components/EmailModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import emailjs from '@emailjs/browser'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
config.autoAddCss = false;

const Home = () => {

    const [showEmailModal, setShowEmailModal] = useState(false);

    const toggleEmailModal = () => {
        console.log('toggling email modal');
        setShowEmailModal(!showEmailModal);
    };

    const form = useRef();

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
                    <h1 className="text-5xl font-semibold m-auto text-lapiz-lazuli fade-in-header">Ritchie Simmons</h1>
                    <p className="text-sm text-center font-semibold font-comfortaa text-gray-600 mt-4 ml-2 mb-4 fade-in-text">
                        Full-stack web developer with a focus in React and MongoDB <br /> 📍 Florida, USA.
                    </p>
                    <div className="flex space-x-8 items-center m-auto text-lapiz-lazuli fade-in-socials">
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
                    <p className="text-sm text-center font-semibold font-comfortaa text-gray-600 mt-4 ml-2 mb-4 fade-in-text">
                        Techs I use: 
                    </p>
                </div>
            </div>
            <Modal isOpen={showEmailModal} toggle={toggleEmailModal} centered>
                <ModalHeader className="modal-header">
                    Send me an email 📩
                </ModalHeader>
                <ModalBody>
                    <form ref={form} className="modal-form" onSubmit={sendEmail}>
                        <label>Name: </label>
                        <input type="text" name="user_name" />
                        <label>Email: </label>
                        <input type="email" name="user_email" />
                        <label>Message: </label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </ModalBody>
                <ModalFooter className="flex justify-between">
                    <Button color="" onClick={toggleEmailModal} className="text-lapiz-lazuli">
                        Close
                    </Button>
                    <Button color="primary" type="submit" onClick={sendEmail}>Send</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Home

    // empty div to help with spacing:

    // <div style={{ width: '5rem' }}></div>

    //framework icons to display:
    //html, css, javascript, react, nextjs, tailwind, mongodb

    //todo: add stack svg's, style modal form, close modal after sending email, toast to show email sent
    //todo: edit modal buttons (color, positioning)