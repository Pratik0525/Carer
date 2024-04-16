import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Signup from "./Signup";
import Login from "./profile/Login";
import Footer from "./Footer/Footer";
import Loader from "./Components/Loader";
import Aos from "aos";
import "aos/dist/aos.css";
import Sidebarusers from "./Sidebar/Sidebaruser";
const App = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    Aos.init({ easing: "ease", duration: 700 });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });

  return (
    <div className="">
      {loader ? (
        <Loader />
      ) : (
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
              </Route>
            </Routes>
          </BrowserRouter>

          <Footer />
          {/* <Sidebarusers /> */}
        </div>
      )}
    </div>
  );
};

export default App;
