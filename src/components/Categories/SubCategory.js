const SubCategory = () => {
  return (
    <div className="relative transform duration-500 hover:-translate-y-1 my-5 rounded-md">
      <img
        src="/categories/sub-1.webp"
        alt="sub"
        className="w-full rounded-md"
      />

      <div className="bg-gray-900 hover:bg-opacity-60 duration-1000 text-white text-center font-bold px-5 text-lg absolute top-0 left-0 right-0 w-full h-full bg-opacity-30 flex justify-center items-center">
        Category Name
      </div>
    </div>
  );
};

export default SubCategory;
