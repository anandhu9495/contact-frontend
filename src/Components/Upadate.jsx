import React, { useEffect, useState } from 'react'
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



function Upadate() {

  const bodyStyle = {
    backgroundColor: '#254D71',
    color: 'black',
    margin: 0,
    padding: 0,
  };



    const[usid,setId]=useState("")
    const[usfirstname,setFirstname]=useState("")
    const[uslastname,setLastname]=useState("")
    const[uslat,setLat]=useState("")
    const[uslong,setLong]=useState("")
    const[uscity,setCity]=useState("")
    const[usstreet,setStreet]=useState("")
    const[usnumber,setNumber]=useState("")
    const[uszipcode,setzipcode]=useState("")
    const[usemail,setEmail]=useState("")
    const[ususername,setUsername]=useState("")
    const[uspassword,setPassword]=useState("")
    const[usphone,setPhone]=useState("")



    const {id} =  useParams()
    console.log(id);

    const base_url='http://localhost:8000'

    const location = useNavigate()


    const viewUser = async (id)=>{
        const result = await axios.get(`${base_url}/view-user/${id}`) //address
        console.log(result.data.viewuser);
        setId(result.data.viewuser.id)
        setFirstname(result.data.viewuser.name.firstname)
        setLastname(result.data.viewuser.name.lastname)
        setLat(result.data.viewuser.address.geolocation.lat)
        setLong(result.data.viewuser.address.geolocation.long)
        setCity(result.data.viewuser.address.city)
        setStreet(result.data.viewuser.address.street)
        setNumber(result.data.viewuser.address.number)
        setzipcode(result.data.viewuser.address.zipcode)
        setEmail(result.data.viewuser.email)
        setUsername(result.data.viewuser.username)
        setPassword(result.data.viewuser.password)
        setPhone(result.data.viewuser.phone)
    }

    useEffect(()=>{

        viewUser(id);

    },[])


    const updateUser = async()=>{

        const body={
            id:usid,
            firstname:usfirstname,
            lastname:uslastname,
            lat:uslat,
            long:uslong,
            city:uscity,
            street:usstreet,
            number:usnumber,
            zipcode:uszipcode,
            email:usemail,
            username:ususername,
            password:uspassword,
            phone:usphone
        }

        const result = await axios.post(`${base_url}/update-user/${id}`,body)
        console.log(result);
        alert(result.data.message)
        location(`/list`)

    }




  return (
    <div style={bodyStyle}>
      <h2 className='text-center mt-3 mb-5'>Welcome to the Update User Profile page! </h2>
        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50 t'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>ID</span>}
        >
          <input onChange={(e)=>setId(e.target.value)} value={usid} className='form-control' type='text' />
        </MDBInputGroup>



        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px' ,color:'black'}}>FIRST NAME</span>}
        >
          <input onChange={(e)=>setFirstname(e.target.value)} value={usfirstname} className='form-control' type='text' />
        </MDBInputGroup>
        
        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>LAST NAME</span>}
        >
          <input onChange={(e)=>setLastname(e.target.value)} value={uslastname} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>LATITUDE</span>}
        >
          <input onChange={(e)=>setLat(e.target.value)} value={uslat} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>LONGITUDE</span>}
        >
          <input onChange={(e)=>setLong(e.target.value)} value={uslong} className='form-control' type='text' />
        </MDBInputGroup>
        


        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>CITY</span>}
        >
          <input onChange={(e)=>setCity(e.target.value)} value={uscity} className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>STREET</span>}
        >
          <input onChange={(e)=>setStreet(e.target.value)} value={usstreet} className='form-control' type='text' />
        </MDBInputGroup>


        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>NUMBER</span>}
        >
          <input onChange={(e)=>setNumber(e.target.value)} value={usnumber} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>ZIPCODE </span>}
        >
          <input onChange={(e)=>setzipcode(e.target.value)} value={uszipcode} className='form-control' type='text' />
        </MDBInputGroup>


        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>EMAIL</span>}
        >
          <input onChange={(e)=>setEmail(e.target.value)} value={usemail} className='form-control' type='text' />
        </MDBInputGroup>



        

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>USERNAME</span>}
        >
          <input onChange={(e)=>setUsername(e.target.value)} value={ususername} className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup
          style={{ marginLeft: '370px',backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black' }}>PASSWORD</span>}
        >
          <input onChange={(e)=>setPassword(e.target.value)} value={uspassword} className='form-control' type='text' />
        </MDBInputGroup>
        

        <MDBInputGroup
          style={{ marginLeft: '370px' ,backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
          className='mb-3 w-50'
          size='lg'
          textBefore={<span style={{ width: '125px',color:'black'}}>PHONE</span>}
        >
          <input onChange={(e)=>setPhone(e.target.value)} value={usphone} className='form-control' type='text' />
        </MDBInputGroup>



        <div style={{ marginLeft: '680px', marginTop: '20px', marginBottom: '20px' }}>
        <MDBBtn className='mb-3' onClick={(e)=> updateUser(e)}  style={{ backgroundColor: 'rgb(33, 155, 151)' }}>
          Update
        </MDBBtn>
      </div>
        
    </div>              
  )
}

export default Upadate