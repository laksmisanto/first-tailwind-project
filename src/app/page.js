import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <div className="banner__section bg-[url('../assets/bg.jpg')] bg-center ">
        <div className="banner__container w-full h-screen bg-[linear-gradient(135deg,_rgba(13,16,40,1)_0%,_rgba(13,16,40,0.6)_35%,_rgba(255,82,2,0.8)_100%)]">
          <div className="container w-full h-full flex items-center justify-center">
            <div className="banner__content w-2/3 text-center mx-auto">
              <h1 className="font-roboto font-bold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[84px] capitalize text-white ">
                better education for a better world.
              </h1>
              <p className=" font-roboto text-sm sm:text-base lg:text-lg lg:px-20 xl:px-40 text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                pariatur cupiditate tenetur aperiam. Sed, alias! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eligendi, aliquid?
              </p>
              <button className="font-roboto font-bold uppercase text-base lg:text-xl mt-10 px-6 py-3 lg:px-10 lg:py-5 bg-[#FF5202] transition ease-in-out duration-300 hover:bg-[#0D1028]  text-slate-50">
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="service__section mt-20 mb-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 lg:gap-x-6 gap-y-6">
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 text-center transition ease-in-out duration-300 bg-[#0D1028] hover:bg-[#FF5202] text-white">
            <div className="icon w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto mb-10">
              <FaUsers className="w-full h-full" />
            </div>
            <h2 className="font-roboto font-bold  text-lg md:text-xl lg:text-2xl">
              Skilled Lecturers
            </h2>
            <p className="font-roboto text-sm md:text-base lg:text-lg pt-2 pb-6">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-roboto animation ease-in-out duration-300 uppercase text-base font-bold hover:text-[#0D1028] flex items-center justify-center"
            >
              read more <BiChevronRight className="w-8 h-8" />
            </Link>
          </div>
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 text-center transition ease-in-out duration-300 bg-[#0D1028] hover:bg-[#FF5202] text-white">
            <div className="icon w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto mb-10">
              <FaUserGraduate className="w-full h-full" />
            </div>
            <h2 className="font-roboto font-bold  text-lg md:text-xl lg:text-2xl">
              Scholarship Facility
            </h2>
            <p className="font-roboto text-sm md:text-base lg:text-lg pt-2 pb-6">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-roboto animation ease-in-out duration-300 uppercase text-base font-bold hover:text-[#0D1028] flex items-center justify-center"
            >
              read more <BiChevronRight className="w-8 h-8" />
            </Link>
          </div>
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 text-center transition ease-in-out duration-300 bg-[#0D1028] hover:bg-[#FF5202] text-white">
            <div className="icon w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto mb-10">
              <GiOpenBook className="w-full h-full" />
            </div>
            <h2 className="font-roboto font-bold text-lg md:text-xl lg:text-2xl">
              Book Library & Store
            </h2>
            <p className="font-roboto text-sm md:text-base lg:text-lg pt-2 pb-6">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-roboto animation ease-in-out duration-300 uppercase text-sm md:text-base lg:text-lg font-bold hover:text-[#0D1028] flex items-center justify-center"
            >
              read more <BiChevronRight className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
