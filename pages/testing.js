import Layout from "../components/Layout";
import Container from "../components/card/Container";

export async function getServerSideProps(ctx) {
  const req = await fetch("https://ottogo.vercel.app/api/recently/1");
  const res = await req.json();

  return {
    props: {
      data: res,
    },
  };
}

function testing({ data }) {
  return (
    <Layout title="gogogoggo">
      <div className="h-full w-full text-black">
      <Container
        Data={data}
        heading={"Recently Added"}
        
      />
      </div>
    </Layout>
  );
}

export default testing;
