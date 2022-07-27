import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto content-center ">
        <span className="block w-full text-xl uppercase font-bold  text-center pb-8 text-[#289672]">
          Login
        </span>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="rounded-full mx-auto w-[150px] mb-6 "
        />
        <form className="mb-4" action="/" method="">
          <div className="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          {!email || !password ? (
            <button
              disabled
              className="bg-gray-300 focus:outline-none  text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Login
            </button>
          ) : (
            <button className="bg-[#7ec0aa] hover:bg-[#289672] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          )}
        </form>
        <Link className="text-blue-700 text-center text-sm" to="/resetPassword">
          {" "}
          Forgot password?
        </Link>
      </div>
  );
};

export default Login;
