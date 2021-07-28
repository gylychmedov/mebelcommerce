import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

const View = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Ider mebel site</title>
      </Head>
      <main className="xl:px-56">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default View;
