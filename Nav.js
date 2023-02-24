import React from 'react'
import PropTypes from 'prop-types'
import Home from './Home'
function Nav(props) {
  return (
    <div>
        <nav className='navBar navbar-expand-lg navbar-dark bg-dark' >
            <div className='container-fluid' >
                <button className='navbar-toggler' data-bs-toggle="collapse" data-db-target="#navbar" aria-expanded="false" aria-label="Toggle navigantion" >
<span className='navbar-toggler-icon' ></span>
                </button>
<div className='collapse navbar-collapse justify-content-md-center' >
    <ul className='navbar'>
        <li className='nav-item- mx-2' >
            <a className='nav-link text-white' href='#' >Home</a>
        </li>
        <li className='nav-item- mx-2' >
            <a className='nav-link text-white' href='#' >contact</a>
        </li>
        <li className='nav-item- mx-2' >
            <a className='nav-link text-white' href='#' >About</a>
        </li>
    </ul>
</div>

            </div>
        </nav>
        <Home/>
    </div>
  )
}

Nav.propTypes = {}

export default Nav
