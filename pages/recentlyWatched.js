import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { Discover } from "../utils/data";

function RecentlyWatched() {
  const { watchList } = useSelector((state) => state);

  useEffect(() => {
    console.log(watchList);
  }, []);

  return <div>recentlyWatched</div>;
}

export default RecentlyWatched;
