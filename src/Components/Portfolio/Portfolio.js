import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Assets/Styles/portfolio/index.css";

// import required modules
import { Navigation, Pagination} from "swiper";
import todo from "../../Assets/images/Screenshot from 2022-02-21 11-02-50.png";
import visualizer from "../../Assets/images/Screenshot from 2022-02-21 11-11-26.png";
import Card from "./Card";

function Portfolio() {
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
                <SwiperSlide>
                    <Card
                        src={todo}
                        alt="todo"
                        title="Todo in React Js"
                        details={details}
                        href="#"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Card
                        src={visualizer}
                        alt="visualizer"
                        title="visualizer"
                        details={details}
                        href="#"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Portfolio;
