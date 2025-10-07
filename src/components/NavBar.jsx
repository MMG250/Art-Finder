import { navbarData } from "../utils/data";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-white">
      <nav className=" flex items-center justify-between w-[80%] h-20 mx-auto  ">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-400 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform duration-300 ">
              <span className="text-white font-bold text-lg ">A</span>
            </div>
          </div>

          <div>
            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-400  bg-clip-text text-transparent">
              ArtFinder
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Art & Exhibition</p>
          </div>
        </Link>

        <div>
          {navbarData.map((menuItem, index) => (
            <NavLink key={index} to={menuItem.link} className={({isActive}) => `relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-800 ${isActive ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'}`}>
              {menuItem.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
    
  );
};

export default NavBar;
