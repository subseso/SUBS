import { useState } from "react";
import "./F&Q.css";

const Sec7 = () => {
  //   const [collapse, setcollapse] = useState("false");
  return (
    <>
      <hr />
      <div className="sec7 dark:bg-white w-full h-160 flex flex-col items-center">
        <div className="fandq font-[dana-thin] text-7xl mb-10">
          <p>F&Q</p>
        </div>

        <div
          className="collapse collapse-arrow bg-base-100 border-base-300 border w-200 dark:bg-white dark:text-black font-[yekan] mt-3"
          id="clp"
        >
          <input type="checkbox" />
          <div className="collapse-title font-[yekan-thin]">چرا با ما ؟</div>
          <div className="collapse-content text-sm font-[yekan-thin]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100 border-base-300 border w-200 dark:bg-white dark:text-black font-[yekan] mt-3"
          id="clp"
        >
          <input type="checkbox" />
          <div className="collapse-title font-[yekan-thin]">
            از کجا شروع کنیم؟
          </div>
          <div className="collapse-content text-sm font-[yekan-thin]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100 border-base-300 border w-200 dark:bg-white dark:text-black font-[yekan] mt-3"
          id="clp"
        >
          <input type="checkbox" />
          <div className="collapse-title font-[yekan-thin]">
            چطور در ارتباط باشیم؟
          </div>
          <div className="collapse-content text-sm font-[yekan-thin]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-base-100 border-base-300 border w-200 dark:bg-white dark:text-black font-[yekan] mt-3"
          id="clp"
        >
          <input type="checkbox" />
          <div className="collapse-title font-[yekan-thin]">
            چه مدت زمانی صرف طراحی میشود؟
          </div>
          <div className="collapse-content text-sm font-[yekan-thin]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Sec7;
