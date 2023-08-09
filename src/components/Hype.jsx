import { FaStarHalf } from "react-icons/fa";

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
          <source src="/src/assets/hype1.mp4" type="video/mp4"></source>
        </video>
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src="/src/assets/reggie.mp4" type="video/mp4"></source>
        </video>
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src="/src/assets/hype2.mp4" type="video/mp4"></source>
        </video>
        <video className="m-5 h-[38rem] rounded-sm" controls>
          <source src="/src/assets/jay_bad.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Hype;
