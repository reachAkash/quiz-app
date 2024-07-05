import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Gift from "@/assets/gift.jpg";
import Coin from "@/assets/coin.jpg";
import Message from "@/assets/message.png";
import Crown from "@/assets/crown.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      className="py-10"
    >
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Gift}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Coin}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Crown}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Message}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Gift}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Coin}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4">
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Crown}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
