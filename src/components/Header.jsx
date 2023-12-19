import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='header'>
        <div className="logoContainer">
            <img src={LOGO_URL} alt="logo" className="logo" />
        </div>
        <nav>
            <ul className='navItems'>
                <li className='navItem'>Home</li>
                <li className='navItem'>About</li>
                <li className='navItem'>Contact</li>
                <li className='navItem'>Cart</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header