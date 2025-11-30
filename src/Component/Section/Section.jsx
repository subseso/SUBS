import { lazy } from "react";
import "./Section.css";
const Sec1 = lazy(() => import("../Sec1/Sec1"));
const Sec2 = lazy(() => import("../Sec2/Sec2"));
const Sec3 = lazy(() => import("../Sec3/Sec3"));
const Sec4 = lazy(() => import("../Sec4/Sec4"));
const Sec5 = lazy(() => import("../Sec5/Sec5"));
const Sec6 = lazy(() => import("../Sec6/Sec6"));
const Sec7 = lazy(() => import("../F&Q/F&Q"));

const Section = () => {
  return (
    <>
      <section className="dark:bg-white dark:text-black">
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
      </section>
    </>
  );
};

export default Section;
