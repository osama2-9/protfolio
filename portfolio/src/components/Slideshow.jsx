/* eslint-disable no-unused-vars */
import React from 'react'
import codingImg from "../assets/coding.png";
import designImg from "../assets/design.png";
import deployImg from "../assets/deploy.png";
import testImg from "../assets/test.png";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';


const Slideshow = () => {
    const services = [
        {
            name: "Programming",
            img: codingImg
        },
        {
            name: "Design",
            img: designImg
        },
        {
            name: "Deployment",
            img: deployImg
        },
        {
            name: "Testing",
            img: testImg
        },
    ];

    const responsivePercent = {
        extraLarg: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slidesTpSlide: 1
        },
        large: {
            breakpoint: { max: 1324, min: 1005 },
            items: 3,
            slidesTpSlide: 1
        },
        medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slidesTpSlide: 1
        },
        small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slidesTpSlide: 1
        }
    };
    return (
        <div className='imgSlider'>
            <Carousel responsive={responsivePercent}>

                {services.map((slideImage, index) => (
                    <div className="each-slide" style={{ textAlign: "center" }} key={index}>
                        <img src={slideImage.img} alt={slideImage.name} width={400} height={300} />
                        <h2 className='servicename' >{slideImage.name}</h2>
                        <span>{index + 1}</span>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Slideshow
