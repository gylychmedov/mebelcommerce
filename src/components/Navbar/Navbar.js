import Categories from "../Header/Categories";
import Header from "../Header/Header";

const Navbar = () => {
  return (
    <header className="flex flex-col">
      <Header />
      <Categories />
    </header>
  );
};

export default Navbar;
