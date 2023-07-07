import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-neutral-900">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="hidden md:block mx-md:hidden">
            <img
              src="../../images/ailahin.png"
              className="max-w-sm  mr-11 "
            />
          </div>
          <div className=" p-11 text-slate-500 font-semibold">
            <h1 className="text-5xl font-extrabold text-orange-500">Welcome to</h1>
            <h1 className="text-4xl font-extrabold mt-4 text-base-300">
              Aminul Islam Lahin <span className="text-green-600">World!</span>
            </h1>
            <p className="py-6  text-justify">
              {/* I am a full-stack web developer based in the United Kingdom, and I
              have recently completed my bachelor's degree in Computer Science
              in May 2023. With a solid educational background and a passion for
              continuous learning, I am constantly exploring and developing new
              skills in the ever-evolving field of web development */}
            </p>
            <div className="flex items-center ">
    <button className="btn btn-primary mr-2">About Me</button>
    <i className="icon fa-brands fa-linkedin text-blue-600 text-4xl ml-16 mr-4"></i>
    <i className="icon fa-brands fa-github text-blue-600 text-4xl mr-4"></i>
    <i className="icon fa-solid fa-envelope text-blue-600 text-4xl mr-2"></i>
  </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
