import { FaStarHalf } from "react-icons/fa";
import hype1 from "../assets/hype1.mp4";
import hype2 from "../assets/hype2.mp4";
import reggie from "../assets/reggie.mp4";
import jayBad from "../assets/jay_bad.mp4";

function Hype() {
  return (
    <div className="bg-[#F8FFDB] w-[90%] h-full mt-3 mx-auto py-12">
      <div className="relative flex justify-center items-center">
        <FaStarHalf
          size={20}
          className="absolute left-[3rem] inline md:left-[5rem]"
        />
        <h1 className="text-4xl my-4 text-center hype_title text-[#4F200D] uppercase">
          The Hyped lot
        </h1>
        <FaStarHalf
          size={20}
          className="right_star absolute right-[3rem] inline md:right-[5rem]"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src={`${hype1}#t=0.001`} type="video/mp4"></source>
        </video>
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src={`${reggie}#t=0.001`} type="video/mp4"></source>
        </video>
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src={`${hype2}#t=0.001`} type="video/mp4"></source>
        </video>
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src={`${jayBad}#t=0.001`} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Hype;
