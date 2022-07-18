import Card from "./Card";
import { useSelector } from "react-redux";
import PagiNation from "../PagiNation";// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loader from "../Loader/Loader";
SwiperCore.use([Navigation, Pagination])








function HomeContainer({ Data = [], heading, page, Icon }) {
  const { theme, loading } = useSelector((state) => state);
  console.log(Data);
  return (
    <>
    <span
          className={`${theme.text.selected} px-2 flex  font-light items-center  text-3xl`}
        >
          {/* {Icon ? (
            <Icon
              size={15}
              style={{
                margin: "0px 10px 0px 0px",
                color: heading == "My List" ? "red" : theme.text.selected,
              }}
            />
          ) : (
            ""
          )} */}
          {heading}
        </span>
        <div className={`bg-gray-400 rounded-full h-0.5 mx-2 w-[2rem]`} />
        <Swiper
      navigation
      breakpoints= {{
        320: 
        {
          slidesPerView: 3,
          spaceBetween: 5
        },
        480: 
        {
          slidesPerView: 3.5,
          spaceBetween: 10
        },
        640: 
        {
          slidesPerView: 3.2,
          spaceBetween: 10
        },
        720: 
        {
          slidesPerView: 3.5,
          spaceBetween: 10
        },
        1024: 
        {
          slidesPerView: 4.5,
          spaceBetween: 10
        },
        1224: 
        {
          slidesPerView: 5.5,
          spaceBetween: 10
        },
        1424: 
        {
          slidesPerView: 6.5,
          spaceBetween: 10
        },

    }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <div className="">
        {Data?.map((item, index) => (
      <SwiperSlide>
          <Card {...item} key={index} heading={heading} />
          </SwiperSlide>
        ))}
      </div>
      
    </Swiper>
    </>
  );
}

export default HomeContainer;
