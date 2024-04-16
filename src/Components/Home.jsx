import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import mainimg from "../assets/mainbanner.jpg";
import Hospital from "../PageComponent/Home/Hospital";
const Home = () => {
  return (
    <>
      <div className="bg-white ">
        <div>
          <img src={mainimg} alt="" className="" />
        </div>
        <Searchbar />
        <Hospital />
      </div>
    </>
  );
};

export default Home;
