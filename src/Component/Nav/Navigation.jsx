import './Navigation.css'
import './Navigation.css'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import React, { useState } from 'react'

function Navigation() {
    const [side, fside] = useState(false);
    const lists = ['Home' ,'About','Features','Pricing','FeedBack']
  return (
   <>
   <nav id='nav'>
    <div className='navbar'>
        <h2 id='logo'>DesignAxelna</h2>
        <ul className={side?"sidelist":"sidelist-open"}>
            {
            lists.map((Data , index)=>{
                return(
                  <li key={index}>
                  <a href={`#${Data}`}>{Data}</a>
              </li> 
                )
            })
            }
            <button id='login'>Login In</button>
            <button className='btn'>Sign Up</button>
        </ul>
          {
        side?<FiAlignJustify onClick={()=>{fside(false)}} className='icn'/>:
        <FiX  onClick={()=>{fside(true)}} className = 'icn'/>
        }
             
    </div>
   </nav>
   </>
  )
}

export default Navigation