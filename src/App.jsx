import LocomotiveScroll from "locomotive-scroll"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Marquees from "./components/Marquees"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"
import LocomotiveScrolls from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScrolls();
  return (
    <>
    <div className=" w-full bg-black	h-full">
       <Navbar />
       <Work/>
       <Stripes/>
       <Products/>
       <Marquees/>
       <Cards/>
       <Footer/>
    </div>
    </>
  )
}

export default App
