import React, { useEffect, useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const[isOpen,setIsOpen] = useState(false)

    const getMenuStyle = (isOpen) =>{
      if(document.documentElement.clientWidth < 780){
        return {right : !isOpen && "-100%"}
      }
    }

  return (
    <section className='h-wrapper'>
        <div className="h-container flexCenter innerWidth paddings">
            <img src="/logo.png" alt="logo" width={100}/>
            <OutsideClickHandler
            onOutsideClick={()=>setIsOpen(false)}>
            <div className="h-menu flexCenter" style= {getMenuStyle(isOpen)}>
                <a href="/">Residencies</a>
                <a href="">Our Value</a>
                <a href="/">Contact Us</a>
                <a href="">Get Started</a>
                <button className='btn'>Login</button>
            </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={()=>setIsOpen(prev=> !prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  )
}

export default Header