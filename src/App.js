import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await axios.get("/trending/all/day");
        dispatch(setBannerData(response.data.results));
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    const fetchConfigurationData = async () => {
      try {
        const response = await axios.get("/configuration");
        dispatch(
          setImageURL(response.data.images.secure_base_url + "original")
        );
        // console.log("configuration data : ", response.data.images.secure_base_url+"original" )
      } catch (error) {}
    };
    fetchTrendingData();
    fetchConfigurationData();
  }, [dispatch]);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className=" min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
