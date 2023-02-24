import React from 'react'
import "./Home.css"
import {FaCartArrowDown,FaUserAlt,FaSafari,FaTasks} from "react-icons/fa"


function Home() {
  return (
   <div className='d-flex home' >
 <div className='d-flex sidebar flex-colamn flex-shrink-0 text-white bg-dark' >
<ul className='nav nav-pills flex-colamn mb-auto px-0' >
    <li className='nav-item' >
        <a href='' className='nav-link text-white' >
      <FaSafari/> <span className='ms-2' > DashBoard </span> 
        </a>
    </li>


    <li className='nav-item' >
        <a href='' className='nav-link text-white' >
      <FaCartArrowDown/> <span className='ms-2' > Cars </span> 
        </a>
    </li>

    <li className='nav-item' >
        <a href='' className='nav-link text-white' >
      <FaUserAlt/> <span className='ms-2' > Drivers </span> 
        </a>
    </li>


    <li className='nav-item' >
        <a href='' className='nav-link text-white' >
      <FaTasks/> <span className='ms-2' > Drivers </span> 
        </a>
    </li>


</ul>
</div>
<div className='content container mt-3' >
<div className='row' >
<div className='col-md-4 m-1 text-white col bg-success d-flex justify-content-around px-1 py-3 rounded'>
    <p>Total Cars</p>
    <FaCartArrowDown/>
</div>

<div className='col-md-4 m-1 text-white col bg-danger d-flex justify-content-around px-1 py-3 rounded'>
    <p>Total Drivers</p>
    <FaCartArrowDown/>
</div>


<div className='col-md-4 m-1 text-white col bg-warning d-flex justify-content-around px-1 py-3 rounded'>
    <p>Total Expense</p>
    <FaCartArrowDown/>
</div>

<div className='col-md-4 m-1  text-white col bg-success d-flex justify-content-around px-1 py-3 rounded'>
    <p>Reports</p>
    <FaCartArrowDown/>
</div>
</div>


</div>
   </div>
  )
}

export default Home