import "./Diff.css";
import img1 from "../clouds-01213.jpg";
import img2 from "../clouds-01214.jpg";
import { useEffect, useRef } from "react";

const Diff = () => {
  const objRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const obj = objRef.current;
    const page = pageRef.current;

    if (!obj || !page) return;

    const handleMouseDown = () => {
      obj.classList.add("borderactive");

      const handleMouseMove = (e) => {
        obj.style.transform = `translate(${
          e.clientX - obj.clientWidth / 2
        }px, ${e.clientY - obj.clientHeight / 2}px)`;
      };

      page.addEventListener("mousemove", handleMouseMove);

      const handleMouseUp = () => {
        obj.classList.remove("borderactive");
        page.removeEventListener("mousemove", handleMouseMove);
      };

      page.addEventListener("mouseup", handleMouseUp, { once: true });
    };

    obj.addEventListener("mousedown", handleMouseDown);

    return () => {
      obj.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return (
    <>
      <div className="diff-div">
        <div className="diff flex justify-center" ref={pageRef}>
          <img src={img1} alt="" id="image-1" draggable="false" />
          <div
            className="diff-line w-0.5 absolute top-0 bg-blue-800 cursor-pointer"
            ref={objRef}
          ></div>
          <img src={img2} alt="" id="image-2" draggable="false" />
        </div>
        <div className="sec-1 flex flex-col">
          <h1 className="absolute top-20">از ایده تا اجرا</h1>
          <p className="absolute bottom-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </>
  );
};

export default Diff;
