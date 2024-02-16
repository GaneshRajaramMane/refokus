import Card from "./Card"

function Cards(){
    return(
        <>
        <div className="w-full ">
            <div className="flex max-w-screen-xl mt-52 gap-1 mx-auto ">
            <Card width={"w-[30%]"} start={false}  para={true}/>
            <Card width={"w-[70%]"} start={true}  para={false} hover={"true"}/>
            </div>
        </div>
        </>
    )
}
export default Cards