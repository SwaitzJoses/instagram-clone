import React from 'react'
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'

function Header() {
    return (
        <>
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">INSTAGRAM ✨  </Navbar.Brand>
    <Nav className="mr-auto">
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Sign In 🔥 </Button>
    </Form>
  </Navbar>
        </>
    )
}

export default Header
