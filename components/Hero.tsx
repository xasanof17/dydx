import { DownArrow, HeroLine } from "@/assets";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const data = [
  {
    num: "100+",
    title: "projects funded",
  },
  {
    num: "$3+ million",
    title: "awarded",
  },
  {
    num: "400+",
    title: "projects funded",
  },
];

const Hero = () => {
  return (
    <section className="mt-[80px] min-h-screen max-w-[835px] w-full px-4 mx-auto flex flex-col items-center">
      <h1 className="text-hero font-bold text-white text-center relative">
        <span>Powering the future of dYdX through community grants</span>
        <div className="absolute -bottom-6 right-7">
          <div className="relative w-[280px] h-12">
            <Image src={HeroLine} alt="line" fill />
          </div>
        </div>
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-[40px]">
        <button className="btn-secondary w-full">Discover RFPs</button>
        <button className="btn-primary w-full flex items-center space-x-3">
          <p>Apply for grant</p>
          <ArrowRightIcon className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="grid grid-cols-3 mt-[80px] w-full">
        {data.map(({ num, title }, i) => (
          <div className="flex flex-col items-center justify-center">
            <span className="text-monoXl text-white font-spaceMono">{num}</span>
            <h3 className="text-monoLg text-secondary font-spaceMono">
              {title}
            </h3>
          </div>
        ))}
      </div>
      <div className="relative w-8 h-[100px] animate-bounce mt-[80px]">
        <Image src={DownArrow} alt="down arrow" fill />
      </div>
    </section>
  );
};

export default Hero;
