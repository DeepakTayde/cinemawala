import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const HorizontalCardScrollingBar = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();
  const handleNext = ()=>{
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  }
  const handlePrevious = ()=>{
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  }

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white">
        {heading}
      </h2>
      <div className=" relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none"
        >
          {data.map((item, index) => {
            return (
              <Card
                key={item.id + "heading" + index}
                data={item}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />
            );
          })}
        </div>
        <div className="absolute top-0 w-full h-full hidden lg:flex justify-between items-center">
          <button onClick={handlePrevious} className="bg-white text-black rounded-full p-1 -ml-1 z-10">
            <FaAngleLeft   />
          </button>
          <button onClick={handleNext} className="bg-white text-black rounded-full p-1 -mr-2 z-10">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardScrollingBar;
