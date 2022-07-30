import Layout from "../components/Layout";
import Container from "../components/card/Container";
import { useEffect, useState } from "react";
import cheerio from "cheerio";
const axios = require("axios");

// export async function getServerSideProps(ctx) {
//   const req = await fetch("https://ottogo.vercel.app/api/recently/1");
//   const res = await req.json();

//   return {
//     props: {
//       data: res,
//     },
//   };
// }

function testing() {
  const [content, setContent] = useState([])
  useEffect(() => {
    Fetching();
  }, []);

  const Fetching = async (e) => {
    let d = await axios.get(
      `https://ajax.gogo-load.com/ajax/page-recent-release.html?page=1&type=1`
    );
    d = d.data;
    // console.log(d);
    const myList = [];
    var $ = cheerio.load(d);
    $(".items li").each(function (index, element) {
      let result = {};
      let url = $(this).children("div").children("a").attr("href");
      let title = $(this).children("div").children("a").attr("title");
      let image = $(this).find("img").attr("src");
      let episode = $(this).children(".episode").text();

      result = { title, url, image, episode };
      myList.push(result)
      console.log(myList);
    });
    setContent(myList)
  };
  return (
    <Layout title="gogogoggo">
      <div className="h-full w-full text-black">
        {content.map((c,index) => (
         <div className="text-white" key={index}>
          <h1>{c.title}</h1>
          <img src={c.image} />
          <p>{c.episode}</p>
         </div>
        ))}
      </div>
    </Layout>
  );
}

export default testing;
