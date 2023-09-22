import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const TopMenu = () => {
  return (
    <>
    <div className='top'>
      
      <Container fluid>
        <img className='logo' src='img/logo4.png'/>
        <Form className="search-area">
              <Form.Control 
                type="search"
                placeholder="Search"
                className="search"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      <div className='left'>
        <img className='logo logo2' src='img/ico_user.png'/>
        <img className='logo' src='img/ico_write.png'/>
        <img className='logo logo3' src='img/store2.png'/>
      </div>
    </div>
     <Navbar bg="success" color='yellow' data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">추천</Nav.Link>
            <Nav.Link href="#home">분류</Nav.Link>
            <Nav.Link href="#features">랭킹</Nav.Link>
            <Nav.Link href="#pricing">매거진</Nav.Link>
            <Nav.Link href="#pricing">더보기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default TopMenu
