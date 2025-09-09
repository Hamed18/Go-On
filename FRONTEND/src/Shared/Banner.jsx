import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-60 md:h-96 lg:h-[600px] bg-gray-100">
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263233/HomePagePic3_wdl3we.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat">
                Be a Part of the Legacy
              </h2>
              <Link to="">
                <button className="bg-violet-500 text-white font-semibold md:font-bold mt-4 px-4 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263230/HomePagePic4_esb9an.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat">
                Be a Part of the Legacy
              </h2>
              <Link to="/events">
                <button className="bg-violet-600 text-white font-semibold md:font-bold mt-4 px-4 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263229/HomePagePic1_erz15a.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat">
                Be a Part of the Legacy
              </h2>
              <Link to="/events">
                <button className="bg-violet-600 text-white font-semibold md:font-bold mt-4 px-4 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/df5utoo6u/image/upload/v1757263230/HomePagePic2_fttq6g.jpg"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat">
                Be a Part of the Legacy
              </h2>
              <Link to="/events">
                <button className="bg-violet-600 text-white font-semibold md:font-bold mt-4 px-4 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
