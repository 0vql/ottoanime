import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import cheerio from "cheerio";
const axios = require("axios");
import { Discover } from "../../utils/data";
import {ThreeDots} from 'react-loader-spinner'


const Recently = () => {
  const [content, setContent] = useState([]);
  const [loading,setLoading] = useState(true)


  const {
    query: { pages },
  } = useRouter();


  useEffect(() => {
    setLoading(true)

    let rec = Fetching()
    
    return () => {
      rec
    }
  }, [pages]);

  const Fetching = async (e) => {

    let d = await axios.get(
      `https://ajax.gogo-load.com/ajax/page-recent-release.html?page=${pages}&type=1`
    );
    d = d.data;
    // console.log(d);
    const myList = [];
    var $ = cheerio.load(d);
    $(".items li").each(function (index, element) {
      let result = {};
      let id = $(this)
        .children("div")
        .children("a")
        .attr("href")
        .split("-episode")[0];
      let title = $(this).children("div").children("a").attr("title");
      let image_url = $(this).find("img").attr("src");
      let episode = $(this).children(".episode").text();

      result = { title, id, image_url, episode };
      myList.push(result);
    });
    setContent(myList);
    setLoading(false)
    console.log(content);
  };

  return (
    <Layout title={`Recently ${pages}`}>
      {loading ? (<div className="h-screen w-full flex justify-center items-center ">
      <ThreeDots 
   height="110" 
   width="110" 
   radius="9"
   color="#2A36F3" 
   ariaLabel="three-dots-loading"
   wrapperStyle={{}}
   
   visible={true}
    /> </div>): (

      <Container
        Data={content}
        heading={"Recently Added"}
        page={pages}
        Icon={Discover[0].icon}
        len={content.length}
      />
    )}
    </Layout>
  );
};

export default Recently;
