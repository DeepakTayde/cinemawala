import React from "react";
import TrendingBanner from "../components/TrendingBanner";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import HorizontalCardScrollingBar from "../components/HorizontalCardScrollingBar";

const HomePage = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);

  return (
    <>
      <TrendingBanner />
      <HorizontalCardScrollingBar data={trendingData} heading={"Trending"}/>
    </>
  );
};

export default HomePage;
