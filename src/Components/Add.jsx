import React, { useState } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Add() {


  const bodyStyle = {
    backgroundColor: '#254D71',
    color: 'black',
    margin: 0,
    padding: 0,
  };


    const[id,setId]=useState("")
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[lat,setLat]=useState("")
    const[long,setLong]=useState("")
    const[city,setCity]=useState("")
    const[street,setStreet]=useState("")
    const[number,setNumber]=useState("")
    const[zipcode,setzipcode]=useState("")
    const[email,setEmail]=useState("")
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")


    const base_url='http://localhost:8000/add-user';


    const location = useNavigate()


    const AddUser=(e)=>{
        e.preventDefault()
        console.log(id,firstname,lastname,lat,long,city,street,number,zipcode,email,username,password,phone);

        const body={

            id,firstname,lastname,lat,long,city,street,number,zipcode,email,username,password,phone

        }

        const result= axios.post(base_url,body).then((response)=>{
          console.log(response);
          alert(response.data.message)
          location('/list')
        })
        .catch((error)=>{
          alert('pls enter uniqe id')
        })
        







    }

    //api call





  return (
    <div style={bodyStyle}>

     <h4 className='text-center mt-3' >Embark on the journey of digital inclusion and user empowerment by seamlessly adding a new member to your community with just a few keystrokes</h4>
     <h5 className='text-center'>Let innovation flourish as you craft a unique digital identity for every user in your realm</h5>








<MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50 mt-5'
          size='lg'
          textBefore={<span style={{ width: '125px'  ,color:'black'}}>ID</span>}
        >
          <input onChange={(e)=>setId(e.target.value)}  className='form-control' type='text' />
        </MDBInputGroup>



        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>FIRST NAME</span>}
        >
          <input onChange={(e)=>setFirstname(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>
        
        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>LAST NAME</span>}
        >
          <input onChange={(e)=>setLastname(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>LATITUDE</span>}
        >
          <input onChange={(e)=>setLat(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>LONGITUDE</span>}
        >
          <input onChange={(e)=>setLong(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>
        


        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>CITY</span>}
        >
          <input onChange={(e)=>setCity(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>STREET</span>}
        >
          <input onChange={(e)=>setStreet(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>


        <MDBInputGroup
          style={{ marginLeft: '340px' ,backgroundColor: 'rgba(255, 255, 255, 0.6)'}}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px'  ,color:'black'}}>NUMBER</span>}
        >
          <input onChange={(e)=>setNumber(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px'  ,color:'black'}}>ZIPCODE </span>}
        >
          <input onChange={(e)=>setzipcode(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>


        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>EMAIL</span>}
        >
          <input onChange={(e)=>setEmail(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>



        

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>USERNAME</span>}
        >
          <input onChange={(e)=>setUsername(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>PASSWORD</span>}
        >
          <input onChange={(e)=>setPassword(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '340px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black' }}>PHONE</span>}
        >
          <input onChange={(e)=>setPhone(e.target.value)} className='form-control' type='text' />
        </MDBInputGroup>



        <div style={{ marginLeft: '680px', marginTop: '20px', marginBottom: '20px' }}>
        <MDBBtn className='mb-4' onClick={(e)=> AddUser(e)}  style={{ backgroundColor: 'rgb(33, 155, 151)' }}>
          Add User
        </MDBBtn>
      </div>
        
        
        
        
    </div>
  )
}

export default Add