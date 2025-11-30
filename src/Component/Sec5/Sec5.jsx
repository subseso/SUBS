import "./Sec5.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Sec5 = () => {
  return (
    <>
      <div className="sec5 flex justify-center items-center w-full h-100 mt-10">
        <blockquote className="text-white flex flex-col w-150 text-center text-3xl font-[yekan-thin]">
          <RiDoubleQuotesL />
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
          <RiDoubleQuotesR className="self-end" />
        </blockquote>
      </div>
    </>
  );
};

export default Sec5;
