import Head from "next/head";

const Layout = ({ children, title = "Animex" }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full lg:w-10/12 mt-20">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
