import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
