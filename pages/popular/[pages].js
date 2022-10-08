import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { Discover } from "../../utils/data";
const axios = require("axios")


const Popular = () => {
  // const { data } = useSelector((state) => state);
  const [data,setData] = useState([])
  const router = useRouter();
  const { pages } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const pop = fetchData();

    return () => {
      pop
    }
  }, [pages]);


const fetchData = async () => {
    var PopularURL = URL.POPULAR + pages;
    let req = await axios.get(PopularURL)
    let res = req.data
    setData(res)

}

  return (
    <Layout title={`Popular ${pages}`}>
      <Container
        Data={data}
        heading={"Popular"}
        Icon={Discover[1].icon}
        page={[pages]}
        len={data?.length}
      />
    </Layout>
  );
};

export default Popular;
