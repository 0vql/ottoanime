import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import { AiFillPlayCircle } from "react-icons/ai";
import axios from "axios"
import {ThreeDots} from 'react-loader-spinner'



const Genres = () => {
  // const { data } = useSelector((state) => state);
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([])


  const {
    query: { pages },
  } = useRouter();
  const dispatch = useDispatch();



  useEffect(() => {
    setLoading(true)

    const pop = fetchData();

    return () => {
      pop
    }
  }, [pages]);

  const fetchData = async () => {
    const GENREURL = URL.GENRES + pages.join("/");
    let req = await axios.get(GENREURL)
    let res = req.data
    setData(res)
  setLoading(false)
}

  return (
    <Layout title={pages?.[0]}>
      {loading ? (<div className="h-screen w-full flex justify-center items-center ">
      <ThreeDots 
   height="110" 
   width="110" 
   radius="9"
   color="#2A36F3" 
   ariaLabel="three-dots-loading"
   wrapperStyle={{}}
   
   visible={true}
    /> </div>) : (

      <Container
        Data={data}
        Icon={AiFillPlayCircle}
        heading={"Genres"}
        page={pages}
        len={data.length}
      />
    )}
    </Layout>
  );
};

export default Genres;
