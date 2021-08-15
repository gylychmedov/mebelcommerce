import View from "../../Layouts/View";
import useTranslation from "next-translate/useTranslation";
import { ErrorApi } from "../../components/Errors/Errors";
import { http } from "../../components/API/http";
import About from "../../components/About/About";

const Abouts = ({ error, about }) => {
  const { t } = useTranslation("common");
  return (
    <View title={t("about")}>
      {error ? <ErrorApi /> : <About data={about} />}
    </View>
  );
};

export const getServerSideProps = async () => {
  try {
    const about = await http.get(`about`);
    return {
      props: {
        error: false,
        about: about.data.data,
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

export default Abouts;
