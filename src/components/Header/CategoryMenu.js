import Link from "next/link";
import Image from "next/image";

const CategoryMenu = (props) => {
  return (
    <Link href={props.link || "/"}>
      <a
        onMouseOver={() => console.log(props)}
        className="flex flex-col items-center text-center hover:text-red-600 cursor-pointer duration-300"
      >
        <Image
          src={props.image}
          width="400"
          height="400"
          alt="img"
          className="w-12"
        />
        <div className="mt-1">{props.name}</div>
      </a>
    </Link>
  );
};

export default CategoryMenu;
