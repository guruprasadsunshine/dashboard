import React from 'react'
import "./Header.css"
import Nav from './Nav'



const Header = () => {
  return (
    <div className='header' >
    <div className='d-flex  justify-content-around header' >

        <div>
{/* <img src={logo} alt='' /> */}
        </div>
        <div className='d-flex align-items-center' >
            <h2 className='' >DashBoard</h2>
        </div>
        <div>
        {/* <img src={logo} alt='' /> */}
        </div>
    </div>
    <Nav/>
    </div>
  )
}

export default Header