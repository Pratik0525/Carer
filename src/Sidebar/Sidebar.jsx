import React from "react";
import drremoved from "../assets/dr-removed.png";
import ConsultaDr from "./ConsultaDr";

const Sidebar = () => {
  return (
    <div className=" h-[50rem]">
      <img src={drremoved} alt="" className="absolute z-50 -left-[2rem]" />

      <div className="bg-white rounded-2xl h-[23rem] w-[20rem] absolute top-[63.4rem] left-[4rem] ">

        <div className="flex flex-col justify-center items-center h-auto w-auto">

          <button className="btn hover:bg-emerald-300 hover:text-white text-[#41518B] border-none bg-[#FDE2FF] mt-14 w-[13rem]">
            <a className="z-50 w-[13rem] h-[3rem] flex justify-center items-center">
              Select in map
            </a>
          </button>

          <button className="btn hover:bg-emerald-300 hover:text-white text-[#41518B] border-none bg-[#FDE2FF] w-[13rem] mt-14 ">
            Departments
          </button>

          <button className="btn text-white border-none bg-[#5652FF] w-[13rem] mt-14 ">
            Find Now
          </button>

        </div>
      </div>
      <ConsultaDr />
    </div>
  );
};

export default Sidebar;
