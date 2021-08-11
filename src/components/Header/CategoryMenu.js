import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const CategoryMenu = (props) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <>
      <Link href={props.link || "/"}>
        <a
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex flex-col items-center text-center hover:text-red-600 cursor-pointer duration-300"
        >
          <div className="px-8 xl:px-10">
            <Image src={props.image} width="400" height="400" alt="img" />
          </div>
          <div className="mt-1 text-xs font-bold pb-3">{props.name}</div>
        </a>
      </Link>
      <div className="fixed left-0 right-0 top-64 bg-green-300 p-5">test</div>
    </>
  );
};

export default CategoryMenu;
