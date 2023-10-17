import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Smeech from '../public/favicon.ico';

const NavBar = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Navbar color="light" light expand="md" className="bg-gray-400 p-4">
            <div className="nav-container text-lapiz-lazuli">
                <NavbarBrand className="d-flex align-items-center">
                    <img
                        src={Smeech}
                        alt="Thumbnail"
                        className="mr-2"
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                    <h1>Ritchie L. Simmons</h1>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#accolades">Accolades</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    )
};

export default NavBar;

{/* <div className="ml-3">
    The current theme is: {theme}
    <Button color="primary" onClick={() => setTheme('light')} className="ml-2">
        Light Mode
    </Button>
    <Button color="dark" onClick={() => setTheme('dark')} className="ml-2">
        Dark Mode
    </Button>
</div> */}