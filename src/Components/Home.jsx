// Home.jsx

import React from 'react';
import ImageTitle from '../assets/wp8047414-blue-tech-wallpapers.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <img src={ImageTitle} alt="Connectify Banner" />
      <div className="overlay-content">
        <h3 className='text-white'>Welcome to Connectify - Your Smart Contact Hub!</h3>
        <p style={{marginTop:'30px',marginLeft:'-580px'}}>
          Unleash the power of seamless connections with Connectify. Effortlessly manage your contacts, <br /> stay organized, and foster meaningful relationships. Revolutionize the way you connect, all in one <br /> place. Get ready to experience a new era of contact management.
        </p>

       <Link to={'./list'}>
       <button style={{marginLeft:'-300px', marginTop:'20px'}} className="get-started-btn">Get Started</button>

       </Link>

       <div style={{marginTop:'-460px',marginLeft:'800px'}}>
       <Link to={'./add'}>
       <button style={{backgroundColor:'black'}}  className="get-started-btn ">add</button>

       </Link>
       </div>



      </div>
    </div>
  );
}

export default Home;
