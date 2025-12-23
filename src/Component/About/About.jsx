// import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Aboutus from "../Aboutus/Aboutus";
import "../../Css/style.css";

const About = () => {
  return (
    <>
      <div className="dark:bg-white">
        <Menu />
        <Aboutus />
        <Footer />
      </div>
    </>
  );
};

export default About;
