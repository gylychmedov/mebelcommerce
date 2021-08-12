import { AiFillWarning } from "react-icons/ai";

export const ErrorApi = () => {
  return (
    <div className="bg-red-500 items-center rounded-xl my-5 p-5 text-lg flex text-white">
      <AiFillWarning className="mr-2" /> Error API
    </div>
  );
};
