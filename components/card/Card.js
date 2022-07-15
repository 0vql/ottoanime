import styled from "styled-components";
import { useSelector } from "react-redux";
import Link from "next/link";
import { AiFillCalendar } from "react-icons/ai";

const MovieWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 0.8rem;
  background-color: transparent;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: scale(1.03);
    // color: ${({ card }) => card.texthover};
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
    // background-color: ${({ card }) => card.bghover};

    opacity: 0;
    z-index: -99;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const Episode = styled.span`
  padding: 10px 0 0 0;
  color: #878080;
`;

const MovieImg = styled.img`
  width: 100%;
  max-width: 240px;
  object-fit: "contain";
  height: 19rem;
  border-radius: 0;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
  // transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  ${MovieWrapper}:hover & {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    box-shadow: none;
  }
`;

const Title = styled.span`
  text-align: center;
  max-height: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 160px;
  font-weight: bold;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px #ffffff0f solid;
  border-top: none;
  width: 100%;
  background: #ffffff0f;
  padding: 0.7rem 0;
  border-radius-bottom: 0.8rem;
`;

const Card = ({ title, id, url, heading, image_url, episode, released }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <Link href={episode ? `/watching/${url}/${episode}` : `/details/${url}`}>
      <MovieWrapper
        className={`relative ${theme.card.text} ${theme.card.bghover} cursor-pointer items-center rounded-xl w-full text-center justify-start flex flex-col  `}
        card={theme.card}
      >
        <MovieImg
          className="w-full object-cover rounded-xl h-60 xl:h-96 md:h-72 lg:h-80"
          src={image_url}
          loading="lazy"
          alt={title}
        />

        <DetailsWrapper>
          <Title className="">{title}</Title>
          {heading == "Popular" ||
          heading == "New Season" ||
          heading == "Genres" ||
          heading == "Movies" ? (
            <Episode> {released}</Episode>
          ) : (
            ""
          )}
          {heading == "Recently Added" || heading == "Recently Watched" ? (
            <Episode>Episode {episode}</Episode>
          ) : (
            ""
          )}
        </DetailsWrapper>
      </MovieWrapper>
    </Link>
  );
};

export default Card;
