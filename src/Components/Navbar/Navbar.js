import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar '>
      <div className=" z-10 lg:fixed navbar bg-base-100  font-semibold ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 m-2 shadow bg-base-100 rounded-box w-52 text-xl ">
        <li> <Link to="">Home</Link></li>
        <li><Link to="">About </Link></li>
        <li><Link to="">Contact </Link></li>
        <li><Link to="">Portfolio </Link></li>
        <li><Link to="">Blog </Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            More
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-base-100">
            <li><Link to="">Other</Link></li>
            <li><Link to="">Coding</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <Link className="btn btn-ghost  text-indigo-500 normal-case text-xl"> AILAHIN </Link>
  </div>
  <div className="navbar-center  hidden lg:flex font-semibold ">
    <ul className="menu menu-horizontal px-1 text-xl  ">
      <li className='mx-1'><Link to="">Home</Link></li>
      <li className='mx-1'><Link to="">About</Link></li>
      <li className='mx-1'><Link to="">Portfolio</Link></li>
      <li className='mx-1'><Link to="">Contact</Link></li>
      <li className='mx-1'><Link to="">Blog</Link></li>
      <li className='mx-1' tabIndex={0}>
        <Link to="">
          More
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li><Link to="">Coding</Link></li>
          <li><Link to="">Other</Link></li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="navbar-end mr-11 "> 
    <Link className="btn bg-sky-500 hover:bg-sky-700 border-0 "> <span><i class="fa-solid fa-download mr-2"></i> </span>    Download CV</Link>
  </div>
 

</div>
    </div>
  );
};

export default Navbar;