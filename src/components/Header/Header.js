import Search from "./Search";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between items-center mt-3">
        <img src="/logo.png" alt="logo" className="w-24" />
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
