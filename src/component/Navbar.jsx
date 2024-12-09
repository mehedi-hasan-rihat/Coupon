import React, { useContext } from "react";
import Logo from "../assets/Img/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoPeopleCircle } from "react-icons/io5";
import { TbBrandShopee } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
export default function Navbar() {
  const listItem = (
    <>
      <li className="border border-gray-200 rounded-md">
        <NavLink to="/" className="">
          {" "}
          <div className="text-black">
            <IoHomeOutline />
          </div>
          <div className="p-2">Home</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/brands" className="border border-gray-200 rounded-md">
          <div className="text-black">
            <TbBrandShopee />
          </div>
          <div className="p-2">Brands</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/my_profile" className="border border-gray-200 rounded-md">
          <div className="text-black">
            <IoPeopleCircle />
          </div>
          <div className="p-2">My-Profile</div>
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="about_dev" className="p-2">
          About Dev
        </NavLink>
      </li> */}
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="border-b border-gray-200 shadow-md">
      <div className="">
        {user ? (
          <p className="p-1 text-center my-2 bg-gray-200 font-medium">
            Wellcome to my website, {user.displayName}
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="navbar bg-base-100 mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:py-1 py-1 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {listItem}
            </ul>
          </div>
          <a className="text-xl w-full">
            <img className="w-24" src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{listItem}</ul>
        </div>
        {user ? (
          <div className="flex gap-2 navbar-end">
          
          <div className="flex items-center p-2 border border-gray-100 rounded-md flex-col-reverse text-xs">  <p className="hidden md:block">{user.email}</p>
            <img
              className="w-10 h-10 rounded-full object-cover "
              src={user?.photoURL}
              alt=""
              referrerPolicy="no-referrer"
            /></div>
            <button
              onClick={() => {
                logOut();
              }}
              className="btn border-cyan-400"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <Link to="/auth/login" className="btn border-cyan-400">
              Login
            </Link>
            <Link to="/auth/registration" className="btn border-cyan-400">
              Registration
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
