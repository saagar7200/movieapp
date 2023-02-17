import React, { useRef, useState } from 'react';
import {BsSearch}  from  "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi";
import './nav.css'

type Props = {}

const Nav = (props: Props) => {

  // const [display,setDisplay] =useState<boolean>(true);

  const navRef = useRef<any>()

  const handleDspaly = () =>{
    const toggleEle = navRef.current
    toggleEle.classList.toggle('display')
    
    // setDisplay(prev => !prev)
  }
  return (
    <>
        <div className='nav-container'>
        <img src='/assets/weekendwatch.png' alt='logo'/>
        
            <div  ref={navRef} className='contents'>
             <div className='nav-content-container '>
          


          {/* <div className='nav-content-container middle-div' > */}
                <h5>Movies</h5>
                <h5>TV Shows</h5>
                <h5>People</h5>
                <h5>More</h5>
            {/* </div> */}

          </div>
            

         <div  className='nav-content-container login-container'>
            <h5>Log In</h5>
            <h5>Join Us</h5>
            <BsSearch/>
        </div>
            </div>

         
        <GiHamburgerMenu  style={{color:'white',cursor:"pointer"}} fontSize={25} className='hamBurger' onClick={handleDspaly} />


        </div>

    </>
  )

  }
export default Nav;