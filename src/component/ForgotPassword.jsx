import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { propTypesDefaultValue } from "@material-tailwind/react/types/components/slider";

export default function Login() {
  const { passReset, logOut, forgetEmail} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
   
    passReset(email)
      .then((userCredential) => {
        window.open('https://mail.google.com/mail/u/0/#inbox', '_blank')
        logOut()
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <div className="mx-auto  max-w-sm mt-28">
      <div className="card bg-base-200 w-full shrink-0 shadow-2xl">
        <p className="font-semibold text-2xl text-center mt-3">Forget Password</p>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
             defaultValue={forgetEmail || ''}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" onClick={passReset} className="btn mt-2 btn-primary">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  );
}
