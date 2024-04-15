import React from "react";
import Logo from "../assets/OIP.jpeg";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  const footerData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Sign Up",
      path: "/signup",
    },
  ];

  return (
    <>
      {/* <div className="w-full h-fit pt-10 bg-gray-200">
        <div className=" grid grid-cols-3 h-full ">
          <div className=" grid grid-cols-1 divide-y gap-6 my-auto">
            <div className=" h-full ">
              <div className="flex h-full">
                <div className=" w-1/2 flex justify-center items-center border-r-2 border-[#D9D9D9]">
                  <img
                    src="./src/assets/OIP.jpeg"
                    alt=""
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className=" w-1/2 flex flex-col justify-center items-center">
                  <p className="text-2xl text-[#C2C25A]">Swasthya Yatri</p>
                  <span className="text-sm text-[#c6c6c6]">
                    Butwal-09, Rupandehi
                  </span>
                </div>
              </div>
            </div>
            <div
              align="center"
              className=" border-2 border-transparent w-10/12 mx-auto"
            >
              <p className="text-[#2B2575] text-sm" align="center">
                "Swasthya Yatri" is your trusted companion on the journey
                towards better health. Our app seamlessly connects users with
                nearby doctors, making it easy to schedule appointments and
                access quality healthcare services.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div>
              <p className="text-3xl text-[#C2C25A]">Contact Info</p>
            </div>
            <div className="flex flex-col gap-3 w-5/12 mx-auto items-start cursor-pointer text-sm ">
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out">
                Butwal-09, Rupandehi
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                +00977 071-148149
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                info@swasthyayatri.com
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                9841148149
              </ul>
            </div>
          </div>
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div>
              <p className="text-3xl text-[#C2C25A] famm">Useful as</p>
            </div>
            <div className="flex flex-col gap-3 items-start  w-5/12 mx-auto cursor-pointer text-sm">
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                Home
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                About us
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                News/Notice
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                Departments
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#eaeaea] h-14 flex justify-center items-center">
          <p className="text-lg text-[#2B2575] flex gap-1">
            Designed and Prototyped by{" "}
            <p className="font-bold">Namaste Sansar</p> Copyright © 2024
          </p>
        </div>
      </div> */}
      <div>
        <footer className="footer  p-10 text-[#EAEBED] bg-[#6737c1]">
          <aside>
            <div className="flex ">
              <img
                src={Logo}
                alt=""
                className="w-20 border-r-2 rounded-sm pr-4 border-white"
              />

              <p className="pl-4 text-2xl flex items-center font-semibold">
                Swasthya Yatri
              </p>
            </div>
            <p className=" sm:w-[22rem] mt-4">
              Swasthya Yatri is your trusted companion on the journey towards
              better health. Our app seamlessly connects users with nearby
              doctors, making it easy to schedule appointments and access
              quality healthcare services.
            </p>
          </aside>

          <div className="flex w-[14rem] flex-col justify-between">
          <header className="footer-title mb-1">Links</header>
          
          <ul className=" flex-col text-white">
            
              {footerData.map((val, j) => (
                <div className="mt-1" key={j}>
                  <a to={val.path} className="">
                    {val.title}
                  </a>
                </div>
              ))}
            
          </ul>
          </div>
          <nav>
            <header className="footer-title">Get In Contact</header>
            <ul className="flex w-[14rem] justify-between">
              <li>
                <MdLocalPhone className=" w-5 h-5" />
              </li>
              <a href="tel:+977 9857039400">9841148149</a>
              <li>|</li>
              <a href="tel:+977 9804429400">9804429400</a>
            </ul>
            <ul className="flex w-[10.5rem] justify-between items-center">
              <li>
                <FaLocationDot className=" h-[1rem]" />
              </li>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/wMtvogyU9AULmPk38"
              >
                Butwal, Milanchowk
              </a>
            </ul>
            <ul className="flex w-[9rem] justify-between items-center">
              <li>
                <MdEmail className=" h-[1rem] w-4" />
              </li>
              <a target="_blank" href="mailto:pratishbhandari2@gmail.com">
                info@carer.com
              </a>
            </ul>
          </nav>
        </footer>

        <footer className="footer footer-center p-4  text-gray-300 bg-[#6737c1] border-t-2">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()}- All right reserved by
              Carer
            </p>
            <p>
              Design and Developed By{" "}
              <a
                className="font-bold text-white"
                href="https://www.facebook.com/sanchitpandeyyy/"
              >
                Namaste Sansar
              </a>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
