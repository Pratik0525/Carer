import React from "react";
import { Link } from "react-router-dom";
const Hospital = [
  {
    image: "./src/assets/Butwalhos.jpg",
    name: "Butwal Hospital Pvt.Ltd",
    button: "View More",
  },
  {
    image: "./src/assets/Lumbini-Provincial-Hospital.jpg",
    name: "Butwal Provincial Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Tinau-International-Hospital-Pvt.Ltd_..jpg",
    name: "Tinau Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Eye.jpg",
    name: "Butwal Lions Eye Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Amda.jpg",
    name: "Butwal Amda Hospital",
    button: "View More",
  },
  {
    image: "./src/assets/Heart.jpeg",
    name: "GBC Heart Hospital",
    button: "View More",
  },
];
const Appointmentbox = () => {
  return (
    <>
      <div className="py-20 w-11/12 mx-auto grid grid-cols-3 gap-10">
        {Hospital.map((val, i) => {
          return (
            <Link to="/Contact">
              <div className="card  card-compact w-80  h-96 grid  bg-white shadow-xl cursor-pointer hover:scale-105   transition-all delay-100 duration-300 ease-in-out">
                <figure>
                  <img
                    src={val.image}
                    alt="hoaspital"
                    className="w-96 h-72 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title  text-black">{val.name}</h2>

                  <div className="card-actions justify-end">
                    <button className="bg-blue-700  btn text-white border-transparent">
                      {val.button}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Appointmentbox;
