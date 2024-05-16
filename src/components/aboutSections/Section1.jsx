/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

function Section1() {
  return (
    <>
       <section className="h-[100dvh] flex justify-start items-center">
            <div className="bg-[#0A72BA] h-[100%] md:w-[800px] flex flex-col justify-center items-center">
                <h1 className="md:text-7xl text-left font-bold text-white leading-10 px-24">Why <br/>UbuntuAid?</h1>
                <p className="text-white text-left w-[50%] py-5">At UbuntuAid, we empower refugees by democratizing access to justice, placing the law's power directly into their hands.</p>
            </div>
            <div id="aboutImage" className="h-[100%] md:w-[800px]">
            </div>
        </section> 
    </>
  )
}

export default Section1