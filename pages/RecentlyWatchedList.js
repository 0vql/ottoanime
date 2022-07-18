import Link from "next/link";
import { useSelector } from "react-redux";
import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { Discover } from "../utils/data";


export const Emessage = ({ message }) => {
  const { theme } = useSelector((state) => state);
  return (
    <div className="flex flex-col h-screen justify-start items-center">
      <div className="w-full flex h-4/6 justify-center items-center">
        <img
          width={700}
          src="https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg"
        />
      </div>
      <div className=" flex flex-col justify-center items-center w-full">
        <span className={`${theme.text.notselected} text-4xl`}>
          There is nothing to see
        </span>
        {message && (
          <span className={`${theme.text.selected} py-10 font-thin text-lg`}>
            {message}
            <Link href={"/recently/1"}>
              <span
                className={` text-blue-400 mx-1 cursor-pointer font-bold text-xl `}
              >
                here
              </span>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

const RecentlyWatchedList = () => {
  const { watchList } = useSelector((state) => state);

  return (
    <Layout title={"Watch List"}>
      {watchList.length > 0 ? (
        <Container
          Data={myList}
          heading={"Recently Watched"}
          Icon={Discover[2].icon}
        />
      ) : (
        <Emessage message={"Add your WatchList animes"} />
      )}
    </Layout>
  );
};

export default RecentlyWatchedList;
