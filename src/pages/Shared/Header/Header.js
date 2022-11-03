import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/auto-werke-logo-02.jpg'

const Header = () => {

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
    </>

    return (
        <div data-theme="lofi" className="navbar h-20 max-w-screen-xl mx-auto mt-3 mb-8 bg-base-200 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='border border-black' src={logo} alt="" style={{ width: "110px" }} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-outline mr-4'><Link to='/signin'>Sign In</Link></button>
                <button className="btn btn-outline btn-accent">Appointment</button>
            </div>
        </div>
    );
};

export default Header;