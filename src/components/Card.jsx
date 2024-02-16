import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
function Card({width,start,para,hover="false"}){
    
    return(
        <>
        <motion.div whileHover={{backgroundColor:hover==="true" && "#7443ff",padding:"25px"}} className={` bg-zinc-800 rounded-xl p-5 text-white  ${width}`}>
           <div>
           <div className="flex items-center justify-between ">
             <h1 >Up Next:Culture</h1>
             <FaLongArrowAltRight />
            </div>
            <h1 className="mt-5 text-xl font-semibold">Who We Are</h1>
           </div>
           <div className="mt-40 ">
            {start===true && 
             <>
                <h1 className="text-6xl font-semibold">Start A Project</h1>
                <button className="px-5 py-2 mt-7 bg-transparent border rounded-full font-semibold">Contact Us</button>
            </>
            }
           {
            para === true && <p className="mt-60 text-xs text-zinc-400">Explore What Drive our team</p>
           }
            
           </div>
        </motion.div>
        </>
    )
}
export default Card