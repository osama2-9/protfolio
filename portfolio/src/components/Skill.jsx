/* eslint-disable no-unused-vars */
import React from 'react';
import BG from '../assets/backgroud.jpg'
import html from "../assets/html-1.svg";
import css from "../assets/css-3.svg";
import js from "../assets/logo-javascript.svg"
import react from "../assets/react-2.svg"
import node from "../assets/nodejs-icon.svg";
import express from "../assets/express-109.svg";
import mongo from "../assets/mongodb-icon-2.svg";
import php from "../assets/php-1.svg";
import java from "../assets/java-4.svg";
import mysql from "../assets/mysql-4.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Skill = () => {
  const skills = [
    {
      img: html,
      name: "HTML",
      percent: "95%"
    },
    {
      img: css,
      name: "CSS",
      percent: "90%"
    },
    {
      img: js,
      name: "JavaScript",
      percent: "80%"
    },
    {
      img: react,
      name: "React.js",
      percent: "60%"
    },
    {
      img: node,
      name: "Node.js",
      percent: "70%"

    },
    {
      img: express,
      name: "Express.js",
      percent: "75%"
    },
    {
      img: mongo,
      name: "MongoDB",
      percent: "60%"

    },
    {
      img: php,
      name: "PHP",
      percent: "80%"
    },
    {
      img: java,
      name: "Java",
      percent: "90%"
    },
    {
      img: mysql,
      name: "MySQL",
      percent: "70%"
    }
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

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1005,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id='skill' className='skill'>

      <h1 style={{ marginBottom: "90px" }} >Skills</h1>
      <div className="slider">
        <Slider {...settings}>


          {skills.map((skill, index) => (
            <div className='data' key={index} style={{ textAlign: "center" }}>
              <ul className='skill-list'>

                <li>
                  <img src={skill.img} alt={skill.name} width={100} height={100} />
                  <h2 >{skill.name}</h2>
                  <h2 style={{ marginTop: "5px" }} >{skill.percent}</h2>
                </li>
              </ul>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skill;
