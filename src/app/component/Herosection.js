import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id=""
      className="flex flex-col justify-center items-center relative md:flex-row w-full "
    >
      <div className="w-full lg:w-[1376px] h-[747px] bg-[#122023] bg-[url('/assets/MobileHeroBG.png')] bg-cover bg-no-repeat  lg:bg-[url('/assets/herobg.png')] lg:bg-contain rounded-[36px] flex flex-col justify-center items-center">
        <p className="text-[#A5BBC0] text-[12px]  lg:text-[18px] leading-[28px] ">
          Empowering Lives, Financing Dreams
        </p>
        <h1 className="text-[36px] lg:text-[72px] text-[#FFFFFF] mt-[24px] mb-[36px] text-center leading-[44px] lg:leading-[84px] w-[311px] lg:w-[888px]  ">
          Your Trusted Partner in Financial Growth
        </h1>
        <p className="text-[16px] leading-[26px] w-[311px] lg:w-[497px] font-[300] lg:font-[400] text-center lg:text-left  mb-[39px] text-[#C4D3D6]">
          Empowering Nigerian entrepreneurs and small businesses with accessible
          financing solutions.
        </p>
        <div className="flex lg:flex-row flex-col gap-[24px] w-[311px] lg:w-[888px] justify-center ">
          <button className="bg-[#34C759] w-full  justify-center lg:w-[181px] h-[52px] text-[17px] font-[500] flex items-center gap-2 text-white px-6 py-2 rounded-full">
            Get Started <LuMoveRight color={"#FFFFFF"} size={24} />
          </button>
          <button className="bg-[#2C3E41] w-full  justify-center lg:w-[181px] h-[52px] text-[17px] font-[500] flex items-center gap-2 text-white px-6 py-2 rounded-full">
            Download App
          </button>
        </div>
      </div>
    </section>
  );
}
