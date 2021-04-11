import React from 'react'
import {Navbar} from 'react-bootstrap'

const Headers = () => {
    return (
        <Navbar   bg="dark" variant="dark">
 {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>*/}
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text> <i class="far fa-bell text-success"></i> </Navbar.Text>
    <Navbar.Text><i class="fas fa-user text-primary"></i> logout </Navbar.Text>
   
  </Navbar.Collapse>
</Navbar>
    )
}
export default Headers;
