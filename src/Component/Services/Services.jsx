import './Services.css'
import React from 'react'
import './ServiceData'
import ServicesData from './ServiceData';
import { ideaData } from './ServiceData';

function Services() {
  return (
    <>
    <div className='main-sr' id='Features'>
    <h1 id='sr-head'>Our BEST EXCITING FEATURES</h1>
    <div className='sr-content'>
        {
        ServicesData.map((sdata)=>
        {
            return(
                <div className='sr-card'>
                    <i>{sdata.icon}</i>
                    <h2>{sdata.head}</h2>
                    <p>{sdata.para}</p>
                    </div>
            )
        })
    }
      </div>

      <div className='idea'>
        <div className='idea-content'>
          <div className='idea-text'>
            <h1>Control Your Business</h1>
            <h2 id='blue'>Easily & Quickly</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste quidem! Numquam iste soluta deserunt laboriosam tempore excepturi.</p>
            {
                ideaData.map((iData)=>{
                  return(
          <div className='idea-part'>
                   <i>{iData.icon}</i>
                    <span>{iData.text}</span>
                    <p>{iData.des}</p>  
          </div>
                  ) 
                })
}
          </div>
          <div className='idea-img'>
            <img src='https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJ1c2luZXNzfGVufDB8fDB8fHww'></img>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services