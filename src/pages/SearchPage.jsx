import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const navigate = useNavigate()
  const query = location?.search?.slice(3)
  const fetchData = async () => {
    try {
      const response = await axios.get("search/multi", {
        params: {
          query: location?.search?.slice(3),
          page: 1,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(query){
      setPageNo(1);
      setData([]);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search]);
  
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if(query){
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="py-16">
    <div className="lg:hidden my-2 mx-2 sticky top-[70px] z-30">
      <input type="text" 
      placeholder="Search Here..." 
      onChange={(e)=>navigate(`/search?q=${e.target.value}`)}
      value={query?.split("%20")?.join(" ")} 
      className="px-4 py-1 text-lg bg-white w-full text-neutral-900 rounded-full"
      />
      
    </div>
      <div className="container mx-auto">
        <h3 className=" capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "search" + index }
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
