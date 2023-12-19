import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="logoContainer">
            <img src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg?w=900&t=st=1702692832~exp=1702693432~hmac=e00ac1d2c8bb63833563a51e8e2a0c56fb58ca874e06f42cc3fcaa5e9458ffce" alt="logo" className="logo" />
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