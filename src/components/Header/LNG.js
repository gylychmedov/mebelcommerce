import Link from "next/link";
import { useRouter } from "next/router";

const LNG = () => {
  const route = useRouter();
  return (
    <Link href={route.asPath} locale={route.locale == "en" ? "fr" : "en"}>
      <a className="flex lg:mr-4 ml-3">
        <img
          src={route.locale == "en" ? "/lng/english.svg" : "/lng/france.svg"}
          className="w-8"
          alt="lng"
        />
      </a>
    </Link>
  );
};

export default LNG;
