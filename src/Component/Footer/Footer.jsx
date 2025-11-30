import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";

const Footer = () => {
  const [hover, sethover] = useState(null);
  const [hover2, sethover2] = useState(null);
  const [hover3, sethover3] = useState(null);
  const [hover4, sethover4] = useState(null);

  const menuItems1 = [
    { id: 1, label: "تماس با ما" },
    { id: 2, label: "آدرس ما" },
    { id: 3, label: "شبکه های اجتماعی" },
  ];
  const menuItems2 = [
    { id: 1, label: "تاریخچه" },
    { id: 2, label: "درباره ما" },
  ];
  const menuItems3 = [
    { id: 1, label: "محصولات" },
    { id: 2, label: "دسته بندی ها" },
    { id: 3, label: "فروشگاه ها" },
    { id: 4, label: "ارسال به شما" },
  ];
  const menuItems4 = [
    { id: 1, label: "بلاگ" },
    { id: 2, label: "مطالب ها" },
    { id: 3, label: "اخبار" },
  ];
  return (
    <>
      <footer className="w-full h-150 flex dark:bg-white dark:text-black relative mt-3">
        <div className="address flex flex-col items-center justify-center pe-2">
          <p className="flex items-center justify-center text-3xl font-[yekan-thin] text mb-8 me-3">
            تایتل ۱
            <IoLocationOutline className="ms-2" />
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40206.362167839456!2d51.38162331497756!3d35.66103582258649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91ffcd66acf327%3A0x1e301cb16dafeaa9!2sVelayat%20Park!5e0!3m2!1sen!2sde!4v1760358532211!5m2!1sen!2sde"
            width="70%"
            height="40%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="me-3"
          ></iframe>
          <span
            className="mt-8 mb-5 flex items-center font-[yekan-thin]"
            id="add"
          >
            <CiLocationArrow1 className="me-3 ms-3" />
            تهران، بزرگراه یارجانی، چراغی، بوستان ولایت (محله‌ی بوستان ولایت)
          </span>
          <span className="flex items-center font-[yekan-thin]">
            09126***049
            <BsTelephone className="me-3 ms-3" />
          </span>
          <span className="flex items-center font-[yekan-thin]">
            2287***9
            <IoHomeOutline className="me-3 ms-3" />
          </span>
        </div>
        <div className="menuss flex justify-center font-[yekan-thin]">
          <div className="title flex text-5xl font-[yekan-thin]">
            <h2>با ما در ارتباط باشید</h2>
          </div>
          <div className="contactt flex items-center">
            <nav>
              <p draggable="false" className="font-[yekan]">
                ارباطات
              </p>
              <ul className="flex flex-col items-start text-xs">
                {menuItems1.map((item, index) => {
                  return (
                    <>
                      <li
                        key={item.id}
                        className={`w-auto flex flex-col justify-center items-center cursor-pointer  ${
                          hover == index ? "menu-active1" : "menu-not-active1"
                        }`}
                        onMouseEnter={() => sethover(index)}
                        onMouseLeave={() => sethover(null)}
                      >
                        <a href="" className="flex flex-col mb-2">
                          {item.label}
                          <div
                            className={`h-px bg-gray-600 ${
                              hover == index
                                ? "menu-line-active1"
                                : "menu-line-not1"
                            }`}
                          ></div>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="aboutt flex flex-col items-center justify-center">
            <nav>
              <p draggable="false" className="font-[yekan]">
                ارباطات
              </p>
              <ul className="flex flex-col items-start text-xs">
                {menuItems2.map((item, index) => {
                  return (
                    <>
                      <li
                        key={item.id}
                        className={`w-auto flex flex-col justify-center items-center cursor-pointer  ${
                          hover2 == index ? "menu-active1" : "menu-not-active1"
                        }`}
                        onMouseEnter={() => sethover2(index)}
                        onMouseLeave={() => sethover2(null)}
                      >
                        <a href="" className="flex flex-col mb-2">
                          {item.label}
                          <div
                            className={`h-px bg-gray-600 ${
                              hover2 == index
                                ? "menu-line-active1"
                                : "menu-line-not1"
                            }`}
                          ></div>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="productt flex flex-col items-center justify-center">
            <nav>
              <p draggable="false" className="font-[yekan]">
                ارباطات
              </p>
              <ul className="flex flex-col items-start text-xs mt-5">
                {menuItems3.map((item, index) => {
                  return (
                    <>
                      <li
                        key={item.id}
                        className={`w-auto flex flex-col justify-center items-center cursor-pointer  ${
                          hover3 == index ? "menu-active1" : "menu-not-active1"
                        }`}
                        onMouseEnter={() => sethover3(index)}
                        onMouseLeave={() => sethover3(null)}
                      >
                        <a href="" className="flex flex-col mb-2">
                          {item.label}
                          <div
                            className={`h-px bg-gray-600 ${
                              hover3 == index
                                ? "menu-line-active1"
                                : "menu-line-not1"
                            }`}
                          ></div>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="blogg flex flex-col items-center justify-center">
            <nav>
              <p draggable="false" className="font-[yekan]">
                ارباطات
              </p>
              <ul className="flex flex-col items-start text-xs mt-5">
                {menuItems4.map((item, index) => {
                  if (item.id == 1) {
                  }
                  return (
                    <>
                      <li
                        key={item.id}
                        className={`w-auto flex flex-col justify-center items-center cursor-pointer  ${
                          hover4 == index ? "menu-active1" : "menu-not-active1"
                        }`}
                        onMouseEnter={() => sethover4(index)}
                        onMouseLeave={() => sethover4(null)}
                      >
                        <a href="" className="flex flex-col mb-2">
                          {item.label}
                          <div
                            className={`h-px bg-blue-400 ${
                              hover4 == index
                                ? "menu-line-active1"
                                : "menu-line-not1"
                            }`}
                          ></div>
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="social flex">
            <CiInstagram className="itemm me-3" />
            <FaXTwitter className="itemm me-3" />
            <CiLinkedin className="itemm me-3" />
            <CiYoutube className="itemm me-3" />
          </div>
        </div>
        <div className="info w-full h-5 bg-white text-black flex justify-center items-center absolute">
          <p className="text-sm">created by subseso</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
