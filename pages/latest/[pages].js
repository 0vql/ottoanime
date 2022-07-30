import Layout from "../../components/Layout";
import Container from "../../components/card/Container";
import { useEffect, useState } from "react";
import cheerio from "cheerio";
const axios = require("axios");
import { useRouter } from "next/router";
import { AiFillPlayCircle } from "react-icons/ai";


// export async function getServerSideProps(ctx) {
//   const req = await fetch("https://ottogo.vercel.app/api/recently/1");
//   const res = await req.json();

//   return {
//     props: {
//       data: res,
//     },
//   };
// }

function Latest() {
  const [content, setContent] = useState([]);

  const {
    query: { pages },
  } = useRouter();
  useEffect(() => {
    Fetching();
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
      let url = $(this).children("div").children("a").attr("href");
      let title = $(this).children("div").children("a").attr("title");
      let image_url = $(this).find("img").attr("src");
      let episode = $(this).children(".episode").text();

      result = { title, url, image_url, episode };
      myList.push(result);
      
    });
    setContent(myList);
    console.log(content)
  };
  return (
    <Layout title="gogogoggo">
      <Container
        Data={content}
        page={pages}
        Icon={AiFillPlayCircle}
        heading={"Recently Watched"}
        len={content.length}
      />
    </Layout>
  );
}

export default Latest;
