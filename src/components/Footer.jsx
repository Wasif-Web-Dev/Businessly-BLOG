import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='max-w-screen-xl m-auto'>
            <div className='NewsLetter p-12  border-2 flex items-center justify-between border-zinc-900'>
                <div className='NewsLetter-left'>

                    <span className='text-3xl'>
                        <FaTelegramPlane />
                    </span>
                    <h1 className='text-3xl font-[Lora]'>Sign up for our newsletters
                    </h1>
                    <h1 className='text-lg mt-3'>The best of Business news, in your inbox.</h1>
                </div>
                <div className="NewsLeter-Right flex gap-5 items-center justify-between">
                    <input className=' border-2 border-zinc-400 px-12 py-2' type="email" name="Email" placeholder='Email address' />
                    <SubmitButton text='Subscribe' />
                </div>
            </div>
            <div className="footer-Links flex items-center justify-between py-14 border-b-2 border-zinc-700">
                <img src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-site-logo.svg" alt="" />
                <div className='links flex items-center gap-14 text-blue-700  justify-between'>
                    <Link className='hover:text-zinc-950' to="/Home">Home</Link>
                    <Link className='hover:text-zinc-950' to="/Category/StockMarket">Stock Market</Link>
                    <Link className='hover:text-zinc-950' to="/Category/Technology">Technology</Link>
                    <Link className='hover:text-zinc-950' to="/Category/StockMarket">Politics</Link>
                    <Link className='hover:text-zinc-950' to="/Category/Politics">Automobile</Link>
                    <Link className='hover:text-zinc-950' to="/Category/Health">Health</Link>
                    <Link className='hover:text-zinc-950' to="/Category/Interactive-Sessions">Interactive Sessions</Link>
                </div>
            </div>
            <div className="Bottom-footer flex items-center justify-between p-5">
                <div className="flex flex-col my-5"><h1 className='text-xl font-[Lora] text-zinc-500'>About</h1>
                    <p>lorem </p>
                </div>
                <div className="flex flex-col my-5"><h1 className='text-xl font-[Lora] text-zinc-500'>Company</h1>
                    <Link className='mt-2 hover:text-blue-600'>About Us</Link>
                    <Link className='mt-2 hover:text-blue-600'>Contact Us</Link>
                    <Link className='mt-2 hover:text-blue-600'>Our Staff</Link>
                    <Link className='mt-2 hover:text-blue-600'>Advertise</Link>
                </div>
                <div className="flex flex-col my-5 hover:text-blue-600"><h1 className='text-xl font-[Lora] text-zinc-500'>Legal</h1>
                    <Link className='mt-2 hover:text-blue-600'>Privacy Policy</Link>
                    <Link className='mt-2 hover:text-blue-600'>Terms of Service</Link>
                    <Link className='mt-2 hover:text-blue-600'>Extra Crunch Terms</Link>
                    <Link className='mt-2 hover:text-blue-600'>Code of Conduct</Link>
                </div>
                <div className="flex flex-col my-5 hover:text-blue-600"><h1 className='text-xl font-[Lora] text-zinc-500'>Follow Us</h1>
                    <Link className='mt-2 hover:text-blue-600'>Facebook</Link>
                    <Link className='mt-2 hover:text-blue-600'>Youtube</Link>
                    <Link className='mt-2 hover:text-blue-600'>Twitter</Link>
                    <Link className='mt-2 hover:text-blue-600'>Instagram</Link>
                </div>
            </div>
            <div className="flex items-center justify-between mt-24 mb-12">
                <h1>Copyright © 2024 Business Blog</h1>
                <h1>Powered by Business Blog</h1>
            </div>
        </div>
    )
}

export default Footer