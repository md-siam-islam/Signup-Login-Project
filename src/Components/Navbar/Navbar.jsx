import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to="/"><a><li>Home</li></a></NavLink>
          <NavLink to="/"><a><li>Login</li></a></NavLink>
          <NavLink to="/"><a><li>Sign up</li></a></NavLink>
          <NavLink to="/"><a><li>About</li></a></NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Siam islam</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-8">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center justify-center">
          <NavLink to="/" className={({isActive}) => `${isActive ? "bg-green-500 rounded text-white font-bold px-4 py-2" : "font-bold"}`}><a><li className="">Home</li></a></NavLink>
          <NavLink to="/login"  className={({isActive}) => `${isActive ? "bg-green-500 rounded text-white font-bold px-4 py-2" : "font-bold"}`}><a><li className="">Login</li></a></NavLink>
          <NavLink to="/signup"  className={({isActive}) => `${isActive ? "bg-green-500 rounded text-white font-bold px-4 py-2" : "font-bold"}`}><a><li className="">Sign up</li></a></NavLink>
          {/* <NavLink to="/"><a><li className="mr-5 font-bold">About</li></a></NavLink> */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Hire me</a>
        </div>
      </div>
    );
};

export default Navbar;