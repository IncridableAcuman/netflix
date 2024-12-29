import './Navbar.css'
import logo from '../../../public/logo-netflix.svg'
import {FaSearch,FaBell,FaCaretDown} from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { logout } from '../../firebase';
const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  },[])
  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch className='icons' />
        <p>Children</p>
        <FaBell className='icons' />
        <div className="navbar-profile">
          <img src='profile.png' alt="" className='profile' />
          <FaCaretDown className='down'  />
          <div className="dropdown">
          <p onClick={()=>{logout()}}>Logout</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar