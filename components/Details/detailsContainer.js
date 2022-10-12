import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AiFillPlayCircle, AiFillStar, AiFillYoutube } from "react-icons/ai";
import dynamic from "next/dynamic";
const EpisodeContainer = dynamic(() => import("./EpisodeContainer"));
const Loader = dynamic(() => import("../Loader/Loader"));
import Backdrop from "../BackDrop";
import ReactPlayer from "react-player/lazy";

import {
  addToMyList,
  removeFromMyList,
} from "../../redux/actions/myLIstDataAction";

import { useEffect, useState } from "react";
import Lottie from "lottie-react-web";
import Heart from "../../public/heart.json";
import Recommended from "../../pages/recommended";
import Container from "../card/Container";
import { FaPlay, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";

const DetailsContainer = ({ id, data, mal }) => {
  const [click, setClick] = useState(false);
  const { theme, myList, loading } = useSelector((state) => state);
  const [showTrailer, setShowTrailer] = useState(false);
  const [randomData, setRandomData] = useState([]);
  const [expand, setExpand] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRecommended();
    const current = myList.filter((item) => item.id == id);
    current.length > 0 ? setClick(true) : setClick(false);
  }, [id]);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  const fetchRecommended = async () => {
    let req = await fetch("/recommended.json");
    let res = await req.json();
    setRandomData(res);
  };

  const handleTrailer = () => {
    setShowTrailer(false);
  };

  const handleClick = () => {
    if (click) {
      setClick(false);
      dispatch(removeFromMyList(id));
    } else {
      dispatch(
        addToMyList({
          id: id,
          image_url: data.image_url || mal?.image_url,
          title: data?.title || mal?.title,
          released: data.year || mal?.aired?.prop?.from?.year,
        }),
      );
      setClick(true);
    }
  };

  const genres = mal?.genres && mal?.genres.split(",")
  return (
      <>
        <div className="overflow-hidden relative">
          <div className="h-[255px] overflow-hidden">
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${mal?.image_url || data?.image_url}) `,
            height:"250px",
           
            filter:"brightness(0.2) blur(15px)",
            backgroundPosition:"center 50%",
            width: "100%",
            height: "100%",
  
              transform: "scale(1.1)"
          }}
        /></div>
          {/* <div
            style={{
              backgroundImage: `https://gogocdn.net/cover/mob-psycho-100-iii-1664389233.png`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              position: "absolute",
            }}
          ></div> */}
          {/* <img src={data.image_url} alt="data" className=" absolute lg:flex object-cover h-full  bg-center blur-[9px] brightness-[0.3] w-full "/> */}

          <div
            className={`${theme.text.selected} background-transparent w-full text-white py-2 lg:py-1 flex justify-center  mt-[4.8rem] md:mt-0  `}
          >
            <div
              className={`w-full flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-stretch z-[1] `}
            >
              <div className="mt-[-15rem] lg:mt[-12rem] rounded-lg w-8/12 lg:w-auto h-fit my-1  shadow-2xl ">
                <div className="relative mx-auto w-fit">
                <img
                  src={mal?.image_url || data?.image_url}
                  alt={data?.title || mal?.image_url}
                  className="w-[175px] h-[268px] md:w-[226px] md:h-[319px] rounded-lg mx-auto object-cover"
                />

<div className="top-1 left-1 rounded-sm absolute py-1 px-2 bg-[#1119] text-sm text-white flex gap-1 items-center">
                  {mal?.score || "?"} <AiFillStar color="#ffd530e8" />
                </div>
                </div>

                
                <div className="p-2">
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Episodes:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {data?.episodes || mal?.total_episodes}
                    </span>
                  </div>
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Released:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {data?.year || mal?.aired?.prop?.from?.year}
                    </span>
                  </div>
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Rating:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {mal?.rating || "?"}
                    </span>
                  </div>
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Duration:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {mal?.duration}
                    </span>
                  </div>
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Status:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {data?.status || mal?.status}
                    </span>
                  </div>
                  {mal?.airing === "true" && (

                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Broadcast:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {mal?.broadcast || "?"}
                    </span>
                  </div>
                  )}
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Source:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {mal?.source}
                    </span>
                  </div>
                  <div className="hidden lg:flex py-1 items-center ">
                    <span className="font-bold text-md ">Studios:</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-1`}
                    >
                      {mal?.studios?.[0]?.name}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between gap-1 p-2">
                  {data?.episodes === "0" ? "" : (

                  <button onClick={() => router.push(`/watching/${data?.anime_id || mal?.anime_id}/1`)} className="p-3 bg-[#2227] text-gray-200 rounded-full font-semibold flex  items-center justify-center gap-2  hover:bg-blue-800 hover:scale-105 transition-all ease-in-out">
                  <FaPlay size={16} />
                  </button>
                  )}
                  <button
                    onClick={() => setShowTrailer(true)}
                    className="py-2 px-4  bg-[#2227] text-gray-200 rounded-full font-semibold flex  items-center gap-2  hover:bg-blue-800  justify-center hover:scale-105 transition-all ease-in-out"
                  >
                    <FaYoutube size={18}  />
                    <span className="mx-auto">TRAILER</span>
                  </button>
                </div>
              </div>
              <div className=" flex flex-col w-11/12 px-0 lg:w-8/12 lg:mt-[-5rem] lg:px-2">
                <div className="flex w-full justify-between ">
                  <span className="font-bold text-2xl text-gray-200 md:text-[2rem]  ">
                    {data?.title || mal?.title}
                    
                  </span>
                  <span
                    className={`text-white  capitalize w-30 text-base font-bold text-end`}
                  >
                    {data?.type?.replaceAll("-", " ")}
                  </span>
                </div>
                <div className="py-2 w-10/12">
                  
                  <span
                    className={`${theme.text.notselected} flex flex-row flex-wrap justify-start w-full items-center`}
                  >
                    {console.log(data?.genre) ||
                      genres?.map((Item, index) => (
                          <Link
                            href={`/genre/${Item.split(" ").join("-")}/1`}
                            key={index}
                          >
                            <span className=" py-1 mr-2 cursor-pointer flex justify-center whitespace-nowrap items-center transform hover:scale-110 transition-transform duration-200">
                              <AiFillPlayCircle
                                size={13}
                                style={{ margin: "0px 10px" }}
                                className="text-blue-500"
                              />

                              {Item}
                            </span>
                          </Link>
                        ))}
                  </span>
                </div>

                <div className="flex flex-col w-full ">
                  <span className="flex text-blue-500 justify-between w-full items-center font-bold text-3xl">
                    Synopsis
                    <span
                      className={`${theme.text.notselected} w-12 h-12 hover:scale-110 transform transition-all duration-200`}
                      onClick={handleClick}
                    >
                      <Lottie
                        options={{
                          animationData: Heart,
                          loop: false,
                        }}
                        direction={click ? 1 : -1}
                      />
                    </span>
                  </span>
                  <span className="text-base  font-light p-2">
                    {data?.plot_summary || mal?.synopsis}
                  </span>
                </div>
                <div className="lg:hidden grid grid-cols-2 w-full justify-between items-center">
                  <div className="flex flex-col py-2 lg:hidden">
                    <span className="font-bold text-xl ">Released</span>
                    <span
                      className={`${theme.text.notselected} capitalize px-2`}
                    >
                      {data.year}
                    </span>
                  </div>
                  <div className="flex flex-col py-2 items-end">
                    <span className="text-xl font-bold">Episodes</span>
                    <span className={`${theme.text.notselected} capitalize`}>
                      {data.episodes == "0" ? "NA" : data.episodes}
                    </span>
                  </div>
                  <div className="flex flex-col py-2">
                    <span className="text-xl font-bold">Duration</span>
                    <span className={`${theme.text.notselected} capitalize`}>
                      {mal?.duration}
                    </span>
                  </div>

                  <div className="flex flex-col py-2 items-end">
                    <span className="font-bold text-xl ">Status</span>
                    <span className={`${theme.text.notselected} capitalize`}>
                      {data.status}
                    </span>
                  </div>
                  <div className="flex flex-col py-2">
                    <span className="font-bold text-xl ">Rating</span>
                    <span className={`${theme.text.notselected} capitalize`}>
                      {mal?.rating}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col py-2 lg:hidden">
                  <span className="text-xl font-bold">Episodes</span>
                  <span className="text-sm font-bold p-2">
                    {data?.episodes || mal?.total_episodes == "0" ? "NA" : data?.episodes || mal?.total_episodes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EpisodeContainer
          title={data?.title || mal?.title}
          number={data?.episodes || mal?.total_episodes}
          id={id}
          image={data?.image_url}
        />

        <Container
          Data={getMultipleRandom(randomData, 12)}
          heading={"Recommended Animes"}
        />
        {showTrailer && (
          <Backdrop onClick={handleTrailer}>
            <div className="w-[1100px] h-[600px]">
            <ReactPlayer
            url={`${mal?.trailer_url}`}
            width='100%'
            height='100%'
            config={{
              youtube: {
                playerVars: { modestbranding: 1 },
              },
            }}
            playing
          />
          </div>
          </Backdrop>
        )}
      </>
    
  );
};

export default DetailsContainer;
