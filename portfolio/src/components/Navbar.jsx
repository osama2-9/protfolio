/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="logo">
                <h2 style={{ marginTop: "20px" }}>Code</h2>
            </div>
            <div className="list" style={{marginTop:"15px"}}>
                <ul>
                    <a href="#about">
                        <li>About Me</li>

                    </a>
                    <a href="#service">
                        <li>Service</li>
                    </a>
                        <a href="#skill">

                            <li>Skills</li>
                        </a>
                    <a href="#contact">

                        <li>Contact Me</li>
                    </a>

                </ul>
            </div>




        </nav>
    )
}

export default Navbar
