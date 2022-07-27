
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Discover } from "../../utils/data";
import HomeContainer from "../card/HomeContainer";
const axios = require('axios'); 







const HomePage = () => {

  const [dataRecently, setDataRecently] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);
  const { theme, resumeId, myList, watchList } = useSelector((state) => state);

  useEffect(() => {
    recentlyFetch();
    PopularFetch();
  }, []);

  const recentlyFetch = async () => {
    let res = await axios.get(
      "https://ottogo.vercel.app/api/recently/1/"
    );
    setDataRecently(res.data.slice(0,17));
    console.log(dataRecently);
  };

  const PopularFetch = async () => {
    let res = await axios.get(
      "https://ottogo.vercel.app/api/popular/1/"
    );
    setDataPopular(res.data.slice(0,17));
    console.log(dataPopular);
  };

  return (
    <div className={`mx-auto lg:px-[7rem]`}>
      {watchList.length > 0 ? (
        <HomeContainer Data={watchList} heading={"Watch List"} Icon={Discover[4].icon} to={"recentlyWatched"}/>
      ) : (
        ""
      )}
    <HomeContainer
            Data={dataRecently}
            heading={"Latest Uploads"}
            Icon={Discover[0].icon}
            to={"recentlyadded"}
          />
          <HomeContainer
            Data={dataPopular}
            heading={"Trending"}
            Icon={Discover[1].icon}
            to={"popular"}
          />
          {myList.length > 0 ? (
        <HomeContainer Data={myList} heading={"List"} Icon={Discover[2].icon} to={"myList"} />
      ) : (
        ""
      )}
          </div>
  );
};

export default HomePage;
