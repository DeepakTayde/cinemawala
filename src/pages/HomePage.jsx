import React, { useEffect, useState } from "react";
import TrendingBanner from "../components/TrendingBanner";
import { useSelector } from "react-redux";
import HorizontalCardScrollingBar from "../components/HorizontalCardScrollingBar";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const {data : nowPlayingData} = useFetch("/movie/now_playing")
  const {data : topRatedData} = useFetch("/movie/top_rated")
  const {data : popularTvShowData} = useFetch("/tv/popular")
  const {data : onTheAirShowData} = useFetch("/tv/on_the_air")

  return (
    <>
      <TrendingBanner />
      <HorizontalCardScrollingBar data={trendingData} heading={"Trending"} trending={true}/>
      <HorizontalCardScrollingBar data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalCardScrollingBar data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
      <HorizontalCardScrollingBar data={popularTvShowData} heading={"Popular TV Shows"} media_type={"tv"}/>
      <HorizontalCardScrollingBar data={onTheAirShowData} heading={"On the Air"} media_type={"tv"}/>
    </>
  );
};

export default HomePage;
