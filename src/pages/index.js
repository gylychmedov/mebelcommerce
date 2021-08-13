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
          <NewProducts />
          <CategoryList />
        </>
      )}
    </View>
  );
};

export const getServerSideProps = async () => {
  try {
    const sliders = await http.get("sliders");
    return {
      props: {
        sliders: sliders.data.data,
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
