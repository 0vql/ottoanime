import Head from "next/head";

const Layout = ({ children, title = "Animex Stream" }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full lg:w-10/12 mt-20">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />

        <meta property="og:description" content="waaaawlad lqhaab gigigig" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
