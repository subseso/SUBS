import "./Sec2.css";
import { IoMdHammer } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoSparklesOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiBrightnessUp } from "react-icons/ci";
// import img1 from "../../aleksandr-zaitsev-DKGEXvCRuN0-unsplash.jpg";
import img2 from "../../image/saturated-Sl9TQDIM5Z8-unsplash.jpg";

const Sec2 = () => {
  return (
    <>
      <hr />
      <div className="sec-1 flex h-200 mt-20 mb-20">
        <div className="sec-dec-1 flex flex-col items-center justify-center">
          <div className="dec-title flex justify-center items-center mb-16">
            <h3 className="text-5xl font-[yekan] mt-3 me-3">
              ساخت ایده های شما
            </h3>
            <CiBrightnessUp fontSize={80} />
          </div>
          <table className="w-90 table-auto">
            <tbody>
              <tr className="flex justify-center mb-2 items-center text-xl text-black p-4 font-[dana-thin]">
                <td className="flex">
                  <IoMdHammer color="#EBEBEB" />
                  <p className="ms-4">امکان انجام کار به درستی</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="flex justify-cente mb-2 items-center text-xl text-black p-4 font-[dana-thin] ">
                <td className="flex">
                  <FaEarthAmericas color="#EBEBEB" />
                  <p className="ms-4">خلاقیت بیشتر و ایده های جدید</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr className="flex justify-center items-center text-xl text-black p-4 font-[dana-thin]">
                <td className="flex">
                  <IoSparklesOutline color="#EBEBEB" />
                  <p className="ms-4">سرعت زیاد ویژگی بصری</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="sec-but-1 flex justify-center items-center mt-20 w-90 h-15 text-mg font-[yekan]">
            <p className="me-1.5">بیشتر بدانید</p>
            <FaAngleLeft />
          </div>
        </div>
        <div className="sec-pic-1">
          <img src={img2} alt="section-picture-1" draggable="false" />
        </div>
      </div>
    </>
  );
};

export default Sec2;
