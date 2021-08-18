import { http } from "../components/API/http";
import CategoryList from "../components/Categories/CategoryList";
import { ErrorApi } from "../components/Errors/Errors";
import NewProducts from "../components/Sliders/NewProducts";
import HomeSlider from "../components/Sliders/HomeSlider";
import View from "../Layouts/View";

const Home = (props) => {
  return (
    <View>
      {props.error ? (
        <ErrorApi />
      ) : (
        <>
          <HomeSlider data={props.sliders} />
          <NewProducts data={props.products} />
          <CategoryList data={props.categories} />
        </>
      )}
    </View>
  );
};

export const getServerSideProps = async () => {
  try {
    const sliders = await http.get("sliders");
    const categories = await http.get("categories");
    const NewProducts = await http.get("products/new");
    return {
      props: {
        sliders: sliders.data.data,
        categories: categories.data.data,
        products: NewProducts.data.data,
        error: false,
      },
    };
  } catch {
    return {
      props: {
        error: true,
      },
    };
  }
};

export default Home;
