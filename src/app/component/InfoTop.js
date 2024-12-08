import Image from "next/image";
import FlowThree from "./FlowThree";
import TitlesFlow from "./Titles";
import { LuMail } from "react-icons/lu";

export default function InfoTop() {
  const offers = [
    {
      img: "/assets/ph.png",
      title: "Microloans",
      texts:
        "We offer group loans to facilitate peer support and accountability among borrowers, as well as loans to small and medium enterprises (SMEs) to support their growth and expansion.",
    },
    {
      img: "/assets/ph.png",
      title: "Non-Interest Loans",
      texts:
        "We offer interest-free loans based on a profit-sharing model, catering to individuals who adhere to religious principles that prohibit interest-based transactions.",
    },
    {
      img: "/assets/ph.png",
      title: "Hire Purchase",
      texts:
        "We provide hire purchase options for small businesses to acquire essential equipment and machinery, facilitating their growth and productivity.",
    },
    {
      img: "/assets/ph.png",
      title: "Financial Literacy",
      texts:
        "We offer financial education programs to help our clients make informed financial decisions, manage their finances effectively, and build credit history.",
    },
    {
      img: "/assets/ph.png",
      title: "Savings Products",
      texts:
        "We encourage savings habits through various savings products, including group savings and individual savings accounts.",
    },
  ];
  const impacts = [
    {
      icon: "/assets/EE.png",
      title: "Economic Empowerment",
      text: "Providing access to capital to start and grow your business",
    },
    {
      icon: "/assets/FI.png",
      title: "Financial Inclusion",
      text: "Expanding access to formal financial services.",
    },
    {
      icon: "/assets/SD.png",
      title: "Social Development",
      text: "Improving the livelihoods of individuals and communities.",
    },
  ];
  const Benefits = [
    {
      icon: "/assets/EE.png",
      title: "Economic Empowerment",
      text: "Providing access to capital to start and grow your business",
    },
    {
      icon: "/assets/FI.png",
      title: "Financial Inclusion",
      text: "Expanding access to formal financial services.",
    },
    {
      icon: "/assets/SD.png",
      title: "Social Development",
      text: "Improving the livelihoods of individuals and communities.",
    },
    {
      icon: "/assets/SD.png",
      title: "Social Development",
      text: "Improving the livelihoods of individuals and communities.",
    },
    {
      icon: "/assets/SD.png",
      title: "Social Development",
      text: "Improving the livelihoods of individuals and communities.",
    },
  ];
  const Eligibility = [
    {
      image: "/assets/dude.png",
      title: "Small business owner",
      text: "Providing access to capital for small business owners seeking to upscale.",
    },
    {
      image: "/assets/mama.png",
      title: "Low-income individuals",
      text: "Providing access to capital for Low-income individuals seeking for funds.",
    },
    {
      image: "/assets/femalPhone.png",
      title: "Women Entrepreneurs",
      text: "Providing access to capital for Women Entrepreneurs.",
    },
    {
      image: "/assets/male1.png",
      title: "Youth",
      text: "Providing access to capital for youth seeking to start a business.",
    },
  ];

  return (
    <section
      id="offers"
      className="px-10 py-[96px] gap-y-[64px] w-full justify-center flex flex-col "
    >
      <div id="about-us" className=" w-full lg:w-[1376px] mx-auto">
        <FlowThree
          tag={"About Us"}
          btn={" Get started"}
          desc={`CreditGo Empowerment is a non-profit Microfinance institution dedicated to empowering individuals and small businesses in Nigeria. We aim to provide accessible and affordable financial services to underserved communities, promoting economic growth and social development.`}
          title={"Our Mission"}
        />
      </div>
      {/* simple loans */}
      <div className=" w-full lg:w-[1376px] h-[854px] lg:h-[374px] rounded-[36px] mx-auto py-[44px] px-[58px] bg-[url('/assets/MobileMission.png')] md:bg-[url('/assets/Mission.png')] bg-[#34C759]">
        <div className="flex flex-col lg:w-[730px] lg:h-[286px]">
          <Image
            className="w-[60px] h-[60px] "
            width={60}
            height={60}
            src={"/assets/missionIcon.png"}
          />
          <h3 className="text-[32px] leading-[42px] font-bold text-white">
            Simple loans. Fair terms. Real support.
          </h3>
          <p className="my-[24px] text-[16px] leading-[20px] text-white">
            Say goodbye to complex application processes and hello to
            straightforward financing solutions. With both interest-based and
            interest-free options available, we work with you to find the right
            fit for your needs.
          </p>
          <button className="bg-[#132124] w-[132px] h-[40px] text-[#FFFFFF] px-4 py-1 text-[16px] rounded-full">
            Apply Now
          </button>
        </div>
      </div>
      {/* services */}
      <div id="services" className="lg:w-[1376px] mx-auto ">
        <TitlesFlow
          tag={"Our Services"}
          title={"What we Offer"}
          btn={"Get Started"}
        />
        <div className="grid lg:grid-cols-3 gap-[24px] mb-[64px]">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-[343px] lg:w-[442px] border-[#EBEBEB] border h-[236px] rounded-[34px] p-[4px]"
            >
              <div className="w-[336px] lg:w-[432.67px] bg-[#F9F9F9] p-[24px] h-[228px] flex flex-col justify-start gap-[16px] rounded-[34px]">
                <Image
                  className="w-[34.84px] h-[34.84px] "
                  width={34.84}
                  height={34.84}
                  src={offer.img}
                />
                <p className="text-[20px] leading-[32px] text-black font-semibold">
                  {offer.title}
                </p>
                <p className="text-[16px] leading-[20px]  ">{offer.texts}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* our impact */}
      <div
        id="our-impact"
        className=" w-full lg:w-[1376px] lg:h-[374px] rounded-[36px] flex justify-center mx-auto py-[44px] px-[14px] lg:px-[58px] bg-[url('/assets/MobileImpact.png')] md:bg-[url('/assets/OurImpact.png')] bg-[#122023]"
      >
        <div className="flex flex-col justify-between   ">
          <div className="flex justify-center text-center flex-col">
            <h3 className="text-[32px] items-center leading-[42px] font-bold text-white">
              Our <span className="italic"> Impact</span>
            </h3>
            <p className="my-[24px] items-center text-[16px] leading-[20px] text-white">
              We strive to make a significant impact on the lives of our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-[24px]">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="w-[311px] lg:w-[410.67px] h-[128px] rounded-[21px] flex flex-col gap-[16px] bg-[#233033] p-[20px]"
              >
                <div className="flex gap-[8px] ">
                  <Image
                    className="w-[28px] h-[28px] "
                    width={28}
                    height={28}
                    src={impact.icon}
                  />

                  <p className="text-white text-[18px] leading-[28px] font-semibold ">
                    {impact.title}
                  </p>
                </div>
                <p className="text-[#929899] text-[16px] leading-[20px] font-normal ">
                  {impact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* eligibility */}
      <div
        id="eligibility"
        className="lg:w-[1376px] mx-auto flex flex-col gap-[64px] "
      >
        <TitlesFlow
          tag={"Eligibility"}
          title={"Who can Apply"}
          btn={"Get started"}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {Eligibility.map((apply) => (
            <div className="lg:w-[672px] lg:h-[338px] flex flex-col pl-6 justify-between rounded-[32px] border border-[#F2F2F2]">
              <div className=" flex flex-col justify-between">
                <div className="flex justify-between pt-6 ">
                  <div className="justify-between  flex flex-col">
                    <div className="w-[170px] lg:w-[333px]">
                      <Image
                        className="w-[60px] h-[60px] "
                        width={60}
                        height={60}
                        src="/assets/iconsAg.png"
                      />
                      <p className="text-[16px] lg:text-[24px] leading-[28px] font-medium my-[6px] lg:mt-[16px] lg:mb-[12px]">
                        {apply.title}
                      </p>
                      <p className=" text-[13px] lg:text-[16px] leading-[20px] font-normal text-[#929899]">
                        {apply.text}
                      </p>
                    </div>
                    <button className="bg-[#132124] mt-6 w-[132px] mb-6 h-[40px] text-[#FFFFFF] px-4 py-1 text-[16px] rounded-full">
                      Apply Now
                    </button>
                  </div>

                  <div className="relative rounded-br-[32px] overflow-hidden w-[134px] h-auto lg:w-[273px] p-0 lg:h-[307px] bg-[url('/assets/ImageBg.png')] bg-bottom bg-no-repeat bg-contain ">
                    <Image
                      className="w-[282px] object-contain  right-[10px] bottom-0 absolute rounded-br-sm "
                      width={0}
                      height={0}
                      src={apply.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* benefits */}

      <div
        id="benefits"
        className=" lg:w-[1376px] lg:h-[586px] rounded-[36px] flex justify-center mx-auto py-[44px] px-[14px] lg:px-[58px] lg:bg-[url('/assets/MobileImpact.png')] md:bg-[url('/assets/OurBenefit.png')] bg-no-repeat bg-[#122023]"
      >
        <div className="flex flex-col justify-between   ">
          <div className="flex justify-center text-center flex-col">
            <h3 className="text-[30px] lg:text-[32px] items-center leading-[36px] lg:leading-[42px] font-bold text-white">
              Our <span className="italic"> Benefits</span>
            </h3>
            <p className="my-[24px] items-center text-[16px] font-[300] leading-[20px] text-white">
              We believe in a holistic approach to financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-[24px]">
            {Benefits.map((benefit, index) => (
              <div
                key={index}
                className=" w-[311px] lg:w-[410.67px] h-[128px] rounded-[21px] flex flex-col gap-[16px] bg-[#233033] p-[20px]"
              >
                <div className="flex gap-[8px] ">
                  <Image
                    className="w-[28px] h-[28px] "
                    width={28}
                    height={28}
                    src={benefit.icon}
                  />

                  <p className="text-white text-[18px] leading-[28px] font-semibold ">
                    {benefit.title}
                  </p>
                </div>
                <p className="text-[#929899] text-[16px] leading-[20px] font-normal ">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
