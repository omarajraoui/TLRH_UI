import React from 'react'
import { useState } from "react";
import Login from './Infos/Login';
import { BrowserRouter, Route, Routes,Link,useNavigate } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    let navigate = useNavigate();

  return (
    <nav className="w-full bg-[#000300] shadow">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="/">
                    <h2 className="text-2xl font-bold text-[#00df9a]">TLRH.</h2>
                </a>
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <Link className="text-white hover:text-indigo-200" to="/">
                        Home
                    </Link>
                    <Link className="text-white hover:text-indigo-200" to="">
                        Collaborateurs
                    </Link>
                    <Link className="text-white hover:text-indigo-200" to="">
                        Managers
                    </Link>
                    <Link className="text-white hover:text-indigo-200" to="">
                        Admins
                    </Link>
                    <Link className="text-white hover:text-indigo-200" to="/rapports">
                        Rapports
                    </Link>
                    </ul>

                <div className="mt-3 space-y-2 md:hidden md:inline-block text-center">
            <button
            onClick={() =>{navigate("/login")}}
                className="inline-block w-[120px] px-4 py-2 text-center  m-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
                Login
            </button>
            <button
                onClick={() =>{navigate("/register")}}
                className="inline-block w-[120px] px-4 py-2 m-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
                Register
            </button>
        </div>
            </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
            
            <button
            onClick={() =>{navigate("/login")}}
                className="px-4 py-2 text-[#00df9a]  bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
                Login
            </button>
            <button
            onClick={() =>{navigate("/register")}}
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
                Register
            </button>
        </div>
    </div>
</nav>
  )
}

export default Navbar