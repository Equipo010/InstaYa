import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export function BarraNavegacion(){
    const [dropdown, setDropdown]=useState(false);
    const abrirCerar = () => {
        setDropdown(!dropdown);
    }
    return(
        <Navbar bg="light" expand = "lg" >
            <Container id="s-nav">
                <Navbar.Brand >
                    <img
                        className=" InstaYa-logo-izquierdo"
                        src="src/Imagenes/Recurso 7.png"
                        alt="InstaYa"
                        href="/Historial"
                        />
                </Navbar.Brand>
                <Navbar.Toggle id="Button-menu" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div id="div-nav">
                        <Nav 
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        
                        >
                            <NavLink to="/historial"><span className="span-nav">Inicio</span></NavLink>
                            <NavLink to="/nueva-orden"><span className="span-nav">Nueva orden</span></NavLink>
                        </Nav>
                    </div>
                </Navbar.Collapse>
                <div>
                    <Dropdown isOpen={dropdown} toggle={abrirCerar} size="sm">
                        <DropdownToggle id='menu-desplegable' caret>
                        <img
                            className="Usuario-logo-derecho"
                            src="src/Imagenes/user.png"
                            alt="InstaYa"
                            href="/Historial"
                            />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Cuenta</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Salir</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Container>
        </Navbar>

    )
}
