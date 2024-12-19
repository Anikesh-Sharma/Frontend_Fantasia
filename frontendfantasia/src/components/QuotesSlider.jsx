import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MotivationalQuotesSlider = () => {
  const quotes = [
    "The only bad workout is the one you didn't do.",
    "Success starts with self-discipline.",
    "Strive for progress, not perfection.",
    "Push yourself because no one else is going to do it for you.",
    "Take care of your body. It's the only place you have to live.",
  ];

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-10 mx-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-6">
        Stay Motivated!
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-3xl mx-auto"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <p className="text-lg md:text-xl text-gray-700 text-center font-medium px-6">
              {quote}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MotivationalQuotesSlider;
