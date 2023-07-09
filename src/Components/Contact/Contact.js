import React from "react";
import axios from "axios"
const handleSubmit = async (event) => {
  event.preventDefault();
  

  const form = event.target;
  const formData = new FormData(form);
  const endpoint = 'https://formspree.io/f/xaygyjwo'; 

  try {
    await axios.post(endpoint, formData);
    <p>Form submitted successfully</p>
    console.log('Form submitted successfully');
    form.reset();
    if (formData.get("email") && formData.get("name") && formData.get("message")) {
      alert("Message submitted successfully");
    }
  } catch (error) {
   
    console.error('Error submitting form', error);
  }
};




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
    <form className="card flex-shrink-0 w-full max-w-lg  shadow-2xl min-[100px]:mr-20 bg-base-100" onSubmit={handleSubmit}
  action="https://formspree.io/f/xaygyjwo"
  method="POST"
> 

    <div>
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input  type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input  type="email" name="email" placeholder="email" className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="text">Message</span>
          </label>

          <textarea   type="text" name="message" className="textarea-bordered textarea h-24"  required/>
      
        </div>
      
        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-primary">Submit</button>
        </div>
        
      </div>
      
    </div>

    </form>
  </div>

</div>


    </div>
   
  );
};

export default Contact;
