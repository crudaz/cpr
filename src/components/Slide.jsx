import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import slide1Image from "../assets/slide1.png";
import slide3Image from "../assets/slide3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slide = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="swiper default-carousel swiper-container">
          {/* <div className="swiper fraction-slide-carousel swiper-container relative"> */}
          <Swiper
            style={{
              "--swiper-navigation-color": "#FFF",
              "--swiper-pagination-color": "#FFF",
            }}
            className="m-1 relative"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div
                className="relative bg-indigo-50 rounded-2xl w-full h-96 py-12 flex justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide1Image})` }}
              >
                {/* <span className="text-3xl font-semibold text-indigo-600">
                  Slide 1{" "}
                </span> */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-white mb-5 md:text-5xl md:leading-normal">
                    Transforming spaces with excellense <br />
                    {/* <span style={{ color: "#f7b71e" }}>
                      Creating dreams, constructing realities
                    </span> */}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative bg-indigo-50 rounded-2xl w-full h-96 py-12 flex justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide3Image})` }}
              >
                {/* <span className="text-3xl font-semibold text-indigo-600">
                  Slide 1{" "}
                </span> */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-white mb-5 md:text-5xl md:leading-normal">
                    Crafting Excellence <br />
                    {/* <span style={{ color: "#f7b71e" }}>
                      Creating dreams, constructing realities
                    </span> */}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
