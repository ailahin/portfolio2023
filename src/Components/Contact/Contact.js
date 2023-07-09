import React from "react";

const Contact = () => {
  return (
    <div className="bg-base-200  text-center p-8">
      <div>
      <h1 class="text-3xl font-extrabold">CONTACT ME</h1>
      <h2 className='text text-4xl font-bold text-sky-500 p-4'> I Want To Hear From You </h2>
      </div>
        <div class="hero min-h-screen">
          
  <div class="hero-content flex-col lg:flex-row">
    <div class="text-center lg:text-left">
      
      <div>
      <div class="py-2"> 
      
      <div className="flex pr-11 " style={{justifyContent:"center", alignItems:"center"}}>
        <div className=" flex " >
        <div className="bg-green-400 h-28 w-28 flex rounded-full "  style={{justifyContent:"center", alignItems:"center"}}>
        <i class="fa-solid fa-envelope"></i>
        </div>
        </div>
        <div className="flex px-4 text-xl font-bold">
          <p>aminulislamlahin@gmail.com</p>
        </div>
      </div>

      </div>
      <div class="py-2"> 

      <div className="flex mr-28 pr-11" style={{justifyContent:"center", alignItems:"center"}}>
      <div className="contact flex text "  >
      <div className="bg-green-400 h-28 w-28 flex rounded-full " style={{justifyContent:"center", alignItems:"center"}}>
      <i class="fa-solid fa-phone"></i>
      </div>

      </div>
      <div className=" flex px-4 text-xl font-bold">
        
          <p>+447760660427 </p>
      </div>
      </div>
      
      </div>
      </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg  shadow-2xl min-[100px]:mr-20 bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="text" placeholder="email" className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text">Message</span>
          </label>

          <textarea   type="text"  className="textarea-bordered textarea h-24" />
      
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
 

    </div>
  );
};

export default Contact;
