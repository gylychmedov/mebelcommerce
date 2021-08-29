import { useRouter } from "next/router";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoMailOutline, IoStorefrontOutline } from "react-icons/io5";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Contact = ({ data }) => {
  const route = useRouter();
  const { t } = useTranslation("common");
  return (
    <main>
      <h1 className="text-3xl my-8 text-indigo-700 font-bold text-center">
        {t("contact")}
      </h1>
      <section className="grid grid-cols-12 gap-2 lg:gap-4">
        {data.email && (
          <a
            href={`mailto:${data.email}`}
            className="font-bold text-xl text-indigo-700 rounded-lg hover:bg-indigo-200 hover:text-indigo-900 duration-700 transform hover:scale-105 bg-indigo-50 flex justify-center items-center flex-col py-16 col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <IoMailOutline size={56} />
            <div className="font-normal  mt-4 text-center">{data.email}</div>
          </a>
        )}
        {data.phone && (
          <a
            href={`tel:${data.phone}`}
            className="font-bold text-xl text-indigo-700 rounded-lg hover:bg-indigo-200 hover:text-indigo-900 duration-700 transform hover:scale-105 bg-indigo-50 flex justify-center items-center flex-col py-16 col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <RiCustomerService2Line size={56} />
            <div className="font-normal  mt-4 text-center">{data.phone}</div>
          </a>
        )}
        {data.address_en && (
          <Link href="/stories">
            <a className="font-bold text-xl text-indigo-700 rounded-lg hover:bg-indigo-200 hover:text-indigo-900 duration-700 transform hover:scale-105 bg-indigo-50 flex justify-center items-center flex-col py-16 col-span-12 sm:col-span-6 lg:col-span-4">
              <IoStorefrontOutline size={56} />
              <div className="font-normal  mt-4 text-center">
                {route.locale == "en" ? data.address_en : data.address_fr}
              </div>
            </a>
          </Link>
        )}
      </section>
    </main>
  );
};

export default Contact;
