import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";  // احتفظ فقط بـ navigation (لا يوجد pagination)

import { EffectCube, Navigation, Autoplay } from "swiper/modules";

export default function HeroSlider({ images, slidesPerView = 1, effect = "cube" }) {
  return (
    <Swiper
      modules={[EffectCube, Navigation, Autoplay]}
      effect={effect}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      // أزلت pagination
      navigation={true}  // أترك التنقل (السهمين) ممكن
      autoplay={{ delay: 4000 }}
      slidesPerView={slidesPerView}
      style={{ width: "100%", height: "100%" }}
    >
      {images.map((img, i) => (
        <SwiperSlide
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img}
            alt={`Slide ${i + 1}`}
            style={{
              width: "100%",
              height: "90%",
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
