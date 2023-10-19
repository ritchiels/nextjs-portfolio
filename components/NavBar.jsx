import { useState, useEffect, useRef } from 'react';
import { useTheme } from "next-themes";
import Image from 'next/image';
import { 
    Navbar, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink, 
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Toast,
    ToastBody } from 'reactstrap';
import EmailModal from './EmailModal';
import emailjs from '@emailjs/browser';
import Smeech from '../public/favicon.ico';

const NavBar = () => {

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

    return (
        <Navbar color="light" light expand="md" className="bg-gray-400 p-4 text-lapiz-lazuli sticky-top py-0 my-0">
            <div className="d-flex justify-content-between align-items-center w-100 text-lapiz-lazuli">
                <NavbarBrand className="d-flex align-items-center">
                    <Image
                        src={Smeech}
                        alt="Thumbnail"
                        height={30}
                        width={30}
                        className="mr-2 rounded-full"
                    />
                    <h1 className="text-sm font-poppins font-semibold text-lapiz-lazuli mb-0">Ritchie Simmons, Web Dev</h1>
                </NavbarBrand>
                <Nav className="ml-auto space-x-2 font-poppins" navbar>
                    <NavItem>
                        <NavLink href="#home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#accolades">Accolades</NavLink>
                    </NavItem>
                    <NavItem>
                        <button onClick={toggleEmailModal}>
                            <NavLink href="#" onClick={toggleEmailModal}>Contact</NavLink>
                        </button>
                    </NavItem>
                    {/* {showEmailModal && <EmailModal toggle={toggleEmailModal} />} */}
                    {/* <EmailModal isOpen={showEmailModal} toggleModal={toggleEmailModal} toggleToast={toggleToast} /> */}
                </Nav>
            </div>
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
        </Navbar>
    )
};

export default NavBar;