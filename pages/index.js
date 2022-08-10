import dynamic from "next/dynamic";
import Head from "next/head";
const HomePage = dynamic(() => import("../components/home/HomePage"));
const Header = dynamic(() => import("../components/home/Header"));
import styled from "styled-components";

const IndexContainer = styled.div`
    width: 100%;
    height:100%;
    background: linear-gradient(rgb(0 0 0 / 73%),rgb(0 0 0 / 54%)) ,url(/bg-anime6.jpg)no-repeat fixed;
        background-position: center top;
    background-size: cover;
    overflow:hidden;
   
}
  
    
  }
`;

export default function Home() {
  return (
    <>
    <Head>
        <link rel="icon" href={"/shuriken.svg"} />
        <link rel="manifest" href="/manifest.json" />
        <title>AniMex Stream</title>
        <meta property="og:title" content="AniMex Stream | Watch HD Animes." />
        <meta name="apple-mobile-web-app-title" content="AniMexStream" />
        <meta property="og:image" content="/static/img/icon-192x192.png " />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="Watch Anime for free in HD quality with English subbed or dubbed."
        />
        
      </Head>
    <IndexContainer>
      <Header />

      <HomePage />
    </IndexContainer>
    </>
  );
}
