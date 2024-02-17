import { motion } from "framer-motion"
import Product from "./Product"
import { useState } from "react"
import video2 from '/first.mp4'
import video1 from '/Arqitel project video 4_3.webm'
import video3 from '/YIR.webm'
import video4 from '/yahoo.webm'

function Products(){
    const [pos,setpos]=useState(0)
    const [visible,setvisible]=useState(0)
    
    const data=[
        {title:"Arqitel",description:"Arqitel With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:false},
        {title:"YIR 2022",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true,case:false},
        {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:true}
    ]

    function mover(vals){
        setpos(vals*23);
        setvisible(1)
    }
    function visiblity(){
        setvisible(0)
    }
    return(
        <>
        <div className="relative">
        {data.map((val,index)=>(
         <Product key={index} data={val} count={index} mover={mover} visiblity={visiblity}/>
        ))}
        <div className="w-full h-full absolute top-0 pointer-events-none">
            <motion.div 
            initial={{y:pos,x:"-50%"}} 
            animate={{y:pos+'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}
            className={`window w-[32rem] h-[23rem] absolute  left-[40%] bg-sky-100 overflow-hidden opacity-${visible}`}>
           
           
            <motion.div 
            animate={{y:-pos+'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}
            className="w-full h-full  "> 
                <video autoPlay muted loop src={video1}></video> 
            </motion.div>

            <motion.div 
            animate={{y:-pos+'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}
            className="w-full h-full bg-sky-700">
                  <video autoPlay muted loop src={video2}></video> 
            </motion.div>

            <motion.div 
            animate={{y:-pos+'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}
            className="w-full h-full bg-green-800">
                <video autoPlay muted loop src={video3}></video>
            </motion.div>

            <motion.div 
            animate={{y:-pos+'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:.5}}
            className="w-full h-full bg-yellow-900">
                <video autoPlay muted loop src={video4}></video> 
            </motion.div>

           

                
            </motion.div>

           
        </div>
        </div>
        
        </>
    )
}
export default Products