import CategoryList from "../components/Categories/CategoryList";
import NewProducts from "../components/Product/NewProducts";
import HomeSlider from "../components/Sliders/HomeSlider";
import View from "../Layouts/View";

const Home = () => {
  return (
    <View>
      <HomeSlider />
      <NewProducts />
      <CategoryList />
    </View>
  );
};

export default Home;
