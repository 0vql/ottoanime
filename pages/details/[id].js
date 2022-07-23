import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsContainer from "../../components/Details/detailsContainer";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
const Details = () => {
  const { data } = useSelector((state) => state);
  const {
    query: { id },
  } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      const DETAILURL = URL.DETAILS + id;
      dispatch(asyncDataAction(DETAILURL));
    }
  }, [id]);

  return (
    <Layout title={data.title + " | " + "AniMeXStream"}>
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full  lg:w-full mt-20">
      {data && <DetailsContainer id={id} data={data[0]} />}
    </div>
    </Layout>
  );
};

export default Details;
