import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { Discover } from "../../utils/data";
const axios = require("axios")


export async function getServerSideProps(context) {
  let p = context.params.pages
  var PopularURL = URL.POPULAR + p;
  let req = await axios.get(PopularURL)
  let res = req.data
  

  return { props : {
    d : res,
  }}


}

const Popular = ({d}) => {
  const { data } = useSelector((state) => state);
  const router = useRouter();
  const { pages } = router.query;
  const dispatch = useDispatch();

 
console.log(d)
  return (
    <Layout title={`Popular ${pages}`}>
      <Container
        Data={d}
        heading={"Popular"}
        Icon={Discover[1].icon}
        page={[pages]}
        len={data.length}
      />
    </Layout>
  );
};

export default Popular;
