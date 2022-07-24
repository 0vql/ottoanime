import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { Discover } from "../../utils/data";
import Head from "next/head";

export async function getServerSideProps(ctx) {
  const pages = ctx.query.pages;
  var PopularURL = URL.POPULAR + pages;
  const req = await fetch(PopularURL);
  const res = await req.json();

  return {
    props: {
      data: res,
    },
  };
}

const Popular = ({ data }) => {
  const router = useRouter();
  const { pages } = router.query;
  return (
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full lg:w-10/12 mt-20">
      <Head>
        <title>{`Popular ${pages}`}</title>
        <meta property="og:title" content="My page title" key="title" />

        <meta property="og:description" content="waaaawlad lqhaab gigigig" />
      </Head>
      <Container
        Data={data}
        heading={"Popular"}
        Icon={Discover[1].icon}
  
        page={[pages]}
        len={data.length}
      />
    </div>
  );
};

export default Popular;
