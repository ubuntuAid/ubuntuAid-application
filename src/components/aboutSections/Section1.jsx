/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

function Section1() {
  return (
    <>
       <section className="h-[100dvh] flex w-full">
            <div className="bg-[#0A72BA] md:h-[100%] md:w-[50%] flex flex-col justify-center items-center">
                <h1 className="md:text-7xl text-5xl text-left font-bold text-white md:w-[50%]">Why <br/>UbuntuAid?</h1>
                <p className="text-white text-left md:w-[50%] py-5 px-14 md:text-base text-2xl">At UbuntuAid, we empower refugees by democratizing access to justice, placing the law's power directly into their hands.</p>
            </div>
            <div id="aboutImage" className="h-[100%] md:w-[50%]">
            </div>
        </section> 
    </>
  )
}

export default Section1