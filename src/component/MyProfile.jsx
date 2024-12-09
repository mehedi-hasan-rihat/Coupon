import React, { useContext } from "react";
import Cover from "../assets/Img/cover_bg.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
export default function MyProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-420px)]">
   <p className="text-xl font-semibold text-center text-gray-700 mt-10">My Profile</p>
      <div className="relative max-w-xl mx-auto mb-10 mt-2 bg-gray-100 p-2 rounded-md">
        <div className="">
          <img className="w-full rounded-md h-36 object-fill" src={Cover} />
        </div>
        <div className=" bg-white h-28 rounded-md">
          <div className="absolute top-28 left-4">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={user?.photoURL}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative top-10 flex justify-between px-3">
            <div className="">
              <p className="font-semibold px-2">
                Name : <span>{user?.displayName}</span>
              </p>
              <p className="font-semibold px-2">
                Email : <span>{user?.email}</span>
              </p>
            </div>

            <button
              onClick={() => {
                navigate("/auth/updateProfile");
              }}
              className="btn btn-secondary hover:bg-fuchsia-700 hover:shadow-md"
            >
              Update Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
