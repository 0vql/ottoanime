import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { Discover } from "../../utils/data";
import { URL } from "../../utils/URLS";

export async function getServerSideProps(ctx) {
  const pages = ctx.query.pages;
  var PopularURL = URL.RECENT + pages;
  const req = await fetch(PopularURL);
  const res = await req.json();

  return {
    props: {
      data: res,
    },
  };
}

const Recently = ({ data }) => {
  const router = useRouter();
  const { pages } = router.query;

  return (
    <Layout title={`Recently ${pages}`}>
      <Container
        Data={data}
        heading={"Recently Added"}
        page={[pages]}
        Icon={Discover[0].icon}
      />
    </Layout>
  );
};

export default Recently;
