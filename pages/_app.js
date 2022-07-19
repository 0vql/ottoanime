import Navbar from "../components/nav/Navbar";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import Sidebar from "../components/sidebar/sidebar";
import NextProgress from "next-progress";

import "../styles/svg.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Msg = ({ resumeId }) => {
  return (
    <div className="flex flex-col">
      <span>You were watching</span>
      <span className={"uppercase font-bold text-xl"}>
        {resumeId[0]?.split("-").join(" ")}
      </span>
      <span>
        To Continue Press <span className="text-yellow-300 text-xl ">here</span>
      </span>
    </div>
  );
};

const App = ({ Component, pageProps }) => {
  const [visit, setVisit] = useState(0);
  const { theme, resumeId } = useSelector((state) => state);
  const router = useRouter();
  useEffect(() => {
    console.log(
      "%c OTTO ANIME! ",
      "background: #222; color:#4198db ;font-size:50px"
    );
    localStorage.removeItem("persist:root");
  }, []);
  return (
    <div className={`${theme.background}  `}>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href={"/shuriken.svg"} />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favico/apple-icon-57x57.png"
        />
        
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favico/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#1a1c20" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Premium anime streaming experience "
        />
        <meta
          name="keywords"
          content="Watching,Popular,Streaming,Free,Fast,1080p,"
        />
      </Head>
      

      <Sidebar visit={visit} />
      <div className="flex justify-center">
        <Navbar visit={visit} />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

const MYapp = ({ Component, pageProps }) => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
    <NextProgress delay={300} height={5} options={{ showSpinner: false }} />
      <App Component={Component} pageProps={pageProps} />
    </PersistGate>
  </Provider>
);
export default MYapp;
