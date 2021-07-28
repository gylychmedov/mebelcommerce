import Search from "./Search";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between items-center mt-3">
        <div className="p-5 w-24">
          <img src="/logo.png" alt="logo" className="w-full" />
        </div>
        <Search />
        <aside className="flex">
          <div className="flex flex-col items-center mx-2">
            <span>Text</span>
            <span>Text</span>
          </div>

          <div className="flex flex-col items-center">
            <span>Text</span>
            <span>Text</span>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Header;
