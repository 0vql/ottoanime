import Card from "./Card";
import { useSelector } from "react-redux";
import PagiNation from "../PagiNation";
import Loader from "../Loader/Loader";
function HomeContainer({ Data = [], heading, page, Icon }) {
  const { theme, loading } = useSelector((state) => state);
  console.log(Data);
  return (
    <>
      <div className="grid grid-cols-3  w-full px-2 my-6  gap-2  justify-center  md:grid-cols-3 xl:grid-cols-4 lg:px-16 lg:my-16   2xl:grid-cols-6 xl:gap-4">
        {Data?.map((item, index) => (
          <Card {...item} key={index} heading={heading} />
        ))}
      </div>
    </>
  );
}

export default HomeContainer;
