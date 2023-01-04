import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import battle_rope from "./images/battle_rope.jpg";
import running from "./images/running.jpg";
import weights from "./images/weights.jpg";
import yoga from "./images/yoga.jpg";


const Home = () => {

    const slideShow = [
        {
            image: battle_rope,
            caption: "Battle Rope",
        },
        {
            image: running,
            caption: "Running",
        },
        {
            image: weights,
            caption: "Weight-Lifting",
        },
        {
            image: yoga,
            caption: "Yoga",
        },
    ];

    return (
        <div className="homePage">
            <div className="slide-container slides">
                <Slide>
                    {slideShow.map((slide, index) => (
                        <div className="each-slide" key={index}>
                            <img className='homeSlide' alt={slide.caption} src={slide.image} />
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default Home;
