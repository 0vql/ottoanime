import Navbar from "../components/nav/Navbar";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countapi from "countapi-js";


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

//  if (
//         typeof window !== "undefined" &&
//         typeof window.navigator !== "undefined" &&
//         typeof navigator !== "undefined" &&
//         navigator.userAgent
//     ) {
//         const disableDevtool = require("disable-devtool");
//         disableDevtool();
//     }
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
    countapi
      .update("animexstream.xyz", "b8a07b95-bbf6-44f1-b256-c15c5794201a", 1)
      .then((result) => {
        setVisit(result.value);
      });
  }, []);
  return (
    <div className={`${theme.background}  `}>
      

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
      
<footer className="p-4  shadow md:px-6 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AniMexStream</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">AnimexStream™</a>. All Rights Reserved.

    </span>
</footer>
    </div>
    

  );
};

const MYapp = ({ Component, pageProps }) => (
  <Provider store={Store}>
    <Head>
    <link rel="icon" href={"https://flowbite.com/images/logo.svg"} />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content="AniMex Stream | Watch HD Animes." />
        <meta name="keywords" content="animexstream,watch anime, anime online,animex stream , free anime, english anime, sites to watch anime" />
        <meta name="apple-mobile-web-app-title" content="AnimexStream" />
        <meta property="og:site_name" content="AnimexStream"/>

        <meta property="og:image" content="/icon-192x192.png " />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="Watch Anime for free in HD quality with English subbed or dubbed."
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3357173685448212"
     crossOrigin="anonymous"></script>
       
      </Head>
              <PersistGate loading={null} persistor={Persistor}>
           
            <NextProgress delay={300} height={3} options={{ showSpinner: true }} /> 
            <App Component={Component} pageProps={pageProps} />
      </PersistGate>
            


  </Provider>
);
export default MYapp;
