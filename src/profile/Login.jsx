import React,{useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {

  
  const [user, setUser] = useState({	
    name: '',	
    email: '',	
    message: '',	
  });	

  let name,value;	
  const getUserData =(event) => {	

    name = event.target.name;	
    value = event.target.value;	


    setUser({...user, [name]: value});	
  };	

  const postData = async(e) =>{	
     e.preventDefault();	

     const {name,email,message,} = user;	


     if(name && email && message){	


      const res = await fetch("https://portfoliocontact-55520-default-rtdb.firebaseio.com//Mayaludriving.json", {	
        method: 'POST',	
        headers: {	
          "Content-Type": "application/json",	
        },	
        body: JSON.stringify({	
          name,	
          email ,	
          message ,	
        }),	
      }	

      );	


      // data clear after sending	


      if(res){	
        setUser({	
          name: '',	
          email: '',	
          message: '',	
        });	

        alert("Your response was successfully sent.");	
      }	


     }	

     else{	
          alert("Please! Fill in all the Fields. ");	
     }	
    };	

    // firebase content end------

  return (
    <div>
      <div id="contact" className="hero min-h-screen bg-[#ffffff]">
        <div className="hero-content flex-col lg:flex-row-reverse lg:p-10">
          <div className="text-center lg:text-left lg:pl-20">
            <h1 className="lg:text-5xl text-4xl font-bold">Get In Touch</h1>
            <p className="py-6 text-center">
             
             <a href="" className="flex justify-around items-center w-[17rem] text-sm  "><FaFacebook /> Mayalu Driving Tours and Travel</a>
             <a href="" className="flex justify-around items-center text-sm w-[15rem]"><MdEmail/>mayaludriving@gmail.com</a>


            </p>
          </div>

          <div className=" w-[15rem] lg:w-[25rem] card shrink-0 shadow-2xl bg-[#f5f5f5] ">
            <form className="card-body ">

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-gray-500">Full Name</span>
                </label>
                <input
                  type="email"
                  value={user.name} 
                  onChange={getUserData}
                  placeholder="Your Name"
                  name='name'
                  className="input input-bordered bg-[#e5e5e5]"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  value={user.email} 
                  onChange={getUserData} 
                  name='email'
                  className="input input-bordered bg-[#e5e5e5]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-500">Message</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  value={user.message} 
                  onChange={getUserData}
                  name='message'
                  className="input input-bordered pt-2 bg-[#e5e5e5]"
                  required
                />

              </div>
              <div className="form-control mt-6">
                <button  onClick={postData} type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
