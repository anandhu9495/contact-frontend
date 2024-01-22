import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';


  import axios from 'axios'
import { Link } from 'react-router-dom';
import './List.css';
  
  

function List() {

  const bodyStyle = {
    backgroundColor: '#254D71',
    color: 'black',
    margin: 0,
    padding: 0,
  };


  const base_url='http://localhost:8000';

  const[user,setUser]=useState([])


  const fetchdata=async()=>{
    const result= await axios.get(`${base_url}/get-all-users`)
    console.log(result.data.users);
    setUser(result.data.users)
  }
  console.log(user);


  const DeleteUser =async (id)=>{

    const result=await axios.delete(`${base_url}/delete-user/${id}`)
    alert(result.data.message)
    fetchdata()

  }





  useEffect(()=>{

    fetchdata()

  },[])




  return (
    <div  style={bodyStyle}>


  <div className="list-container">
  <div className="app-info">
        <h1 className="app-title text-center text-white">Connectify Users</h1>
        <h5 className="app-description text-white">
          Discover and manage your community. Connectify Users lets you seamlessly navigate through
          user profiles, making interactions and updates a breeze.
        </h5>
      </div>
    <MDBRow className='mt-5'>
      {user.map(userData => (
        <MDBCol  xl={6} className='mb-4'  >
          <MDBCard >
            <MDBCardBody style={{height:'110px',backgroundColor:'#3A7AB6'}}>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <img 
                    src='https://www.shutterstock.com/shutterstock/videos/1101050585/thumb/11.jpg?ip=x480'
                    alt=''
                    style={{ width: '50px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div style={{width:'200px'}} className="user-info ">
                    {userData.name && (
                      <>
                        <h5 className='fw-bold mb-1 text-black'>
                          {userData.name.firstname} {userData.name.lastname}
                        </h5>
                        <p style={{marginLeft:'10px'}} className=' mb-0 text-black'>{userData.email}</p>
                      </>
                    )}
                  </div>

                  <div   className="user-actions d-flex justify-content-end ml-auto">
                  <i onClick={() =>DeleteUser(userData.id)} style={{color:'red',marginRight: '40px'}}  className='fa-solid fa-trash '></i>

                  <Link to={`/update/${userData.id}`}>
                  <i style={{marginRight: '40px',color:'darkgreen'}}  className='fa-solid fa-pen '></i>

                  </Link>



                  <Link to={`/view/${userData.id}`}>
                  
                  <i style={{color:'blue',marginRight:'40px'}}  class="fa-regular fa-eye"></i>

                  </Link>
                </div>
                </div>
               
              </div>
            </MDBCardBody>
            <MDBCardFooter  background='black' border='0' className='p-2 d-flex justify-content-around text-white'>
              <MDBBtn style={{textDecoration:'none'}} color='link' rippleColor='primary' className='text-reset m-0'>
                Message <MDBIcon fas icon='envelope' />
              </MDBBtn>
              <MDBBtn style={{textDecoration:'none'}} color='link' rippleColor='primary' className='text-reset m-0'>
                Call <MDBIcon fas icon='phone' />
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  </div>


  <div id='btn1'>
  <Link  to={'/'}><button  className='btn btn-black'>back</button></Link>

  </div>






    </div>
  )
}

export default List