'use client';

import { useState, useEffect, useRef } from 'react'
import {
    Button,
    Form,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Toast,
    ToastBody
} from 'reactstrap'
import emailjs from '@emailjs/browser'
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailModal = () => {

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
        <>
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
            <div className={`toast-overlay ${showToast ? "show" : ""}`}>
                <Toast isOpen={showToast} toggle={toggleToast} className="email-toast" id="custom-toast">
                    <ToastBody className="text-center bg-success" toggle={toggleToast}>
                        Email Sent Successfully <span className="ml-1">✔</span> <br />Thanks for reaching out
                    </ToastBody>
                </Toast>
            </div>
        </>
    )
}

export default EmailModal;

//add Toast to show email was sent successfully
