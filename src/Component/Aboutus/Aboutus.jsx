import "./Aboutus.css";
import image1 from "../../image/negley-stockman-GYea2Dx6nKg-unsplash.jpg";

const Aboutus = () => {
  return (
    <>
      <div className="wrap-1 dark:bg-white">
        <div className="cont">
          <h1>/ درباره ی ما /</h1>
          <img src={image1} alt="" />
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </span>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
<></>;
