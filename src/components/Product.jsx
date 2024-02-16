import Button from "./Button"

function Product({data,mover,count,visiblity}){
    
    return(
        <>
        <div className="w-full text-white py-20 h-[23rem]">
          <div onMouseEnter={()=>{mover(count)}} onMouseLeave={()=>visiblity()} className="max-w-screen-xl mx-auto flex items-center justify-between">
           <h1 className="text-4xl font-bold ">{data.title}</h1>
            <div className="flex-col w-1/3">
             <p className="mb-10 text-lg">{data.description}</p>
             <div className="flex items-center gap-5">
              {data.live && <Button/>}
              {data.case && <Button title="Case Study"/>}
             </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Product