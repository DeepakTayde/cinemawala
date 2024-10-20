import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TrendingBanner = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerData, imageURL, currentImage]);

  return (
    <section className="w-full h-full">
      <div className=" flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((item, index) => {
          return (
            <div
              key={item.id + "trendingBanner" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + item.backdrop_path}
                  alt=""
                  className="h-full w-full object-cover"
                />
                {/**Buttons for scrolling next and previous images */}
                <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">
                  <button
                    className=" bg-white p-1 rounded-full text-2xl z-10 text-black "
                    onClick={handlePrevious}
                  >
                    <FaAngleLeft />
                  </button>
                  <button
                    className=" bg-white p-1 rounded-full text-2xl z-10 text-black "
                    onClick={handleNext}
                  >
                    <FaAngleRight />
                  </button>
                </div>
                <div className=" absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent "></div>
                <div className="container mx-auto">
                  <div className=" w-full absolute bottom-0 max-w-md px-3">
                    <h2 className=" font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                      {item?.title || item?.name}
                    </h2>
                    <p className=" text-ellipsis line-clamp-3 my-2">
                      {item.overview}
                    </p>
                    <div className=" flex items-center gap-4">
                      <p>Rating : {Number(item.vote_average).toFixed(1)}+</p>
                      <span>|</span>
                      <p>Views : {Number(item.popularity).toFixed(0)}</p>
                    </div>
                    <Link to={"/"+item?.media_type+"/"+item?.id}>
                      <button className="bg-white font-bold px-4 py-2 text-black rounded mt-4 hover:bg-gradient-to-l from-red-600 to-orange-400 shadow-md transition-all hover:scale-105">
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingBanner;
