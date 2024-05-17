import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Login() {


    return (
        <div className='md:flex md:h-screen justify-between items-center'>
            <div className='md:w-1/2 h-[100%]'>
                <div className='flex justify-between items-center p-10'>
                    <Link to={'/'}><img src="/src/assets/ubuntuAid-logo.svg" alt="" /></Link>
                    <div className='flex text-[#0a72BA]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p>Go Back</p>
                    </div>
                </div>
                <div className='py-16 md:px-32 px-10'>
                    <h1 className='md:text-4xl font-bold mb-2'>Sign in</h1>
                    <form action="">
                        <label htmlFor="email">Enter your email to receive a one-time passcode</label><br />
                        <input type="email" name="email" id="email" placeholder='Email Address' className='w-full border-2 border-gray-500 rounded px-2 py-1 my-2' />
                        <p><input type="checkbox" name="checkbox" id="checkbox" /><span>Remember me</span></p>
                        <button type="submit" className='w-full bg-[#0a72ba] rounded p-2 my-2 text-center font-medium text-white'>Send 4-digit Code</button>
                    </form>
                    <div className='flex justify-between items-center my-2'><hr className='w-1/2'/><p className='px-4'>or</p><hr className='w-1/2' /></div>
                    <button className='w-full bg-[#6AA84F] rounded p-2 my-2 text-center font-medium text-white'>Sign in with Password</button>
                </div>
                <p className='text-center'>Need an account? <Link to={'/'} className='font-bold underline'>Sign Up Here</Link></p>
            </div>
            <div className='md:w-1/2 px-16 w-full md:flex hidden'>
                <img src="/src/assets/signChildren.png" alt="" />
            </div>
        </div>
    )
}

export default Login