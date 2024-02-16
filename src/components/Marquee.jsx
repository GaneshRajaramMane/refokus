import { motion } from "framer-motion"

function Marquee({data,direction}){
    
return(
    <>
    <div className="flex overflow-hidden">
        <motion.div 
        initial={{x:direction === "left" ? "0" : "-100%"}} 
        animate={{x:direction === "left" ? "-100%" : "0"}}
         transition={{ease:"linear",duration:15,repeat:Infinity}} 
        className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {data.map((val,i)=> <img key={i} src={val} className=""></img>)}
        </motion.div>
        <motion.div 
        initial={{x:direction === "left" ? "0" : "-100%"}} 
        animate={{x:direction === "left" ? "-100%" : "0"}}
         transition={{ease:"linear",duration:15,repeat:Infinity}} 
        className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {data.map((val,i)=> <img key={i} src={val} className=""></img>)}
        </motion.div>
        
    </div>
    
    </>
)
}export default Marquee