import React from 'react'
import "./NavBar.css"
import {FiSearch} from "react-icons/fi"
import { SlHome } from 'react-icons/sl';
import {AiOutlineCompass,AiOutlineHeart,AiOutlinePlusSquare} from "react-icons/ai"
import {CgClapperBoard} from "react-icons/cg"
import {SiMessenger} from "react-icons/si"

const NavBar = () => {

  return (
    <>
    <div className='Nav'>

    <div className='Nav-Logo'>
        <h1>Instagram</h1>
    </div>  
    <div className='Nav-Section'>
        <ul className='Nav-Section-ul'>
            <li className='Nav-Section-li'><a href="#"><SlHome className='icon'/>Home</a></li>
            <li className='Nav-Section-li'><a href="#"><FiSearch className='icon' /> Search </a></li>
            <li className='Nav-Section-li'><a href="#"><AiOutlineCompass className='icon' />Explore</a></li>
            <li className='Nav-Section-li'><a href="#"><CgClapperBoard className='icon' />Reels</a></li>
            <li className='Nav-Section-li'><a href="#"><SiMessenger className='icon' />Message</a></li>
            <li className='Nav-Section-li'><a href="#"><AiOutlineHeart className='icon' />Notifications</a></li>
            <li className='Nav-Section-li'><a href="#"><AiOutlinePlusSquare className='icon' />Create</a></li>
            <li className='Nav-Section-li'><a href="#"><img className='perfil' src="https://unavatar.io/midudev" alt="Perfil De Un Random" /> Profile</a></li>
        </ul>
    </div>
    </div>
    
    
    </>
  )
}

export default NavBar