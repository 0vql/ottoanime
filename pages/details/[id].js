import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsContainer from "../../components/Details/detailsContainer";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import Head from "next/head";
import axios from "axios"
import {ThreeDots} from 'react-loader-spinner'


const Details = () => {
  // const { data } = useSelector((state) => state);
  const [data,setData] = useState({})
  const [mal,setMal] = useState()
  const [loading,setLoading] = useState(true)
  const {
    query: { id },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true)
    
      let det = fetchData();
      let ma = fetchMal()

      return () => {
        det,ma
      }   
  }, [id]);

  const fetchData = async () => {
    if (id) {
      let DETAILURL = URL.DETAILS + id;
      let req = await axios.get(DETAILURL)
      let res = req.data
      console.log(res)
      setData(res)
      
  }
      
  
  }

  const fetchMal = async () => {
    let url = `https://ottodb.vercel.app/api/mal/${id}`
    let req = await axios.get(url)
    let res = await req.data
    setMal(res)
    console.log(res)
    setLoading(false)
    
  }

  console.log(data)

  return (
    
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full mt-0 md:mt-[4rem] overflow-hidden">
      <Head>
        <title>{data?.title}</title>
        <meta property="og:title" content={data?.title} key={data?.title} />

        <meta property="og:description" content={data?.plot_summary} />
      </Head>
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

      <DetailsContainer id={id} data={data || []} mal={mal}/>
    )}
    </div>
    
  );
};

export default Details;
