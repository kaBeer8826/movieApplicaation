import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function HorizontalCard({ data = [], heading, trending,media_type }) {
  const containerRef = useRef(null);

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-5 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-2"> {heading} </h2>
      <div className="relative">
        <div ref={containerRef} className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden relative z-10 scroll-smooth transition-all md:grid-cols-[repeat(auto-fit,230px)]">
          {data.map((data, index) => {
            return (
              <Card key={data.id} data={data} index={index} trending={trending} media_type={media_type} />
            );
          })}
        </div>
        <div className='absolute top-0 flex justify-between w-full h-full items-center'>
                    <button onClick={handlePrevious} className='bg-white p-1 text-black rounded-full -ml-2 z-10'>
                        <FaAngleLeft/>
                    </button>
                    <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
                        <FaAngleRight/>
                    </button>
                </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
