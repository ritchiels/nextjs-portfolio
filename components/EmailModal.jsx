'use client';

import { useState, useRef } from 'react'
import {
    Button,
    Form,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Toast
} from 'reactstrap'
import emailjs from '@emailjs/browser'
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailModal = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    console.log('Email toggle prop:', toggle);

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
        <>
            <Modal isOpen={modal} style={{ zIndex: 1100 }}>
                <ModalHeader toggle={toggle}>
                    Send me an email 📩
                </ModalHeader>
                <ModalBody>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name: </label>
                        <input type="text" name="user_name" />
                        <label>Email: </label>
                        <input type="email" name="user_email" />
                        <label>Message: </label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit" onClick={sendEmail}>Send</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default EmailModal

    //add Toast to show email was sent successfully