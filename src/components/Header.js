import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import {navigation} from "../constants/navigation"
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (searchInput) {
      navigate(`./search?q=${searchInput}`);
    }
  }, [searchInput]);


  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40 ">
      <div className="container mx-auto px-3 flex items-center h-full">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" width={120} />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink
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
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Here"
              className="bg-transparent outline-none px-4 py-1 border-slate-300 outline border-spacing-0 border-color: white hidden-lg lg:block order-last"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} width="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
