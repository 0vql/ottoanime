import dynamic from "next/dynamic";
import Head from "next/head";
const HomePage = dynamic(() => import("../components/home/HomePage"));
const Header = dynamic(() => import("../components/home/Header"));
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination,EffectFade,Autoplay } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import {AiFillStar, AiFillTags} from "react-icons/ai";
import { FaPlay, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination,Autoplay,EffectFade ]);




const IndexContainer = styled.div`
    width: 100%;
    height:100%;
    
        background-position: center top;
    background-size: cover;
    overflow:hidden;
  
   
}
  
    
  }
`;

const ImageContainer = styled.div`
position: relative ;
margin-top: 4.2rem ;
overflow:hidden;
background:black;

height: 550px ;
 &::before {
  content: '';

  position:  absolute ;
  top: 0 ;
  right: 0 ;
  bottom: 0 ;
  left: 0 ;
  filter : blur(8px) brightness(0.1);
  background-image: var(--bg-image) ;
  background-size: cover ;
  background-position: center ;
  background-repeat:no-repeat;
  
   
}
  
    
  }
`;

const Description = styled.p`
display: -webkit-box;
-webkit-line-clamp: 4;
overflow: hidden;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
  
   
}
  
    
  }
`;

export default function Home() {
  const [top,setTop] = useState([])
  const router = useRouter()
 

  useEffect(() => {
    fetchTop();

  },[])

  const fetchTop = async () => {
    let url = `https://api.jikan.moe/v4/top/anime?limit=15&filter=bypopularity`
    let req = await axios.get(url)
    let res = await req.data
    console.log(res)
    setTop(res.data)
  }
  return (
    <>
    <Head>
        
        <title>AniMex Stream</title>
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content="AniMex Stream | Watch HD Animes." />
        <meta name="keywords" content="animexstream,animex stream,ottoanime,otto anime,watch anime, anime online,animex stream , free anime, english anime, sites to watch anime" />
        <meta name="apple-mobile-web-app-title" content="Otto Anime Stream" />
        <meta property="og:site_name" content="Otto Anime"/>

        <meta property="og:image" content="/ottoanime192.svg " />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="Watch Anime for free in HD quality with English subbed or dubbed."
        />
         <meta
          property="description"
          content="Watch Anime for free in HD quality with English subbed or dubbed."
        />
        
        
      </Head>
    <IndexContainer>


    <Swiper
    modules={[Autoplay]}
    className="header-swiper"
    autoplay={{delay:8000}}
   
  
         
        
        
        breakpoints={{
         1624: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          
            speed:700,
            
          },
        }}
       
      >
        {top?.map((anime,i) => (
      <SwiperSlide key={i}>

          <ImageContainer  style={{"--bg-image":`url(${anime.images.jpg.image_url})`}}>
            <div className="absolute lg:w-[80%] 2xl:w-[62%] h-full  p-4">
            <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-4xl text-white drop-shadow-2xl font-black">{anime.title} </h1>
            <div className=" flex justify-between  py-1 px-3 w-full">
              <div className="flex items-center">
            <span className="text-gray-400 flex gap-1 items-center"><span className="mb-[1px]"><AiFillStar color="orange" /></span>{anime.score}</span>
             <span className="text-gray-200 mx-1">•</span>
            <span className="text-gray-300">{anime.year} </span>
            <span className="text-gray-200 mx-1">•</span>
            <span className="text-gray-300 ">{anime.type} </span>
            </div>
            <span className="text-gray-400">{anime.rating} </span>
            </div>
            <Description className="text-gray-300 px-2 mt-2 font-extralight">{anime.synopsis}</Description>

            <div className="text-blue-400 flex items-center py-1 px-3 gap-1">
              <span className="text-white mr-1"><AiFillTags /></span>
              <div>
              {anime.genres.map((genre,i) => (
                <span key={i} className=""><span className="text-gray-400">{i ? "," : ""}</span>{genre.name}</span>
              ))}</div>
            </div>
            <div className="flex justify-between gap-1 p-2">
                 

                  <button onClick={() => router.push(`/details/${anime.mal_id}`)} className="py-2 px-4 bg-[#2227] text-gray-200 rounded-sm font-semibold flex  items-center justify-center gap-2  hover:bg-blue-800 hover:scale-105 transition-all ease-in-out">
                  <FaPlay size={16} />
                  <span className="mx-auto">WATCH</span>
                  
                  </button>
                 
                  {/* <button
                  
                    className="py-2 px-4  bg-[#2227] text-gray-200 rounded-full font-semibold flex  items-center gap-2  hover:bg-blue-800  justify-center hover:scale-105 transition-all ease-in-out"
                  >
                    <FaYoutube size={18}  />
                    <span className="mx-auto">TRAILER</span>
                  </button> */}
                </div>
            </div>
            </div>
          </ImageContainer>
          </SwiperSlide>
        ))}
       
      
        
      </Swiper>
      


      <HomePage />
    </IndexContainer>
    </>
  );
}
