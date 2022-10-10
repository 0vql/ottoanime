import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import {Discover} from "../../utils/data"
import {ThreeDots} from 'react-loader-spinner'
import axios from "axios"


const Season = () => {
  // const { data } = useSelector((state) => state);
  const [data,setData] = useState([])
  const router = useRouter();
  const [loading,setLoading] = useState(true)

  const { pages } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true)

    const sea = fetchData();

    return () => {
      sea
    }
  }, [pages]);

  const fetchData = async () => {
    var NewSeasonURL = URL.SEASON + pages;
    let req = await axios.get(NewSeasonURL)
    let res = req.data
    setData(res)
  setLoading(false)
}

  return (
    <Layout title={"New Season"}>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center ">
      <ThreeDots 
   height="110" 
   width="110" 
   radius="9"
   color="#2A36F3" 
   ariaLabel="three-dots-loading"
   wrapperStyle={{}}
   
   visible={true}
    /> </div>

      ) : (

        <Container Data={data} heading={"New Season"} Icon={Discover[1].icon} page={[pages]} len={data.length}/>
      )}
    </Layout>
  );
};

export default Season;
