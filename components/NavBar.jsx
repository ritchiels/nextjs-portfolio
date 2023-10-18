import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import Image from 'next/image';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import EmailModal from './EmailModal';
import Smeech from '../public/favicon.ico';

const NavBar = () => {

    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const toggleEmailModal = () => {
        setShowEmailModal(!showEmailModal);
    };

    const toggleToast = () => {
        setShowToast(!showToast);
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
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#accolades">Accolades</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => toggleEmailModal()}>Contact</NavLink>
                    </NavItem>
                    <EmailModal isOpen={showEmailModal} toggleModal={toggleEmailModal} toggleToast={toggleToast} />
                </Nav>
            </div>
        </Navbar>
    )
};

export default NavBar;