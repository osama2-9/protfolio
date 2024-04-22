/* eslint-disable no-unused-vars */
import React from 'react'
import BG from '../assets/backgroud.jpg'
import hostBG from "../assets/hosting3-slider-cloud.png"
import blocks from "../assets/hosting3-slider-block.png"
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ButtonGroup } from '@mui/material';


const Home = () => {
    
    return (
        <div>
            <div className='home'>
                <img src={BG} alt="bg" width={1519} height={800} />
            </div>
            <div className="host">
                <img src={hostBG} alt="host" width={700} />
            </div>
            <div className="blocks">
                <div className="b-1">
                    <img src={blocks} alt="blocks" width={100} />
                    <img src={blocks} alt="blocks" width={100} />
                </div>
            </div>
            <div className="hero" style={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>DEV Osama Alsrraj</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>Software Developer</h2>
                <p style={{ fontSize: '1rem', marginBottom: '20px', color: "#FFF" }}>A MERN Stack Web Developer. Discover My Work From Here</p>
                <div className="btn-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' size='large' style={{ marginRight: "10px", backgroundColor: '#4caf50', color: '#fff' }}>Services</Button>
                    <Button variant='contained' size='large' style={{ marginRight: "10px", backgroundColor: '#2196f3', color: '#fff' }}>Contact</Button>
                    <ButtonGroup variant="contained" aria-label="Basic button group">



                        <Button style={{ backgroundColor: '#3b5998', color: '#fff' }}>
                            <FacebookIcon />
                        </Button>

                        <Button style={{ backgroundColor: '#333', color: '#fff' }}>
                            <GitHubIcon />
                        </Button>
                        <Button style={{ backgroundColor: '#C13584', color: '#fff' }}>
                            <InstagramIcon />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>

    )
}

export default Home
