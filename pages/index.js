import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Discover } from "../utils/data";
import Image from "next/image";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

const MovieImg = styled.img`
display: block;
border: none;
position: absolute;
right: 0;
height: 49.2vw;
min-height: 500px;
filter: brightness(0.5);
object-fit:cover;
}
  
    
  }
`;
const HeaderContainer = styled.div`
    display: block;
    width: 100%;
    height: 50vw;
    min-height: 500px;
    overflow: hidden;
    position: relative;
}
  
    
  }
`;

export default function Home() {
  const [data, setData] = useState([]);
  const { theme, resumeId } = useSelector((state) => state);

  useEffect(() => {
    recentlyFetch();
  }, []);

  const recentlyFetch = async () => {
    let req = await fetch(
      "https://animex4stream.herokuapp.com/api/recently/1/"
    );
    let res = await req.json();
    setData(res.json_data.slice(8));
    console.log(data);
  };

  return (
    <div className="w-full">
      <HeaderContainer>
        <div className="h-full">
          <MovieImg src="/bg-anime1.jpg" alt="Picture of the author" />
          <div className="relative h-full text-white flex w-full flex-col justify-center max-w-sm lg:max-w-3xl mx-auto gap-6 ">
            <h1 className="text-2xl xl:text-5xl font-bold">
              Watch Free Anime Videos Enjoy your unlimited hentai & anime
              collection.
            </h1>
            <div>
              <p>
                We are the definitive source for the best curated 720p / 1080p
                HD hentai videos, viewable by mobile phone and tablet, for free.
              </p>
            </div>
            <AiOutlineArrowDown
              size={32}
              className="w-full absolute bottom-[2rem] text-white"
            />
          </div>
        </div>
      </HeaderContainer>
      <div className={`${theme.background} mx-auto `}>
        <Layout>
          <Container
            Data={data}
            heading={"Recently Added"}
            Icon={Discover[0].icon}
          />
        </Layout>
      </div>
    </div>
  );
}
