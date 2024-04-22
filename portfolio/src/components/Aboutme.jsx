/* eslint-disable no-unused-vars */
import React from 'react'
import code_1 from "../assets/code-1.png"

const Aboutme = () => {


    return (
        <>
            <div id='about' className='about'>
                <h1 style={{ marginTop: "40px" }} >About <span >Me</span></h1>
            </div>
            <div className="biograph">
                <p>
                    A <span>Software Developer</span> With Over <span style={{ textDecoration: "underline pink" }}>3 Years</span> Experience In Web industry I Specialize In Providing Top-notch Programming With a high Quality Software prodacts
                </p>
            </div>
            <div className="code-1">
                <img src={code_1} alt="" width={400} style={{ position: "absolute", left: "65%", top: "1000px" }} className='animated-img' />
            </div>



        </>


    )
}

export default Aboutme
