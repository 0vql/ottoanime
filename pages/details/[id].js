import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsContainer from "../../components/Details/detailsContainer";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { NextSeo } from "next-seo"

const Details = () => {
  const { data } = useSelector((state) => state);
  const {
    query: { id },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      const DETAILURL = URL.DETAILS + id;
      dispatch(asyncDataAction(DETAILURL));
    }
  }, [id]);

  return (
    <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: "https://www.url.ie/a",
        title: "Open Graph Title",
        description: "Open Graph Description",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
          {
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/jpeg",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        site_name: "SiteName",
      }}
    >
      <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full  lg:w-full mt-20">
        {data && <DetailsContainer id={id} data={data[0]} />}
      </div>{" "}
    </NextSeo>
  );
};

export default Details;
