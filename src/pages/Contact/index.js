import View from "../../Layouts/View";
import useTranslation from "next-translate/useTranslation";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoMailOutline, IoStorefrontOutline } from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <View title={t("contact")}>
      <main>
        <h1 className="text-3xl my-8 text-indigo-700 font-bold text-center">
          {t("contact")}
        </h1>
        <section className="grid grid-cols-12 gap-2 lg:gap-4">
          <a
            href="mailto:online@site.com"
            className="font-bold text-xl text-indigo-700 rounded-lg hover:bg-indigo-200 hover:text-indigo-900 duration-700 transform hover:scale-105 bg-indigo-50 flex justify-center items-center flex-col py-16 col-span-4"
          >
            <IoMailOutline size={56} />
            <div className="font-normal  mt-4 text-center">online@site.com</div>
          </a>

          <a
            href="tel:+908504663333"
            className="font-bold text-xl text-indigo-700 rounded-lg hover:bg-indigo-200 hover:text-indigo-900 duration-700 transform hover:scale-105 bg-indigo-50 flex justify-center items-center flex-col py-16 col-span-4"
          >
            <RiCustomerService2Line size={56} />
            <div className="font-normal  mt-4 text-center">0850 466 33 33</div>
          </a>

          <Link href="/Stories">
            <a className="font-bold text-xl text-indigo-700 rounded-lg hover:bg-indigo-200 hover:text-indigo-900 duration-700 transform hover:scale-105 bg-indigo-50 flex justify-center items-center flex-col py-16 col-span-4">
              <IoStorefrontOutline size={56} />
              <div className="font-normal  mt-4 text-center">
                Aydınevler Mahallesi, Sanayi Cad. No:5 34854 Maltepe
              </div>
            </a>
          </Link>
        </section>
      </main>
    </View>
  );
};

export default Contact;
