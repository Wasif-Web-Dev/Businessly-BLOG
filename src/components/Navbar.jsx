import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import SubmitButton from './SubmitButton';


function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto py-2 px-12 '>
            <div className=' flex items-center justify-between'>
                <span className='text-xl'>
                    <IoMdSearch />
                </span>
                <img src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-site-logo.svg" alt="" />
                <SubmitButton />
            </div>
            <div className='links flex items-center justify-center gap-8 mt-3'>
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/">Home</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/Category/StockMarket">Stock Market</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/Category/Technology">Technology</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/Category/Politics">Politics</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/Category/Automobile">Automobile</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/Category/Health">Health</NavLink >
                <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 underline underline-offset-4 transition-all' : 'text-gray-600')} to="/Category/Interactive-Sessions">Interactive Sessions</NavLink >
            </div>
        </div>
    )
}

export default Navbar



