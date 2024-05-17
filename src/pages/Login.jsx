import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Login() {


    return (
        <div className='flex h-screen justify-between  items-center'>
            <div className='w-1/2 h-[100%]'>
                <div className='flex justify-between items-center p-10'>
                    <Link to={'/'}><img src="/src/assets/ubuntuAid-logo.svg" alt="" /></Link>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p>Go Back</p>
                    </div>
                </div>
                <div className='p-[100px]'>
                    <h1 className='md:text-4xl font-bold'>Sign in</h1>
                    <form action="">
                        <label htmlFor="email">Enter your email to receive a one-time passcode</label>
                        <input type="email" name="email" id="email" placeholder='Email Address' />
                        <p><input type="checkbox" name="checkbox" id="checkbox" /><span>Remember me</span></p>
                        <button type="submit">Send 4-digit Code</button>
                    </form>
                    <div><hr /><p>or</p><hr /></div>
                    <button>Sign in with Password</button>
                </div>
                <p className='text-center'>Need an account? <Link to={'/'}>Sign Up Here</Link></p>
            </div>
            <div className='w-1/2 px-16'>
                <img src="/src/assets/signChildren.png" alt="" />
            </div>
        </div>
    )
}

export default Login