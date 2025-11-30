import "./Menu-test.css";
import imag1 from "../../sub_no_bg.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiUserOutline } from "react-icons/ti";

const Menutest = () => {
  return (
    <>
      <div className="head sticky top-0 z-2">
        <div className="w-full h-15 flex justify-center items-center">
          <div className="logo flex-1">
            <a href="index.html">
              <img src={imag1} alt="sub-logo" draggable="false" />
            </a>
          </div>
          <div className="menu flex-1 justify-center items-center">
            <nav>
              <ul>
                <li>
                  <a href="#">
                    فروشگاه (نمونه)
                    <div></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    خدمات
                    <div></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    بلاگ
                    <div></div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    تماس با ما
                    <div></div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" flex-1 flex justify-end text-xl gap-3 text-black pe-4">
            <div className="user cursor-pointer">
              <TiUserOutline />
            </div>
            <div className="shoping cursor-pointer">
              <HiOutlineShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menutest;
