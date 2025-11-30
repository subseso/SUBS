import "./Sec5.css";
import img1 from "../../christoph-nolte-qOr5bFyPuxo-unsplash.jpg";
import img2 from "../../martin-baron-EBWKkTy1EDM-unsplash.jpg";
import img3 from "../../miguel-lindo-jtQODYphMt4-unsplash.jpg";
import img4 from "../../richard-stachmann-pWljb16SL6w-unsplash.jpg";

const Sec5 = () => {
  const picswip = [
    { id: 0, image: { img1 } },
    { id: 1, image: "../../christoph-nolte-qOr5bFyPuxo-unsplash.jpg" },
    { id: 2, image: "../../christoph-nolte-qOr5bFyPuxo-unsplash.jpg" },
    { id: 3, image: "../../christoph-nolte-qOr5bFyPuxo-unsplash.jpg" },
  ];

  return (
    <>
      <div className="sec5 w-full flex justify-center items-center h-220 bg-blue-600 mt-10">
        <div className="swip-pic flex h-full bg-red-600 relative">
          {/* {picswip.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <img src={item.image} alt="" />
                </div>
              </>
            );
          })} */}

          <img
            src={img1}
            alt=""
            className="absolute left-0 z-5"
            onClick={(e) => {
              e.style.zIndex = "1";
            }}
          />
          <img src={img2} alt="" className="absolute left-20 z-4" />
          <img src={img3} alt="" className="absolute left-10 z-3" />
          <img src={img4} alt="" className="absolute left-0 z-2" />
        </div>
      </div>
    </>
  );
};

export default Sec5;
