import React from 'react'
import {Navbar ,Container}from 'react-bootstrap'
function Header() {
  return (
    <>
     
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <i className='fa-solid fa-users fa-flip'></i>{' '}
            EMS
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header