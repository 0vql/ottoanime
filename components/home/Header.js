import Head from "next/head";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

const MovieImg = styled.img`
display: block;
border: none;
position: absolute;
right: 0;
height: 49.2vw;
min-height: 500px;
filter: brightness(0.4) drop-shadow(2px 4px 6px black);
object-fit:cover;
width:100%
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

const Header = () => {
  return (
    <HeaderContainer>
      <div className="h-full">
        <MovieImg src="/bg-anime3.jpg" alt="Picture of the author" />
        <div className="relative h-full text-white flex w-full flex-col justify-center max-w-sm lg:max-w-3xl mx-auto gap-6 ">
          <h1 className="text-2xl xl:text-[4rem] leading-none font-bold">
            Watch Free Anime Videos Enjoy your unlimited anime
            collection.
          </h1>
          <div>
            <p className="text-center text-gray-300 font-lighter lg:text-2xl">
              We are the definitive source for the best curated 720p / 1080p HD
              anime videos, viewable by mobile phone and tablet, for free.
            </p>
          </div>
          <AiOutlineArrowDown
            size={32}
            className="hidden md:block w-full absolute bottom-[2rem] text-white"
          />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
