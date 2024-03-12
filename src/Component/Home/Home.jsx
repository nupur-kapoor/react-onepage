import './Home.css'
import React from 'react'


function Home() {
  return (
    <>
    <div className='main' id='Home'>
      <div className="main-container">
        <div className='left'>
          <div className='content'>
          <h1 id='heading-text'>Speed Your Business With</h1>
          <h2 id='zl'>Zluestics</h2>
          <div className='line'></div>
          <p>Build trust & increase sales for ypur business. Our Platform trusted tools.You Can make easily social touch.</p>
          <button className='btn'>Get Started</button>
        </div>
        </div>
        <div className='right'>
          <img src='https://media.istockphoto.com/id/1770802188/photo/idea.jpg?s=612x612&w=0&k=20&c=zsvlhd7_UP4TkWvWMgCmrFxQC9ORmbS2jlb_15pcNmQ='></img>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home