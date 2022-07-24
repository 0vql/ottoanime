import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { Discover } from "../../utils/data";

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
    <Layout title={"Popular"}>
      <Container
        Data={data}
        heading={"Popular"}
        Icon={Discover[1].icon}
        page={[pages]}
        len={data.length}
      />
    </Layout>
  );
};

export default Popular;
