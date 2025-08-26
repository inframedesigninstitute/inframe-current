"use client";
import React from "react";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import Swal from "sweetalert2";

export default function UserControl({ activePage, setActivePage }) {
  return (
    <>
      {activePage == "login" && (
        <LoginForm activePage={activePage} setActivePage={setActivePage} />
      )}
      {activePage == "register" && (
        <Register activePage={activePage} setActivePage={setActivePage} />
      )}
    </>
  );
}

export function LoginForm({ activePage, setActivePage }) {
  let userLogin = (event) => {
    event.preventDefault();
    // Swal.fire({
    //   title: "Login Successfully !",
    //   text: "You are now login",
    //   icon: "success",
    //   background: "white",
    //   iconColor: "red",
    //   confirmButtonColor: "red",
    // });
    // Swal.fire({
    //   title: "OTP Sent",
    //   text: "Check your email Id to Verify",
    //   icon: "success",
    //   background: "white",
    //   iconColor: "red",
    //   confirmButtonColor: "red",
    // });
    // Swal.fire({
    //     title : 'OTP Verified',
    //     icon : 'success',
    //     background : 'white',
    //     iconColor : 'red',
    //     confirmButtonColor : 'red'
    // })
    Swal.fire({
      title: "OTP Is Invalid",
      icon: "error",
      iconColor: "red",
      background: "white",
      confirmButtonColor: "red",
    });
  };

  return (
    <div className="fixed lg:w-[350px] w-[320px] h-[auto] z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[10px] shadow-md shadow-red-600">
      <div className="flex justify-between items-center">
        <h3 className="text-[25px] text-gray-900 my-4 uppercase">Login</h3>
        <span
          onClick={() => setActivePage("")}
          className="text-[25px] hover:text-red-600 duration-300 cursor-pointer"
        >
          <HiMiniArrowRightStartOnRectangle />
        </span>
      </div>
      <form onSubmit={userLogin} className="my-[15px] space-y-5">
        <input
          required
          className="border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="Enter Your Email"
          type="text"
        />
        <input
          required
          className="border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          placeholder="Enter Your Password"
          type="text"
        />
        <button className="w-full bg-red-600 hover:bg-gray-700 duration-300 cursor-pointer text-white rounded-[15px] uppercase py-[12px] ">
          Login
        </button>
        <p className="text-center">
          Not a member yet ?{" "}
          <span
            onClick={() => setActivePage("register")}
            className="text-red-600
                 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export function Register({ activePage, setActivePage }) {
  return (
    <>
      <div className="fixed lg:w-[420px] w-[320px] h-[auto] z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-[10px] shadow-md shadow-red-600">
        <div className="flex justify-between items-center">
          <h3 className="text-[25px] text-gray-900 my-4 uppercase ">Register</h3>
          <span
            onClick={() => setActivePage("")}
            className="text-[25px] hover:text-red-600 duration-300 cursor-pointer"
          >
            <HiMiniArrowRightStartOnRectangle />
          </span>
        </div>
        <form className="my-[15px] space-y-5">
          <input
            required
            className="border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            required
            className="border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            placeholder="Enter Your Email"
            type="email"
          />
          <input
            required
            className="border border-gray-300 w-full rounded-[15px] px-[8px] py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            placeholder="Create a Password"
            type="password"
          />
          <button className="w-full bg-red-600 hover:bg-gray-700 duration-300 cursor-pointer text-white rounded-[15px] uppercase py-[12px] focus:outline-none focus:ring-2 focus:ring-red-500 transition">
            Request OTP
          </button>
          <p className="text-center">
            Already a member ?{" "}
            <span
              onClick={() => setActivePage("login")}
              className="text-red-600
                 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
