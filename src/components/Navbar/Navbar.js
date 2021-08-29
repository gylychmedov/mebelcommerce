import Categories from "../Header/categories";
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
