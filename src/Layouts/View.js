import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const View = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Ider mebel site</title>
      </Head>
      <main className="px-3 xl:px-56">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default View;
