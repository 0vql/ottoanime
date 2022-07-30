import dynamic from "next/dynamic";
import Loader from "../Loader/Loader";
import cheerio from "cheerio";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Discover } from "../../utils/data";
const HomeContainer = dynamic(() => import("../card/HomeContainer"), {
  ssr: false,
});
// import HomeContainer from "../card/HomeContainer";
const axios = require("axios");
import Container from "../card/Container";

const HomePage = () => {
  const [dataRecently, setDataRecently] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);
  const { theme, resumeId, myList, watchList } = useSelector((state) => state);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    recentlyFetch();
    PopularFetch();
    Testing();
  }, []);

  const recentlyFetch = async () => {
    let res = await axios.get("https://ottogo.vercel.app/api/recently/1/");
    setDataRecently(res.data.slice(0, 17));
    console.log(dataRecently);
  };

  const PopularFetch = async () => {
    let res = await axios.get("https://ottogo.vercel.app/api/popular/1/");
    setDataPopular(res.data.slice(0, 17));
    console.log(dataPopular);
  };
  const Testing = async (e) => {
    let d = await axios.get(
      `https://ajax.gogo-load.com/ajax/page-recent-release.html?page=1&type=1`
    );
    d = d.data;
    // console.log(d);
    const list = [];
    var $ = cheerio.load(d);
    $(".last_episodes .items li").each(function (index, element) {
      let result = {};
      let url = $(this).children("div").children("a").attr("href");
      let title = $(this).children("div").children("a").attr("title");
      let image = $(this).find("img").attr("src");
      let episode = $(this).children(".episode").text();

      result = { title };
      myList.push({ title, url, image, episode });
      console.log(list.slice(0, 19));
    });
  };

  return (
    <div className={`mx-auto lg:px-[7rem]`}>
      {watchList.length > 0 ? (
        <Container
          Data={watchList}
          heading={"Watch List"}
          Icon={Discover[4].icon}
        />
      ) : (
        ""
      )}
      <Container
        Data={dataRecently}
        heading={"Latest Uploads"}
        Icon={Discover[0].icon}
      />
      <HomeContainer
        Data={dataPopular}
        heading={"Trending"}
        Icon={Discover[1].icon}
        to={"popular"}
      />
      {myList.length > 0 ? (
        <HomeContainer
          Data={myList}
          heading={"List"}
          Icon={Discover[2].icon}
          to={"myList"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
