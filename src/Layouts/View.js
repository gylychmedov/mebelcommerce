import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const View = (props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title && `${title} | `} MozaikDeco</title>
      </Head>
      <Navbar />

      <main className="px-2 lg:px-16 xl:px-56">{children}</main>
      <Footer />
    </>
  );
};

export default View;
