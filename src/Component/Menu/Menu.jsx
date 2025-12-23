import imag1 from "../../image/sub_no_bg.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiUserOutline } from "react-icons/ti";
import "./Menu.css";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
  const [hover, sethover] = useState(null);
  const menuItems = [
    { id: 1, label: "(نمونه) فروشگاه" },
    { id: 2, label: "خدمات" },
    { id: 3, label: "بلاگ" },
    { id: 4, label: "تماس با ما" },
  ];
  function useScroll() {
    const [scroll, setScroll] = useState(null);
    useEffect(() => {
      let finalScrollY = window.scrollY;

      const updateScroll = () => {
        const scrollYY = window.scrollY;
        const direction = scrollYY > finalScrollY ? "down" : "up";
        if (
          direction != scroll &&
          (scrollYY - finalScrollY > 10 || scrollYY - finalScrollY < -10)
        ) {
          setScroll(direction);
        }
        finalScrollY = scrollYY > 0 ? scrollYY : 0;
      };
      window.addEventListener("scroll", updateScroll);
      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    }, [scroll]);
    return scroll;
  }
  const [isNearTop, setIsNearTop] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsNearTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDirection = useScroll();
  return (
    <>
      <div
        className={`head dark:bg-white w-full fixed flex top-0 z-200 ${
          scrollDirection === "down" ? "hide" : "show"
        } ${isNearTop ? "bgg" : "nobg"}`}
        ref={boxRef}
      >
        <div className="w-full h-12 flex justify-center items-center">
          <div className="logo flex-1">
            <a href="/" className="block w-32">
              <img
                src={imag1}
                alt="sub-logo"
                draggable="false"
                className="w-32 h-12 cursor-pointer"
              />
            </a>
          </div>
          <div className="menuuu flex-1 justify-center items-center text-black relative">
            <nav>
              <ul className="flex justify-center relative">
                {menuItems.map((item, index) => {
                  if (item.id == 1 && hover == index) {
                    console.log("hi");
                    return (
                      <>
                        <li
                          key={item.id}
                          className={`w-auto flex flex-col justify-center items-end ms-3.5 me-3.5 cursor-pointer ${
                            hover == index ? "menu-active1" : "menu-not-active1"
                          }`}
                          onMouseEnter={() => sethover(index)}
                          onMouseLeave={() => sethover(null)}
                        >
                          <a href="" className="flex flex-col z-5">
                            {item.label}
                            <div
                              className={`h-px bg-black ${
                                hover == index
                                  ? "menu-line-active1"
                                  : "menu-line-not1"
                              }`}
                            ></div>
                          </a>
                          <div className="submenu z-3">
                            <div className="hrline"></div>
                          </div>
                        </li>
                        <div className="wrapperr z-1"></div>
                      </>
                    );
                  }
                  if (item.id == 2 && hover == index) {
                    console.log("hi");
                    return (
                      <>
                        <li
                          key={item.id}
                          className={`w-auto flex flex-col justify-center items-center ms-3.5 me-3.5 cursor-pointer  ${
                            hover == index ? "menu-active1" : "menu-not-active1"
                          }`}
                          onMouseEnter={() => sethover(index)}
                          onMouseLeave={() => sethover(null)}
                        >
                          <a
                            href="../../../public/product.html"
                            className="flex flex-col z-5"
                          >
                            {item.label}
                            <div
                              className={`h-px bg-black ${
                                hover == index
                                  ? "menu-line-active1"
                                  : "menu-line-not1"
                              }`}
                            ></div>
                          </a>
                          <div className="submenu z-3">
                            <div className="hrline"></div>
                          </div>
                        </li>
                        <div className="wrapperr z-1"></div>
                      </>
                    );
                  }
                  if (item.id == 3 && hover == index) {
                    console.log("hi");
                    return (
                      <>
                        <li
                          key={item.id}
                          className={`w-auto flex flex-col justify-center items-center ms-3.5 me-3.5 cursor-pointer  ${
                            hover == index ? "menu-active1" : "menu-not-active1"
                          }`}
                          onMouseEnter={() => sethover(index)}
                          onMouseLeave={() => sethover(null)}
                        >
                          <a href="" className="flex flex-col z-5">
                            {item.label}
                            <div
                              className={`h-px bg-black ${
                                hover == index
                                  ? "menu-line-active1"
                                  : "menu-line-not1"
                              }`}
                            ></div>
                          </a>
                        </li>
                      </>
                    );
                  }
                  if (item.id == 4 && hover == index) {
                    console.log("hi");
                    return (
                      <>
                        <li
                          key={item.id}
                          className={`w-auto flex flex-col justify-center items-center ms-3.5 me-3.5 cursor-pointer  ${
                            hover == index ? "menu-active1" : "menu-not-active1"
                          }`}
                          onMouseEnter={() => sethover(index)}
                          onMouseLeave={() => sethover(null)}
                        >
                          <a href="/about" className="flex flex-col z-5">
                            {item.label}
                            <div
                              className={`h-px bg-black ${
                                hover == index
                                  ? "menu-line-active1"
                                  : "menu-line-not1"
                              }`}
                            ></div>
                          </a>
                        </li>
                      </>
                    );
                  }
                  return (
                    <>
                      <li
                        key={item.id}
                        className={`w-auto flex flex-col justify-center items-center ms-3.5 me-3.5 cursor-pointer ${
                          hover == index ? "menu-active1" : "menu-not-active1"
                        }`}
                        onMouseEnter={() => sethover(index)}
                        onMouseLeave={() => sethover(null)}
                      >
                        <a href="" className="flex flex-col z-5">
                          {item.label}
                          <div
                            className={`h-px bg-black ${
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

export default Menu;
