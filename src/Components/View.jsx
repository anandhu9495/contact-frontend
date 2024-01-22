import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function View() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const bodyStyle = {
    backgroundColor: '#254D71',
    color: 'black',
    margin: 0,
    padding: 0,
  };



  const {id} = useParams();
  console.log(id);

  const base_url='http://localhost:8000'

  const [view,setView] = useState({});

  const viewUser = async (id) => {

    try{ 
    
        const result = await axios.get(`${base_url}/view-user/${id}`);
        console.log(result.data.viewuser);
        setView(result.data.viewuser); }
        catch (error) {
          console.error(error);
          // Handle the error, e.g., set an error state or show an error message
      }
    
};


  useEffect(() => {

    viewUser(id);
  },[id]);

  return (
    <div  style={bodyStyle}>

      <h1 className='text-center mt-3 text-white'>User Details</h1>

      <div className="row container mt-5 p-5">
        <div className="col-12">
          {/*card*/}
         <MDBCard style={{marginLeft:'250px'}}>
      <MDBCardBody style={{ backgroundColor: 'rgba(58, 122, 182, 0.8)' }}>
        <MDBCardTitle >EMPLOYEE DETAILS</MDBCardTitle>
        <MDBCardText>


        
          {
            <MDBListGroup style={{ minWidthL: '22rem' }} light>
              <MDBListGroupItem style={{ backgroundColor: 'rgba(58, 122, 182, 0.8)' }} > <h5 style={{marginLeft:'20px',color:'black'}}>user id : {view.id}</h5></MDBListGroupItem>
            <MDBListGroupItem style={{ backgroundColor: 'rgba(58, 122, 182, 0.8)' }}> <h5 style={{marginLeft:'20px',color:'black'}}> user name:  {view.name && `${view.name.firstname} ${view.name.lastname}`}</h5> </MDBListGroupItem>
            <MDBListGroupItem style={{ backgroundColor: 'rgba(58, 122, 182, 0.8)' }}> <h5 style={{marginLeft:'20px',color:'black'}}>Employee email :  {view.email}</h5> </MDBListGroupItem>

  
            <MDBListGroupItem style={{ backgroundColor: 'rgba(58, 122, 182, 0.8)' }}> <h5 style={{marginLeft:'20px',color:'black'}}>username :  {view.username}</h5> </MDBListGroupItem>
            <MDBListGroupItem style={{ backgroundColor: 'rgba(58, 122, 182, 0.8)' }}> <h5 style={{marginLeft:'20px',color:'black'}}>user password :  {view.password} </h5></MDBListGroupItem>




            <Button variant="primary" onClick={handleShow}>
        For More Details Click Here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h1 style={{color:'#4180B9'}}>ADDRESS : </h1> City :  {view.address &&   ` ${view.address.city} ` }<br/> street : {view.address && `${view.address.street}` } <br /> Number : {view.address && `${view.address.number}`} <br />Zipcode : {view.address && `${view.address.zipcode}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <h4 style={{color:'#4180B9'}}>geolocation :</h4>  Latitude :{view.address &&  `${view.address.geolocation.lat}`} <br />Longtitude:{view.address &&  `${view.address.geolocation.long}`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>









          </MDBListGroup>













        
          }
        




        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    </div>

    </div>
      

      <Link to={`/list`}>
      <MDBBtn style={{marginLeft:'690px',marginBottom:'20px'}}>back to home</MDBBtn>
</Link>
</div>


    
      
    
  );
}

export default View;
