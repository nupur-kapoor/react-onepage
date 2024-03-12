import './Pricing.css'
import React from 'react'
import PricingData from './PricingData'

function Pricing() {
  return (
   <>
      <div className='prmain' id='Pricing'>
         <h3>Pricing Plan</h3>
         <h1>Choose Your Best Plan</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minus assumenda deserunt. Corrupti recusandae ipsa deleniti id. </p>
         <span>
         <button id='best'>Best Plans</button>
         <button id='new'>New Launch</button>
         </span>

         <div className='pr-content'>
            {

                PricingData.map((pData)=>{
                    return(
                 <div className='pr-cards'>
                    <h3>{pData.name}</h3>
                    <span>{pData.price}</span>
                    <h5>{pData.list1}</h5>
                    <h5>{pData.list2}</h5>
                    <h5>{pData.list3}</h5>
                    <h5>{pData.list4}</h5>
                    <button>{pData.btn}</button>
                 </div>
                    )
                })
            }
         </div>
      </div>
   
   
   </>
  )
}

export default Pricing