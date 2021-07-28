import HomeAds from "../components/Ads/HomeAds";
import HomeSlider from "../components/Sliders/HomeSlider";
import View from "../Layouts/View";

const Home = () => {
  return (
    <View>
      <HomeSlider />
      <HomeAds />
    </View>
  );
};

export default Home;
