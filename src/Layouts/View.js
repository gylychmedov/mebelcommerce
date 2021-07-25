import Navbar from "../components/Navbar/Navbar";

const View = (props) => {
  const { children } = props;
  return (
    <main className="xl:px-56">
      <Navbar />
      {children}
    </main>
  );
};

export default View;
