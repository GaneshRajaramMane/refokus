function Stripe({data}){
    return(
        <>
        <div className="w-[20%] border-t-[1px] border-r-[1px] border-b-[1px] px-4 py-4 mb-40 flex justify-between">
            <span className=""> <img src={data.url}></img></span>
            <span className="text-white">{data.no}</span>
        </div>
        </>
    )
}
export default Stripe