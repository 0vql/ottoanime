import dynamic from "next/dynamic";
import Head from "next/head";
const HomePage = dynamic(() => import("../components/home/HomePage"));
const Header = dynamic(() => import("../components/home/Header"));
import styled from "styled-components";

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
background:black;

height: 450px ;
 &::before {
  content: '';

  position:  absolute ;
  top: 0 ;
  right: 0 ;
  bottom: 0 ;
  left: 0 ;
  opacity:  0.4 ;
  background-image: url(https://image.tmdb.org/t/p/original/mBxsapX4DNhH1XkOlLp15He5sxL.jpg) ;
  background-size: cover ;
  background-position: center ;
  
   
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
      <ImageContainer>
        <div className="flex absolute w-full h-full justify-center items-center p-4">
        {/* <h1 className="text-5xl text-gray-200 drop-shadow-2xl font-black">Animex Stream </h1> */}
        </div>
      </ImageContainer>


      <HomePage />
    </IndexContainer>
    </>
  );
}
