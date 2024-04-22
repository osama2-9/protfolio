/* eslint-disable no-unused-vars */
import React from 'react'
import Home from '../components/Home'
import Aboutme from '../components/Aboutme'
import Services from '../components/Services'
import Slideshow from '../components/Slideshow'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import { ToastContainer } from 'react-toastify'


const Main = () => {
    return (
        <div>
            <Home />
            <Aboutme />
            <Services />
            <Slideshow />
            <Skill />
            <Contact />
            <ToastContainer position='top-center' />



        </div>
    )
}

export default Main
