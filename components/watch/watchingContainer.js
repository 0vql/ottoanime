import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import dynamic from 'next/dynamic'
const EpisodePagiNation = dynamic(() => import('../EpisodePagiNation'))
import { resumeAction } from "../../redux/actions/resumeAction";
import Link from "next/link";
import { addToWatchList } from "../../redux/actions/recentlyWatchedAction";
// import EpisodePagiNation from "../EpisodePagiNation";
var Buffer = require("buffer/").Buffer; // note: the trailing slash is important!
import { BsPlay } from 'react-icons/bs'

const axios = require("axios");

const WatchingContainer = ({ data, slug, frame }) => {
  
  const Myref = useRef(null);
  const { theme, loading, resumeId, watchList } = useSelector((state) => state);
  const [animeData, setAnimeData] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const [ep, setEp] = useState([]);
  const [schedule, setSchedule] = useState("");
  const [ifr, setIfr] = useState("");
  const [dataIfr, setDataIfr] = useState("");
  var myArray = [];
  const myFunc = () => {
    for (let i = ep; i >= 1; i--) {
      myArray.push(i);
    }  
  }
    
    var r =
    "https://animixplay.to/api/live" +
    window.btoa(dataIfr + "LTXs3GrU8we9O" + window.btoa(dataIfr));

  const ImageContainer = styled.div`
  
    background: linear-gradient(rgb(0 0 0 / 94%), rgb(0 0 0 / 90%)),
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
    setIfr(
      `https://animixplay.to/api/live` +
        window.btoa(data.epid + "LTXs3GrU8we9O" + window.btoa(data.epid))
    );
    setDataIfr(data.epid);
    fetchEpisodesList();
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
    fetchSchedule();
    const updateTime = setInterval(() => {
      fetchSchedule();
    }, 60000);

    return () => clearInterval(updateTime);
  }, [data, image]);

  const fetchEpisodesList = async () => {
    let res = await axios.get(
      `https://ottogo.vercel.app/api/details/${slug[0]}/`
    );
    setAnimeData(res?.data);
    setImage(res.data.image_url);
    setTitle(res.data.title);
    setEp(res.data.episodes);
    
  };

  const fetchSchedule = async () => {
    let res = await axios.get(
      `https://ottogo.vercel.app/api/schedule/${slug[0]}/`
    );

    setSchedule(res.data?.time || "");
  };

  return (
    <>
      <ImageContainer></ImageContainer>
      <div />
      <div className="relative flex justify-center items-center mx-auto text-center flex-col lg:h-full w-full lg:w-[1100px] xl:w-[1345px] px-2 ">
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
            {/* <div
              className={`bg-gray-400 rounded-full h-0.5 ml-0 lg:ml-11 w-1/12`}
            /> */}
          </div>
          <div className="flex w-full justify-between items-end">
            
            <span
              className={`text-blue-400 ml-0 lg:ml-10 text-1xl lg:text-2xl`}
            >
              {ep == slug[1] ? schedule && "Next: " + schedule : null}
            </span>
          </div>
        </div>

        <div className="ifr-container flex w-full  justify-center items-center p-0 md:p-4 flex-col-reverse ">
          <div className="flex flex-col-reverse md:flex-row w-full drop-shadow-2xl	">
            <div className="w-full md:block md:w-[12.5rem] lg:w-[16rem] bg-[#100f0f] md:bg-[#00000087]">
              <div className="flex flex-col text-white h-[350px] md:h-[500px] lg:h-[619px] xl:h-[610px] overflow-y-scroll">
                 <div className="p-2 font-bold border-b-2 border-slate-600 border-double">
                 Episodes
                 </div>
              {(myFunc(),
          myArray.reverse().map((ep) => (
                <Link key={ep} href={`/watching/${slug[0]}/${ep}`}>
                <div className="m-[1px]">
                <span className={slug[1] == ep ? "bg-blue-500 p-3 cursor-pointer flex justify-between font-bold " : 
                 `p-2 cursor-pointer flex justify-between font-light bg-[#8080801a]
                  hover:bg-[#8080802b] hover:font-bold `}>
                    <h2>Episode {ep} </h2> <span><BsPlay strokeWidth={0.5} size={26} className={slug[1] == ep ? "text-white " : "text-blue-500"}/></span></span>
                </div></Link>)))}
              </div>
            </div> 
            <iframe
              className="w-full h-[225px] md:h-[500px] lg:h-[619px] xl:h-[610px] drop-shadow-xl "
              src={frame}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>

          <EpisodePagiNation
            page={[slug[0], slug[1]]}
            heading={"Ep"}
            total={ep}
            episodeid={data.epid}
          />
        </div>
      </div>
    </>
  );
};

export default WatchingContainer;
