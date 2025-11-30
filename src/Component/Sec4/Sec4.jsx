import "./Sec4.css";
import img1 from "../../image/bhargav-panchal-J9Wtgz2Emr8-unsplash.jpg";
import img2 from "../../image/jamie-kettle-3t-j09n_pYo-unsplash.jpg";

import { IoAccessibilityOutline } from "react-icons/io5";

const Sec4 = () => {
  return (
    <>
      <div className="Sec4 flex items-center justify-center mt-14 relative top-0">
        <img src={img2} alt="" width={900} height={1000} className="me-2" />
        <div className="sec-sticky overflow-hidden sticky top-0 self-start">
          <img src={img1} alt="" width={500} height={500} />
          <div className="stick-info mt-4">
            <h4 className="font-[yekan-thin] text-sm flex">
              ایده های خود را اجرا کنید
            </h4>
            <p className="font-[yekan-thin] text-xs">
              به هر جیزی که فکر میکنید اجرا میشود
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec4;
<></>;
