import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { resumeAction } from "../../redux/actions/resumeAction";
import Link from "next/link";
import { addToWatchList } from "../../redux/actions/recentlyWatchedAction";
import EpisodePagiNation from "../EpisodePagiNation";

const axios = require("axios");

const WatchingContainer = ({ data, slug }) => {
  const Myref = useRef(null);
  const { theme, loading, resumeId, watchList } = useSelector((state) => state);
  const [animeData, setAnimeData] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const [ep, setEp] = useState([]);
  const [schedule, setSchedule] = useState("");
  const ImageContainer = styled.div`
    background: linear-gradient(rgb(0 0 0 / 94%), rgb(0 0 0 / 58%)),
      url(${image}) 0% 0% / cover no-repeat fixed;
    height: 100vh;
    width: 100%;
    filter: blur(8px);
    /* z-index: 1; */
    position: fixed;
    left: 0;
    right: 0;
    background-position: center;
  `;

  useEffect(() => {
    fetchEpisodesList();
    fetchSchedule();
    const updateTime = setInterval(() => {
      fetchSchedule();
    }, 60000);
    return () => clearInterval(updateTime);
    dispatch(
      addToWatchList({
        id: slug[0],
        image_url: image,
        title: title,
        episode: slug[1],
      })
    );

    dispatch(
      resumeAction({
        data: slug,
        time: 0,
      })
    );
  }, [data, image, schedule]);

  const fetchEpisodesList = async () => {
    let res = await axios.get(
      `https://ottogo.vercel.app/api/details/${slug[0]}/`
    );
    setAnimeData(res?.data);
    setImage(res.data.image_url);
    setTitle(res.data.title);
    setEp(res.data.episodes);
    console.log(res.data.episodes);
    console.log(animeData);
    console.log(animeData?.title);
  };

  const fetchSchedule = async () => {
    let res = await axios.get(
      `https://ottogo.vercel.app/api/schedule/${slug[0]}/`
    );

    setSchedule(res.data.time || "");
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <ImageContainer></ImageContainer>
      <div className="relative flex justify-center items-center mx-auto text-center flex-col lg:h-full w-full lg:w-[960px] px-2 ">
        <div
          className={` flex flex-col pb-2 xl:w-full justify-between items-center w-full ${theme.text.selected}   my-4`}
        >
          <div className="w-full py-4 uppercase flex flex-col items-start lg:items-start">
            <Link href={`/details/${slug[0]}`}>
              <span
                className={`text-1xl lg:text-3xl ml-0 lg:ml-10 cursor-pointer text-blue-500`}
              >
                {slug[0].replaceAll("-", " ")}
              </span>
            </Link>
            <div
              className={`bg-gray-400 rounded-full h-0.5 ml-0 lg:ml-11 w-1/12`}
            />
          </div>
          <div className="flex w-full justify-between items-end">
            <span className={`text-white ml-0 lg:ml-10 text-3xl lg:text-3xl`}>
              {"Ep:" + slug[1]}
            </span>
            <span
              className={`text-blue-400 ml-0 lg:ml-10 text-1xl lg:text-2xl`}
            >
              {ep == slug[1] ? schedule && "Next: " + schedule : null}
            </span>
          </div>
        </div>

        <div className="ifr-container flex w-full  justify-center items-center p-0 md:p-4 flex-col-reverse ">
          <iframe
            className="w-full h-[380px] md:h-[500px] lg:h-[619px] drop-shadow-sm "
            src={data.iframe}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
          <EpisodePagiNation
            page={[slug[0], slug[1]]}
            heading={"Ep"}
            total={ep}
          />
        </div>
      </div>
    </>
  );
};

export default WatchingContainer;
