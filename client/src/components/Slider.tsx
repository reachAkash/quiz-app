import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Gift from "@/assets/gift.jpg";
import Coin from "@/assets/coin.jpg";
import Message from "@/assets/message.png";
import Crown from "@/assets/crown.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
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
      breakpoints={{
        // Up to 767px (mobile size)
        0: {
          slidesPerView: 1, // Show only 1 card on mobile
        },
        // From 768px to 1023px (tablet size)
        768: {
          slidesPerView: 2, // Show 2 cards on tablet
        },
        // Above 1024px (desktop size)
        1024: {
          slidesPerView: 3, // Show 3 cards on desktop (default)
        },
      }}
    >
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Gift}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Coin}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Crown}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Message}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Gift}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Coin}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="bg-teal-500 text-center rounded-2xl text-white py-8 px-4 space-y-4"
        >
          <img
            className="rounded-full mx-auto h-[10rem] w-[10rem]"
            src={Crown}
          />
          <div className="text-2xl font-semibold">Play Games</div>
          <p className="font-normal text-base tracking-wide leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellendus quaerat.
          </p>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};
