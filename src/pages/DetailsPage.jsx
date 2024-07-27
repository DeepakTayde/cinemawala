import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Divider from "../components/Divider";
import HorizontalCardScrollingBar from "../components/HorizontalCardScrollingBar";
import VideoPlayer from "../components/VideoPlayer";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [videoPlay, setVideoPlay]= useState(false)
  const [videoPlayId, setVideoPlayId]=useState("")

  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendationData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );


    const handleVideoPlay= (data)=>{
      setVideoPlayId(data)
      setVideoPlay(true)
      }
  console.log("Cast data: Screenplay", recommendationData);

  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");

  const writer = castData?.crew
    ?.filter((crew) => crew?.job === "Writer" || crew?.job === "Story")
    ?.map((crew) => crew?.name)
    ?.join(", ");

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover"
            alt="movie"
          />
        </div>

        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-60 object-cover rounded"
            alt="movie"
          />
          <button onClick={()=>handleVideoPlay(data)} className="mt-3 w-full bg-white text-black rounded px-4 py-2 text-center text-lg font-bold hover:bg-gradient-to-l from-red-500 to-orange-500 shadow-md  hover:scale-105 transition-all">
            Play Now
          </button>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center gap-2">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>Views : {Number(data?.vote_count)} </p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl text-white font-bold">Overview</h3>
            <p>{data?.overview}</p>

            <Divider />

            <div className="flex items-center my-3 gap-2 text-center">
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}{" "}
              </p>
              <span>|</span>
              <p>Language : {data?.original_language}</p>
            </div>

            <Divider />
          </div>

          <div>
            <p>
              <span className="text-white">Director</span> :{" "}
              {castData?.crew[0]?.name}
            </p>
            <Divider />
            <p>
              <span className="text-white">Writer</span> : {writer}
            </p>
          </div>

          <Divider />

          <h2 className="font-bold text-lg">Cast : </h2>
          <div className=" grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              ?.map((item, index) => {
                return (
                  <div>
                    <div>
                      <img
                        src={imageURL + item?.profile_path}
                        alt={item.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                    <p className="font-bold text-center text-sm text-neutral-400">
                      {item.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <HorizontalCardScrollingBar
          data={similarData}
          heading={"similar " + params?.explore}
          media_type={params?.explore}
        />
        <HorizontalCardScrollingBar
          data={recommendationData}
          heading={"Recommendation " + params?.explore}
          media_type={params?.explore}
        />
      </div>
      {
        videoPlay && (
          <VideoPlayer data = {videoPlayId} close={()=> setVideoPlay(false)} media_type={params?.explore}/>
        )
      }
      
    </div>
  );
};

export default DetailsPage;
