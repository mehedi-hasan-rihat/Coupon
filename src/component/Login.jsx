import React, { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const { loginUser, setUser, setForgetEmail, logInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const notify = (err) => toast.error(err);
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        notify(error.message);
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    logInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        notify(error.message);
      });
  };

  return (
    <div className="mx-auto  max-w-sm mt-28">
      <div className="card bg-base-200 w-full shrink-0 shadow-2xl">
        <p className="font-semibold text-2xl text-center mt-3">Login</p>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
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
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <Link
              to="/auth/registration"
              className="link-hover text-gray-500 font-semibold mt-2"
            >
              Click for Register
            </Link>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              onClick={handleGoogleLogin}
              className="btn mt-2 btn-primary"
            >
              Login With Google
            </button>
            <button
              onClick={() => {
                setForgetEmail(emailRef.current.value);
                navigate("/auth/forgot_password");
              }}
              className="btn mt-2 btn-primary"
            >
              Forgor password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
