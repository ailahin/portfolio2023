import React from "react";
import './About.css'

const About = () => {
  return (
    <div className=" bg-gray-900 mt-2 p-11 ">
      <div className="text-center text-white font-extrabold text-4xl">
        ABOUT
      </div>
      <div className="mt-5  ">
      <div className="card lg:card-side bg-gray-800  shadow-xl  ">
        <div className="text-stone-300 p-8 text-justify">
        <p>I am a full-stack web developer based in the United Kingdom. I recently graduated with a degree in computer science and have a solid educational background. I have a strong passion for continuous learning and constantly strive to explore and develop new skills in programming languages, web development, and software engineering.</p>

        <p className="font-medium underline text-xl">If you have any opportunities where I can contribute, feel free to reach out.</p>
           
        <div className="text-center mt-5">
        <button className="btn  ">Hire Me</button>
        </div>
        </div>
        

        <div className="card-body w-full text-stone-300  ">
        <ul className=" list-inline font-medium  ">
              <li className="list-inline-item">FRONT END</li>
              <li className="list-inline-item">BACK END</li>
              <li className="list-inline-item">HTML5</li>
              <li className="list-inline-item">CSS3</li>
              <li className="list-inline-item">JAVASCRIPT</li>
              <li className="list-inline-item">REACTJS</li>
              <li className="list-inline-item">NODEJS</li>
              <li className="list-inline-item">EXPRESSJS</li>
              <li className="list-inline-item">MONGODB</li>
              <li className="list-inline-item">FIREBASE</li>
              <li className="list-inline-item">PYTHON</li>
              <li className="list-inline-item">COMPUTER NETWORKING</li>
              <li className="list-inline-item">AGILE METHODOLOGY</li>
            </ul>
          
        </div>
      </div>

      <div className="lg:hidden">
        <ul className="list">
          <li> <i class="fa-brands fa-html5 fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-css3 fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-js fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-react fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-node-js fa-fade" style={{color:"#e8b445"}}> </i> </li>
          
        </ul>
      </div>
      </div>
    </div>
  );
};

export default About;
