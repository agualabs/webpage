import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/agualabs_boat.png'

const Navbar = () => (
  <nav className='navbar is-transparent'>
    <div className='container'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <figure className='image'>
            <img src={logo} alt='Agualabs' style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className='navbar-start'>
        <Link className='navbar-item' to='/about'>
          Imprint
        </Link>
        <Link className='navbar-item' to='/products'>
          Services
        </Link>
      </div>
      <div className='navbar-end'>
        <a
          className='navbar-item'
          href='https://github.com/agualabs/webpage.git'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='icon'>
            <img src={github} alt='Github' />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
