import { useState, useEffect } from "react";
import Navbar from "./components/navbar.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Educations from "./pages/educations.jsx";
import Project from './pages/project.jsx'
import LineGardient from "./components/lineGardient.jsx";
import { motion } from "framer-motion";
import Tech from "./pages/techStack.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);         //di bagian atas halaman (scrollY === 0) atau tidak.

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-black">
      <Navbar 
        isTopOfPage={isTopOfPage}>
      </Navbar>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
        >
          <LandingPage/>
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto mt-[-10rem] md:h-full xl:mt-[-18rem]">
      <LineGardient/>
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        
      >
        <Educations />
      </motion.div>
      </div>

      <div className="w-5/6 mx-auto mt-[-9rem] md:h-full xl:mt-[-18rem]">
      <LineGardient/>
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        
      >
        <Project/>
      </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:mt-[15rem] xl:mt-[-10rem]">
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        
      >
        <Tech/>
      </motion.div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
