import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let hasSixChar = password.length>=6;
  //regular expressions
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasNumber = /(.*[0-9].*)/.test(password);
  //^ is for negation
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);
  let validEmail =/\S+@\S+\.\S+/.test(email);

  return (
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto content-center ">
        <span className="block w-full text-xl uppercase font-bold  text-center pb-8 text-[#00df9a]">
          Login
        </span>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="rounded-full mx-auto w-[80px] mb-6 "
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
             {email && ( 
              <div className="ml-1">
                  <div className="">
                        <small className={validEmail ?'text-[#30e730] ' : 'text-[#ff2d2d] ' } > Email valid </small>
                  </div>
              </div>)}
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
              {password && ( 
               <div className="ml-1 columns-2">
                      <div className="">
                        <small className={hasSixChar ?'text-[#30e730] ' : 'text-[#ff2d2d] ' } > At least 6 characters</small>
                       </div>
                      <div className="">
                        <small className={hasLowerChar ?'text-[#30e730] ' : 'text-[#ff2d2d] ' } > Lower case</small>
                
                       </div>
                      <div className="">
                        <small className={hasNumber ?'text-[#30e730] ' : 'text-[#ff2d2d] ' } > Number</small>
                    
                      </div>
                      <div className="">
                        <small className={hasSpecialChar ?'text-[#30e730] ' : 'text-[#ff2d2d] ' } > Special character</small>
                      </div>
                      <div className="">
                        <small className={hasUpperChar ?'text-[#30e730] ' : 'text-[#ff2d2d] ' } > Upper case</small>
                      </div>
               </div>
               )}
          </div>

          {!email || !password || !hasLowerChar || !hasNumber || !hasSixChar || !hasSpecialChar || !hasUpperChar ?  <button disabled  className="bg-gray-300 focus:outline-none  text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button> :  <button className="bg-[#7ec0aa] hover:bg-[#289672] text-white uppercase text-sm font-semibold px-4 py-2 rounded">Register</button> }


          {/* {!email || !password ? (
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
          )} */}
        </form>
        <Link className="text-blue-700 text-center text-sm" to="/resetPassword">
          Forgot password?
        </Link>
      </div>
  );
};

export default Login;
