import HomeAds from "../components/Ads/HomeAds";
import HomeSlider from "../components/Sliders/HomeSlider";
import HomeTabProducts from "../components/Tabs/HomeTabProducts";
import View from "../Layouts/View";

const Home = () => {
  return (
    <View>
      <HomeSlider />
      <HomeAds />
      <HomeTabProducts />
    </View>
  );
};

export default Home;
