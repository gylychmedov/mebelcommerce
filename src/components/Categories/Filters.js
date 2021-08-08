import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";

const Filters = (props) => {
  const { t } = useTranslation("common");
  const [grid, setGrid] = useState(2);

  const handleGrid = (count) => {
    props.grid(count);
    setGrid(count);
  };

  return (
    <section className="w-full flex items-center rounded-md bg-gray-100 py-3 px-4 my-5">
      <div className="flex items-center">
        <div className="mr-2">{t("view")}:</div>
        <div
          onClick={() => handleGrid(3)}
          className={`p-2 mx-1 rounded-md hover:bg-gray-300 cursor-pointer duration-500 ${
            grid == 3 ? "bg-gray-500 text-white" : "bg-white shadow-lg"
          }`}
        >
          <BsFillGrid3X3GapFill />
        </div>
        <div
          onClick={() => handleGrid(2)}
          className={`p-2 mx-1 rounded-md hover:bg-gray-300 cursor-pointer duration-500 ${
            grid == 2 ? "bg-gray-500 text-white" : "bg-white shadow-lg"
          }`}
        >
          <BsFillGridFill />
        </div>
      </div>
    </section>
  );
};

export default Filters;
