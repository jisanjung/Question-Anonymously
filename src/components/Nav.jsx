import React from 'react'

const Nav = ({ children }) => {
  return (
    <nav className='navbar bg-info' data-bs-theme='dark'>
        <div className='container'>
            <a href='/' className='navbar-brand'>
                {children}
            </a>
        </div>
    </nav>
  )
}

export default Nav