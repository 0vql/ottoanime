import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { Discover } from "../../utils/data";
import {ThreeDots} from 'react-loader-spinner'

import axios from "axios"


const Popular = () => {
  const [loading,setLoading] = useState(true)

  // const { data } = useSelector((state) => state);
  const [data,setData] = useState([])
  const router = useRouter();
  const { pages } = router.query;
  const dispatch = useDispatch();
  

  useEffect(() => {
    setLoading(true)

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
  setLoading(false)
}

  return (
    <Layout title={`Popular ${pages}`}>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center ">
        <ThreeDots 
     height="110" 
     width="110" 
     radius="9"
     color="#1C25B2" 
     ariaLabel="three-dots-loading"
     wrapperStyle={{}}
     
     visible={true}
      /> </div>
      ) : (

      <Container
        Data={data}
        heading={"Popular"}
        Icon={Discover[1].icon}
        page={[pages]}
        len={data?.length}
      />
      )}
    </Layout>
  );
};

export default Popular;
