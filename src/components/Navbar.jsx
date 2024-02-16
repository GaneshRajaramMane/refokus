import Button from "./Button"

function Navbar(){
    return(
        <>
        <div className="  max-w-screen-xl mx-auto p-5  flex items-center justify-between border-zinc-600 border-b-[0.01px]">
            <div className="left flex items-center">
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"></img>
            <div className=" ml-20 flex gap-14 text-white">
            {["Home","Work","Culture","","News"].map((val,index)=><a key={index} className="cursor-pointer text-sm flex items-center">
                       {val.length==0 && (<span className="inline-block w-[1px] h-7 bg-zinc-600"></span>)}
                       {index===1 ? ( <span style={{boxShadow:"0 0 0.45em #00FF19"}} className=" inline-block w-1 h-1 bg-emerald-300 rounded-full mr-2"></span>):""} {val}
                        </a>)}
            </div>
            </div>
            <div className="flex items-center">
             {<Button title="Start a Project"/>}
            </div>
          
        </div>
        </>
    )
}
export default Navbar