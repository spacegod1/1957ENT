import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="flex flex-wrap justify-around text-white py-12 bg-black mx-auto w-[90%] h-full">
      <div className="w-[35rem] px-4">
        <Carousel />
      </div>
      <div className="w-[38rem] pt-14">
        <h1 className="text-[#FEB139] uppercase text-3xl leading-9 audiowide my-14 text-center md:text-5xl">
          Come experience the vibration with the Asakaa boyz and many more !!
        </h1>
        <button className="nav_list border mr-6 border-black px-[4rem] py-5 text-black text-2xl bg-[#31C6D4] hover:bg-[#FEB139] rounded-md md:py-7 ml-8">
          <a
            href="https://shoobs.com/events/84471/asakaa-boys-live-in-manchester"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Tickets
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
