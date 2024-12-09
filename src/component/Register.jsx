import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Register() {
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { createUser, setUser, profileUpdate, logInWithGoogle } =
    useContext(AuthContext);
 const notify = (err) => toast.error(err);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo_url = form.get("photo-url");

    const validPass = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return regex.test(password);
    };
    const validPassCheak = validPass(password);

    if (!validPassCheak) {
      setError(true) 
      return;
    }else{
      setError(false)
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        profileUpdate(name, photo_url).catch((error) => {
          console.log(error);
        });
        navigate(location.state ? location.state.location : "/");
      })
      .catch((error) => {
        console.log(error);
        notify(error.message);
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        notify(error.message);
      });
  };

  return (
    <div className="mx-auto  max-w-sm mt-28">
      <div className="card bg-base-200 w-full shrink-0 shadow-2xl">
        <p className="font-semibold text-2xl text-center mt-3">Registration</p>
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
              <span className="label-text">photo-url</span>
            </label>
            <input
              type="url"
              name="photo-url"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={hidden ? "password" : "text"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
        
            <div
              onClick={() => {
                setHidden(!hidden);
              }}
              className="relative -top-8 left-72"
            >
              {hidden ? <FaEyeSlash /> : <FaEye />}
            </div>

            {
              error ? <p className="text-red-500"> Enter a Valid Password !</p> : ''
            }
          </div>

          <Link
            to="/auth/login"
            className="link-hover text-gray-500 font-semibold"
          >
            Click for Login
          </Link>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Registration
            </button>
            <button
              type="submit"
              onClick={handleGoogleLogin}
              className="btn mt-2 btn-primary"
            >
              Login With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
