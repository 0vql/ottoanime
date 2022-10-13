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

height: 450px ;
 &::before {
  content: '';

  position:  absolute ;
  top: 0 ;
  right: 0 ;
  bottom: 0 ;
  left: 0 ;
  filter : blur(6px) brightness(0.2);
  background-image: url(https://cdn.myanimelist.net/images/anime/13/17405.jpg) ;
  background-size: cover ;
  background-position: center ;
  background-repeat:no-repeat;
  
   
}
  
    
  }
`;

export default function Home() {
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3357173685448212"
     crossOrigin="anonymous"></script>
        
      </Head>
    <IndexContainer>


    <Swiper
    modules={[Autoplay]}
    className="header-swiper"
   
  
         
        
        
        breakpoints={{
         1624: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          
            speed:700,
            
          },
        }}
       
      >
      <SwiperSlide>
      <ImageContainer>
        <div className="absolute w-1/2 h-full  p-4">
        <div className="flex flex-col items-start justify-center">
        <h1 className="text-3xl text-white drop-shadow-2xl font-bold">Naruto </h1>
        <p className="text-gray-400 p-2">Moments prior to Naruto Uzumakis birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubis rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.</p>
        </div>
        </div>
      </ImageContainer>
      </SwiperSlide>
       
      
        
      </Swiper>
      


      <HomePage />
    </IndexContainer>
    </>
  );
}
