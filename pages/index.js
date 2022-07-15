import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Discover } from "../utils/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="absolute w-full top-0 right-0 left-0 bottom-0 block">
        <Image
          src="/bg-anime1.jpg"
          width={2100}
          height={1080}
          alt="Picture of the author"
          objectFit="contain"
        />
        <div className="text-white flex w-full flex-col items-center justify-center max-w-2xl mx-auto gap-6 ">
          <h1 className="text-4xl font-bold">
            Watch Free HD Hentai & Anime Videos Enjoy your unlimited hentai &
            anime collection.
          </h1>
          <div><p>
            We are the definitive source for the best curated 720p / 1080p HD
            hentai videos, viewable by mobile phone and tablet, for free.
          </p></div>
          
        </div>
      </div>
    </div>
  );
}
