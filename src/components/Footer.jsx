function Footer(){
    return(
        <>
        <div className="h-[50vh] text-white">
            <div className="max-w-screen-xl mx-auto flex mt-10">
                 <div className="basis-1/2 flex flex-col justify-between ">
                   <h1 className="text-[10vw] font-bold ">refokus.</h1>
                   <div className="flex gap-6 mt-16">
                   {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((val,i)=>(
                     <h1 key={i} className="text-zinc-400 text-sm">{val}</h1>
                   ))}
                 </div>
                </div>
               
                <div className="basis-1/2 flex gap-32 items-center justify-center ">
                 <div className="flex flex-col gap-3">
                    {["Socials","","Instagram","Twitter","Linkedin"].map((val,i)=>(
                       <h1 key={i} className="text-zinc-600"> {val.length<=0 && <br></br>} {val}</h1>
                    ))}
                 </div>
                 <div className="flex flex-col gap-3">
                   <h1 className="mt-9 text-zinc-600">Sitemap</h1><br></br>
                   {["Home","Work","Career","Contact"].map((val,i)=>(
                    <h1 key={i} className="">{val}</h1>
                   ))}
                 </div>
                 <div className="flex flex-col gap-3">
                    <p className="w-60 font-semibold">efokus is a pioneering digital agency driven by 
                        design and empowered by technology.</p>
                        <img className="w-40 h-20" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"></img>
                 </div>
                </div> 
            </div>
        </div>
        </>
    )
}
export default Footer