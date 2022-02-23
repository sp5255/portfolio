import React from "react";
import Card from "./Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Assets/Styles/portfolio/index.css";

// import required modules
import { Navigation, Pagination } from "swiper";

import todoImg from "../../Assets/images/Screenshot from 2022-02-21 11-02-50.png";
import EcommerceImg from "../../Assets/images/Screenshot from 2022-02-21 11-11-26.png";
import visualizerImg from "../../Assets/images/Screenshot from 2022-02-21 11-11-26.png";

function displayCard(projects) {
    return projects.map((project) => (
        <SwiperSlide>
            <Card
                src={project.image}
                alt={project.title}
                title={project.title}
                details={project.desc}
                href={project.liveLink}
            />
        </SwiperSlide>
    ));
}

function Portfolio() {

    const projects = [
        {
            title: "Todo WebApp",
            desc: "Built in ReactJs, we can mark the Tasks as completed and can delete them too",
            image: todoImg,
            liveLink:"https://sp5255.github.io/Todo/"
        },

        {
            title: "Sorting Visualizer",
            desc: "Built in HTML, CSS & JS.This is the visualization of some sorting algorithms,",
            image: visualizerImg,
            liveLink:"https://sp5255.github.io/sortingAlgo_visual/"
        },
        {
            title: "E-Commerce Websit",
            desc: "An E-commerce like website. Built using HTML, CSS, JS, Bootstrap, ExpressJs, MongoDB",
            image: EcommerceImg,
            liveLink:"https://agile-peak-65322.herokuapp.com/"
        },
    ];

    const details = "Some Details";
    return (
        <div
            data-aos="slide-left"
            className="portfolio--container"
            id="Portfolio"
        >
            <div className="title">
                <label>Portfolio</label>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {displayCard(projects)}                
            </Swiper>
        </div>
    );
}

export default Portfolio;
