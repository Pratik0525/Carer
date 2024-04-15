import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import mainimg from "../assets/mainbanner.jpg"
import Sidebar from "../Sidebar/Sidebar"

const Home = () => {
  return (
    <>
      <div className="bg-[#FDE2FF] ">
         <div>
          <img src={mainimg} alt="" className="" />
         </div>
        < Searchbar  />
      
      </div>
    </>
  );
};

export default Home;
