import React from 'react'

const Header = () => {
  return (
    
    <div className=''>
        <div className="navbar shadow-sm fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Department</a>
          <ul className="p-2">
            <li><a>dep 1</a></li>
            <li><a>dep 2</a></li>
          </ul>
        </li>
       <li><a>About</a></li>
       <li><a>Contact</a></li>
      </ul>
    </div>
    <a className='font-bold text-xl text-white'>daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-bold text-xl text-white'><a>Home</a></li>
      <li>
        <details>
          <summary className='font-bold text-xl text-white'>Department</summary>
          <ul className="p-2">
            <li><a>dep1</a></li>
            <li><a>dep2</a></li>
          </ul>
        </details>
      </li>
      <li className='font-bold text-xl text-white'><a>About</a></li>
       <li className='font-bold text-xl text-white'><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-6 p-4">Create Account</a>
  </div>
</div>

    </div>
  )
}

export default Header