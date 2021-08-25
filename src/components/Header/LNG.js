import Link from "next/link";
import { useRouter } from "next/router";

const LNG = () => {
  const route = useRouter();
  return (
    <Link href={route.asPath} locale={route.locale == "en" ? "fr" : "en"}>
      <a className="flex lg:flex-col items-center lg:mr-4 ml-3">
        <div className="mr-1 lg:text-2xl">
          <img
            src={route.locale == "en" ? "/lng/english.svg" : "/lng/france.svg"}
            className="w-8"
            alt="lng"
          />
        </div>
      </a>
    </Link>
  );
};

export default LNG;
