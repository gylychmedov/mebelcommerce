import View from "../../Layouts/View";
import useTranslation from "next-translate/useTranslation";
import { ErrorApi } from "../../components/Errors/Errors";
import { http } from "../../components/API/http";
import Contact from "../../components/Contact/Contact";

const Contacts = ({ error, contact }) => {
  const { t } = useTranslation("common");
  return (
    <View title={t("contact")}>
      {error ? <ErrorApi /> : <Contact data={contact} />}
    </View>
  );
};

export const getServerSideProps = async () => {
  try {
    const contact = await http.get(`contacts`);
    return {
      props: {
        error: false,
        contact: contact.data.data,
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

export default Contacts;
