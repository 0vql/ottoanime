import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/card/Container";
import Layout from "../../components/Layout";
import { asyncDataAction } from "../../redux/actions/asyncDataAction";
import { Discover } from "../../utils/data";
import { URL } from "../../utils/URLS";

const Recently = () => {
  const { data } = useSelector((state) => state);
  const router = useRouter();
  const { pages } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (pages) {
      var RecentURL = URL.RECENT + pages;

      dispatch(asyncDataAction(RecentURL));
    }
    console.log(data);
  }, [pages]);

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
