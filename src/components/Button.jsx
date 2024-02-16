import { BsArrowReturnRight } from "react-icons/bs";

function Button({title="Get Started"}){
    return(
        <>
        <button className="text-black font-medium text-xs bg-white w-36 h-9 mt-3 rounded-full center flex items-center justify-center gap-3">{title} < BsArrowReturnRight /></button>
        </>
    )
}
export default Button