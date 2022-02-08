import React from 'react';
// import Tilt from 'react-parallax-tilt';
import cat from './computercat.png';
import './logo.css';


const Logo = () => {
    return (
         <div className='center'>
          <img className='w-10' style={{ paddingTop:'2px'}} src={cat} alt='logo'/>
        </div>
    );
}

export default Logo;