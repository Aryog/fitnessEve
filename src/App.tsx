import Navbar from "@/scenes/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/Home";
import Benefits from "@/scenes/Benefits";
import OurClasses from "@/scenes/OurClasses"
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      // Checking if the current window is in top of page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    // allows us to remove it when leave the page 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <>
      <div className="app bg-gray-50">
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  )
}

export default App
