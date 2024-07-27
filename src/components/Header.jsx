import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../constants/Navigation";

const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-60 z-40 ">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120}></img>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label+"header"+index}> 
                <NavLink
                  key={nav.label+"header"+index}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form
            action=""
            className=" flex items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search here ...."
              className=" bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-4xl text-white">
              <IoSearchOutline />
            </button>
          </form>

          <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} alt="user icon" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
