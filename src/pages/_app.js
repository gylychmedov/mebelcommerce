import "../styles/globals.css";
import "../styles/swiper-bundle.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CategoriesProvider } from "../components/Contexts/CategoriesContext";
import { useEffect, useState } from "react";
import { http } from "../components/API/http";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const [categories, setCategories] = useState([]);
  // const [contact, setContact] = useState([]);

  useEffect(() => {
    http.get("categories").then((res) => setCategories(res.data.data));
    // http.get("contact").then((res) => setContact(res.data.data));
  }, []);

  return (
    <motion.div
      key={route.asPath}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <CategoriesProvider value={categories}>
        <Component {...pageProps} />
      </CategoriesProvider>
    </motion.div>
  );
}

export default MyApp;
