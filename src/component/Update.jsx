import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {update,user, setUser, setLoading} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo_url = form.get("photo_url");

  const userProfile = {
    displayName: name,
    photoURL: photo_url,
  }

  update(userProfile)
  .then(() => {
    setUser({ ...user, displayName: name, photoURL: photo_url });
    navigate('/my_profile')
  })
  .catch(err=>{
    console.log(err)
  })

 };

  return (
    <div className="mx-auto  max-w-sm mt-28">
      <div className="card bg-base-200 w-full shrink-0 shadow-2xl">
        <p className="font-semibold text-2xl text-center mt-3">Update Information</p>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-url</span>
            </label>
            <input
              type="url"
              name="photo_url"
              placeholder="photo_url"
              className="input input-bordered"
   
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn mt-2 btn-primary">Update Imformation</button>
          </div>
        </form>
      </div>
    </div>
  );
}
