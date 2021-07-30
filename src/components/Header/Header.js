import Search from "./Search";
import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between items-center mt-3">
        <div className="p-5 w-24">
          <Link href="/">
            <a>
              <Image
                width="300"
                height="300"
                src="/logo.png"
                alt="logo"
                className="w-full"
              />
            </a>
          </Link>
        </div>
        <Search />
        <aside className="flex">
          <div className="flex flex-col items-center mx-4">
            <span>
              <BiSupport size="28" color="#313131" />
            </span>
            <span>8 62 81-87-25 </span>
          </div>

          <div className="flex flex-col items-center">
            <span>
              <ImLocation2 size="28" color="#313131" />
            </span>
            <span>Our stories</span>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Header;
