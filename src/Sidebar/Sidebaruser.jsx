import React from "react";
import { Link } from "react-router-dom";
const Sidebaruser = () => {
  return (
    <>
      <div className="flex ">
        <div className="bg-white w-2/12 h-screen flex flex-col gap-4 px-2">
          <div className="mt-20 text-center flex flex-col items-center">
            <p className="text-xl  font-bold text-red-600">Pratish Bhandari</p>
            <p>Butwal Hospital</p>
          </div>
          <div className="flex flex-col gap-4 items-center mt-16">
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebaruser;
