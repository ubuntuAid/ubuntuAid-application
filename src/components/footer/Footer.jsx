/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  return (
    <>
    <section className='bg-[#6AA84F] py-10'>
        <div className='max-w-[70%] m-auto text-white' id='footer'>
            <div className='md:flex justify-between'>
                <div className='py-5 md:py-0'>
                    <h1>Browse Our Site</h1>
                    <ul>
                    <li>Find a Lawyer</li>
                    <li>Review Your Lawyer</li>
                    <li>Legal Advice</li>
                    <li>Recently Answered Questions</li>
                    <li>Browse Practice Areas</li>
                    <li>UbuntuAid Stories Blog</li>
                    <li>For Lawyers</li>
                    </ul>
                </div>
                <div className='py-5 md:py-0'>
                    <h1>Popular Locations</h1>
                    <ul>
                    <li>Kampala City Lawyers</li>
                    <li>Mbarara City Lawyers</li>
                    <li>Gulu Lawyers</li>
                    <li>Jinja City Lawyers</li>
                    <li>Soroti Lawyers</li>
                    </ul>
                </div>
                <div className='py-5 md:py-0'>
                    <h1>Popular Practice Areas</h1>
                    <ul>
                    <li>Refugee Education Lawyers</li>
                    <li>Employment Lawyers</li>
                    <li>Criminal Defence Lawyers</li>
                    <li>Health Lawyers</li>
                    <li>Intellectual Property Lawyers</li>
                    <li>Traffic Lawyers</li>
                    </ul>
                </div>
                <div className='py-5 md:py-0'>
                    <h1>About Us</h1>
                    <ul>
                    <li>About UbuntuAid</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>UbuntuAid Rating Explained</li>
                    </ul>
                </div>
                
            </div>
            <div className='md:flex justify-between py-10'>
                <div>
                    <ul className='md:flex justify-between gap-5'>
                        <li>Terms of Use</li> <span className='md:flex hidden'>|</span>
                        <li>Privacy Policy</li><span className='md:flex hidden'>|</span>
                        <li>Community Guidelines</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex md:justify-between gap-5 pt-5 md:pt-0'>
                    <li><img src="/Facebook.svg" alt="UbuntuAid on Facebook" /></li>
                    <li><img src="/twitter.svg" alt="UbuntuAid on twitter" /></li>
                    <li><img src="/LinkedIn.svg" alt="UbuntuAid on LinkedIn" /></li>
                    <li><img src="/YouTube.svg" alt="UbuntuAid on YouTube" /></li>
                </ul>
                </div>
            </div>
            <p className='md:text-base text-sm'>© UbuntuAid. All Rights Reserved 2024</p>
        </div>
    </section>

    </>
  )
}

export default Footer