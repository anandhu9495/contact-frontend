import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import Button from 'react-bootstrap/Button';



function Header() {
  return (
    <div>
        <MDBNavbar style={{backgroundColor:'#3A7AB6'}}  >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <i class="fa-solid fa-envelope fs-1 me-3 text-black"></i>
           
            <h3 style={{marginLeft:'0px'}} className='text-black '>CONNECTIFY</h3>

           
       

            

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

     


    </div>
  )
}

export default Header