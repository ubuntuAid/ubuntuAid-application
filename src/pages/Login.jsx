import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Login() {


    return (
        <div>
            <div>
                <div>
                    <Link to={'/'}><img src="/src/assets/ubuntuAid-logo.svg" alt="" /></Link>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <p>Go Back</p>
                    </div>
                </div>
                <div>
                    <h1></h1>
                    <form action="">
                        <label htmlFor="email">Enter your email to receive a one-time passcode</label>
                        <input type="email" name="email" id="email" placeholder='Email Address' />
                        <p><input type="checkbox" name="checkbox" id="checkbox" /><span>Remember me</span></p>
                        <button type="submit">Send 4-digit Code</button>
                    </form>
                    <div><hr /><p>or</p><hr /></div>
                    <button>Sign in with Password</button>
                </div>
                <p>Need an account? <Link to={'/'}>Sign Up Here</Link></p>
            </div>
            <div>
                <div><img src="/src/assets/signChildren.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Login