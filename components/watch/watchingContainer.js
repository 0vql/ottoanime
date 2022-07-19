import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { resumeAction } from "../../redux/actions/resumeAction";
import Link from "next/link";
import PagiNation from "../PagiNation";
import { addToWatchList } from "../../redux/actions/recentlyWatchedAction";

const WatchingContainer = ({ data, slug, episodes_num }) => {
  const Myref = useRef(null);
  const { theme, loading, resumeId, watchList } = useSelector((state) => state);
  const [animeData, setAnimeData] = useState([])
  const [image , setImage] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addToWatchList({
        id: slug[0],
        image_url: image,
        title: slug[0].replaceAll("-", " ").toUpperCase(),
        episode : slug[1]
      })
    );
    fetchEpisodesList();
  },[data]);

  const fetchEpisodesList = async () => {
    let req = await fetch(`https://ottogo.vercel.app/api/details/${slug[0]}/`);
    let res = await req.json();
    setAnimeData(res)
    setImage(res?.image_url)
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="relative flex justify-center items-center text-left flex-col lg:h-full w-full px-2 ">
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
          <span
            className={`${theme.text.selected} ml-0 lg:ml-10 text-3xl lg:text-3xl`}
          >
            {"Ep:" + slug[1]}
          </span>
        </div>
      </div>
      <div className="ifr-container flex w-full justify-center items-center flex-col-reverse lg:flex-row">
        <>
          <iframe
            className="w-full h-[22rem] md:h-[492px] lg:h-[600px] xl:h-[650px] 2xl:h-[94vh] drop-shadow-sm "
           
            src={data.iframe}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </>
      </div>
      <PagiNation
        page={[slug[0], slug[1]]}
        heading={"Ep"}
        total={episodes_num}
      />
    </div>
  );
};

export default WatchingContainer;
