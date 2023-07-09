import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectTechnologies from '../ProjectTechnologies/ProjectTechnologies';

import './Portfolio.css'


const Portfolio = () => {


 const [projects, setProjects]=useState([]);
 useEffect(()=>{
    fetch('../../allprojects.json')
    .then(response=>response.json())
    .then(data=>setProjects(data))
 },[])
  

    return (
       <div>
        <div className='text-center font-extrabold text-3xl p-4'>
            PORTFOLIO
         </div>
    <div>
            <h1 className='text-4xl text-center text-sky-500 font-bold p-4 '> My Amazing Work</h1>
    </div>
         <div className='grid  sm:justify-items-center min-[100px]:justify-items-center   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  md:justify-items-center gap-4 md:gap-6 sm:mt-2 '>

         {
                projects.map(project=>(
                 <div className=' '>
                  <a className='rounded-md  shadow-2xl bg-base-100 ' href={project.website} target="blank">
                    <div className=" rounded-md  card generated-card " style={{backgroundImage:`url(${project.img})` }}>
                  <div>
                    {/* <figure className="px-10 pt-10">
                    <img src={project.img} alt={project.title}  className="rounded-xl portfolio-image"  />
                    
                  </figure> */}
                  <div className=" rounded-md  text-context card-body items-center text-center ">
                    <h2 className="card-title font-extrabold font-mono text-2xl text-white-300 text:visible  ">{project.title}</h2>
                    
                    <p> <ProjectTechnologies project={project} />  </p>
                    <div className="card-actions">
                      <button className="btn border-0  bg-gray-500 hover:bg-gray-600">Details</button>

                    </div>
                  </div>
                  </div> 
                  
                  </div> 
                  </a>
                 </div>


                  
                
                ))
            } 
           
 


         </div>
         <div className="text-center p-11">
                      <button className="btn border-0  bg-gray-300 hover:bg-gray-600">See more on github</button>

                    </div>
        </div>
    );
};

export default Portfolio;