import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
           <footer className="footer items-center p-4 bg-neutral text-neutral-content min-[100px]:justify-items-center">
  <div className="items-center grid-flow-col p-6">
    
    <p className='font-bold'>Copyright © 2023 - All right reserved by Aminul Islam Lahin  @AILAHIN </p>
  </div> 
  <div className="grid-flow-col gap-4  sm:justify-self-center  ">
   
    <Link > 
    <i class="fa-brands fa-linkedin-in fa-fade fa-2xl mr-3 "></i>
    </Link> 
    <Link> <i class="fa-brands fa-github fa-fade fa-2xl mr-11"></i> </Link>
    </div>
    

</footer>
        </div>
    );
};

export default Footer;