import "./Sec3.css";
import { FaBrain } from "react-icons/fa";
// import image1 from "../../brooke-balentine-Mfto8On3IsY-unsplash.jpg";
import image2 from "../../image/meritt-thomas-lW5yf-EQFDs-unsplash.jpg";
import { FaAngleLeft } from "react-icons/fa";

const Sec3 = () => {
  return (
    <>
      <hr />
      <div className="sec-3 flex h-200 mt-20">
        <div className="sec-pic-3 ms-3">
          <img src={image2} alt="section-picture-1" draggable="false" />
        </div>
        <div className="sec-dec-3 flex flex-col items-center justify-center">
          <div className="dec-title flex justify-center items-center mb-16">
            <h3 className="text-5xl font-[yekan] mt-3 me-3 text-black">
              از ایده تا اجرا
            </h3>
            <FaBrain fontSize={60} color="black" />
          </div>
          <div className="para text-center w-120">
            <span className="text-black font-[dana-thin] font-extrabold">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد،
            </span>
          </div>
          <div className="sec-but-3 flex justify-center items-center mt-20 w-90 h-15 text-black bg-white text-mg font-[yekan]">
            <p className="me-1.5">بیشتر بدانید</p>
            <FaAngleLeft />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Sec3;
