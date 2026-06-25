"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // এখানে EffectFade বাদ দেওয়া হয়েছে
import { motion } from "motion/react";
import SearchSection from "./SearchSection";

// শুধুমাত্র Swiper এর মূল CSS ইমপোর্ট করা হলো
import "swiper/css";

export default function HeroSection() {
    const images = [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    ];

    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden">

            <div className="absolute inset-0 w-full h-full z-0">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    loop={true}
                    className="w-full h-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="w-full h-full">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${src}')` }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

            <div className="relative z-20 text-center max-w-5xl px-4">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    className="text-4xl md:text-6xl font-bold leading-tight text-gray-300"
                >
                    Find Your Perfect <br /> Rental Home
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    className="mt-4 text-sm md:text-lg text-gray-200"
                >
                    Discover comfortable, affordable and verified rental properties <br />
                    in your desired location. Book your next home easily and safely.
                </motion.p>

                <SearchSection />
            </div>
        </section>
    );
}