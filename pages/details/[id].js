import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsContainer from "../../components/Details/detailsContainer";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import Head from "next/head";
import axios from "axios"

const Details = () => {
  // const { data } = useSelector((state) => state);
  const [data,setData] = useState(null)
  const {
    query: { id },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    
      let det = fetchData();

      return () => {
        det
      }   
  }, [id]);

  const fetchData = async () => {
      let  DETAILURL = URL.DETAILS + id;
      let req = await axios.get(DETAILURL)
      let res = req.data
      setData(res)
  }

  return (
    
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full mt-0 md:mt-[4rem] overflow-hidden">
      <Head>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} key={data.title} />

        <meta property="og:description" content={data.plot_summary} />
      </Head>

      {data && <DetailsContainer id={id} data={data[0]} />}
    </div>
    
  );
};

export default Details;
