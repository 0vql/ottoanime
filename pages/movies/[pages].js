import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { URL } from "../../utils/URLS";
import {Discover} from "../../utils/data"
const Movies = () => {
  const { data } = useSelector((state) => state);
  const router = useRouter();
  const { pages } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pages) {
      var MoviesURL = URL.MOVIES + pages;

      dispatch(asyncDataAction(MoviesURL));
    }
    console.log(data)
  }, [pages]);

  return (
    <Layout title={"Movies"}>
      <Container Data={data} heading={"Movies"} Icon={Discover[1].icon} page={[pages]} />
    </Layout>
  );
};

export default Movies;
