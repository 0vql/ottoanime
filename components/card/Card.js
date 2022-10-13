import styled from "styled-components";
import { useSelector } from "react-redux";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Heart from "../../public/heart.json";

const MovieWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 0.8rem;
  background-color: transparent;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: scale(1.03);
    
    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    

    opacity: 0;
    z-index: -99;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Episode = styled.span`
  padding: 0.3rem 0;
  color: #878080;
`;

const MovieImg = styled.div`
  width: 100%;
  max-height: 100%;
  object-fit: "cover";
  transform : scale(1);
  // filter: drop-shadow(2px 4px 6px black);

  border-radius: 0;
  
  // transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    filter: brightness(0.9);
  }
 
`;

const Title = styled.span`
  width: 100%;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space:nowrap;
  text-overflow:ellipsis;
  padding:0 10px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px #ffffff0f solid;
  
  border-top: none;
  width: 100%;
  // background: #ffffff0f;
  padding: 0.5rem 0;
  color:white;
  background:#141313;
  filter:drop-shadow(2px 4px 6px black);
 
`;

const Card = ({ title, id, url, heading, image_url, episode, released }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <Link
      href={
        episode
          ? `/watching/${id.replace("/","")}/${episode.replace("Episode", "").replace(" ", "")}`
          : heading === "My List" || heading === "List" || heading === "Recommended Animes"
          ? `/details/${id}`
          : `/details/${url}`
      }
    >
      <MovieWrapper
        className={
           `relative ${theme.card.text} ${theme.card.bghover} cursor-pointer items-center rounded-xl w-full text-center justify-start flex flex-col  `
        }
        card={theme.card}
      >
        {/* <MovieImg
            className="w-full object-cover rounded-xl h-[11rem]  xl:h-70 md:h-72 lg:h-66"
            lazy="loading"
            src={image_url}
            alt={title}
          > */}
        <MovieImg className="w-full object-cover rounded-xl h-[11rem] md:h-[14rem] lg:h-[15.2rem]  xl:h-[16rem]  2xl:h-[15.5rem] hover:brightness-75 ">
         
            <Image
              src={image_url ? image_url : "/bg-anime2"}
              layout="fill"
              objectFit="cover"
              alt={title}
              
            />

            
           
        
          
        </MovieImg>
        <DetailsWrapper className="">
          <Title className="text-[13px] md:text-lg">{title}</Title>
          {heading == "Popular" ||
          heading == "Trending" ||
          heading == "New Season" ||
          heading == "Genres" ||
          heading == "My List" ||
          heading == "Showing Results for" ||
          heading == "Movies" ||
          heading == "Recommended Animes" ? (
            <Episode className="text-[13px] md:text-md">{heading == "Recommended Animes" || heading == "My List" || heading == "List" ? "Released "+ released : released  } </Episode>
          ) : (
            ""
          )}
          {heading == "Recently Added" ||
          heading == "Latest Uploads" ? (
            <>
              <Episode>{episode}</Episode>
            </>
          ) : (
            ""
          )}
          {heading == "Watch List" || heading == "Recently Watched" ? (
            <>
              <Episode>{"Episode " + episode}</Episode>
            </>
          ) : (
            ""
          )}
        </DetailsWrapper>
      </MovieWrapper>
    </Link>
  );
};

export default Card;
