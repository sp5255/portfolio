import React from "react";
import Card from "./Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Assets/Styles/portfolio/index.scss";

// import required modules
import { Navigation, Pagination } from "swiper";

import todoImg from "../../Assets/images/Screenshot from 2022-02-21 11-02-50.png";
import EcommerceImg from "../../Assets/images/Screenshot from 2022-02-21 11-11-26.png";
import visualizerImg from "../../Assets/images/Screenshot from 2022-02-21 11-08-51.png";
import stopwatch from "../../Assets/images/stopwatch.png";
import weatherApp from "../../Assets/images/weather-app.png";
import youtube from "../../Assets/images/youtube.png";

function displayCard(projects) {
  return projects.map((project, id) => (
    <SwiperSlide key={id}>
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
      title: "Sorting Visualizer",
      desc: "Built in HTML, CSS & JS.This is the visualization of some sorting algorithms,",
      image: visualizerImg,
      liveLink: "https://sp5255.github.io/sortingAlgo_visual/",
    },

    {
      title: "E-Commerce Websit",
      desc: "An E-commerce like website. Built using HTML, CSS, JS, Bootstrap, ExpressJs, MongoDB",
      image: EcommerceImg,
      liveLink: "https://agile-peak-65322.herokuapp.com/",
    },
    {
      title: "Weather-App",
      desc: "A weather forecasting web app. Built in Reactjs, using Axios and Context-api. Also have a search city weather functionality. Forecast Daywise weather",
      image: weatherApp,
      liveLink: "https://sp5255.github.io/Weather-app/",
    },
    {
      title: "Stop Watch",
      desc: "Built in HTML, CSS and JavaScript. Having beautiful UI and functionality of Laps and Pause etc.",
      image: stopwatch,
      liveLink: "https://sachinpundir1.github.io/Ad/Jan%208%20(Stop%20watch)/",
    },
    {
      title: "Youtube Home Clone",
      desc: "Built in HTML, CSS and JavaScript. This is a clone of Youtube Homepage having infinite scrolling videos. we can Play the videos too",
      image: youtube,
      liveLink: "https://sachinpundir1.github.io/Ad/Jan%2015%20(YT)/",
    },

    {
      title: "Todo WebApp",
      desc: "Built in ReactJs, we can mark the Tasks as completed and can delete them too",
      image: todoImg,
      liveLink: "https://sp5255.github.io/Todo/",
    },
  ];

  const details = "Some Details";
  return (
    <div data-aos="slide-left" className="portfolio--container" id="Portfolio">
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
