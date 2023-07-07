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
        <div className='text-center font-extrabold text-4xl'>
            PORTFOLIO
         </div>
    <div>
            <h1 className='text-2xl font-bold'> My Amazing Work</h1>
    </div>
         <div className='grid  sm:justify-items-center min-[100px]:justify-items-center   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  md:justify-items-center  gap-4 md:gap-6 p-5'>

         {
                projects.map(project=>(
                 <a className='border-2 border-indigo-600' href={project.website} target="blank">
                    <div className=" card generated-card w-96 shadow-xl" style={{backgroundImage:`url(${project.img})` }}>
                  <div>
                    {/* <figure className="px-10 pt-10">
                    <img src={project.img} alt={project.title}  className="rounded-xl portfolio-image"  />
                    
                  </figure> */}
                  <div className=" text-context card-body items-center text-center  ">
                    <h2 className="card-title font-extrabold font-mono text-2xl text-white-800 text:visible ">{project.title}</h2>
                    
                    <p> <ProjectTechnologies project={project} />  </p>
                    <div className="card-actions">
                      <button className="btn  mr-2">see more</button>

                    </div>
                  </div>
                  </div> 
                  </div> 
                  </a>


                  
                
                ))
            } 
           
 


         </div>
        </div>
    );
};

export default Portfolio;