import Navbar from "../components/nav/Navbar";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (resumeId) if (resumeId) toast.info(<Msg resumeId={resumeId.data} />);
  }, []);
  return (
    <div className={`${theme.background}  `}>
      <Head>
        <link rel="icon" href={"/shuriken.svg"} />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="AniMex Stream | Watch HD Animes." />
        <meta name="apple-mobile-web-app-title" content="AniMexStream" />
        <meta property="og:image" content="/static/img/icon-192x192.png " />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="Watch Anime for free in HD quality with English subbed or dubbed."
        />
        <meta
          name="description"
          content="Watch Anime for free in HD quality with English subbed or dubbed."
        />
      </Head>

      <Sidebar visit={visit} />
      <div className="flex justify-center">
        <Navbar visit={visit} />

         <Component {...pageProps} />
      </div>
      <ToastContainer
        position={"top-center"}
        onClick={() =>
          router.push(`/watching/${resumeId.data[0]}/${resumeId.data[1]}`)
        }
        autoClose={5000}
        transition={Flip}
        draggablePercent={30}
      />
      
    </div>
  );
};

const MYapp = ({ Component, pageProps }) => (
  <Provider store={Store}>
              <PersistGate loading={null} persistor={Persistor}>
              {() => (
                <>

      <NextProgress delay={300} height={5} options={{ showSpinner: false }} />
      <App Component={Component} pageProps={pageProps} /></>)
            }

            </PersistGate>

  </Provider>
);
export default MYapp;
