import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { projects } from "@/constants";
import Card from "./Card";

const Projects = () => {
  return (
    <section className="" id="projects">
      <div className="flex flex-col items-center justify-center max-w-[600px] mx-auto w-full px-4 mb-[80px]">
        <h2 className="text-heroLg text-white mb-4">
          Projects built with grants
        </h2>
        <p className="text-lg text-secondary text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <Link
          href="/"
          className="text-base text-grandBlue flex items-center space-x-2"
        >
          <p>View all funded projects</p>
          <ArrowRightIcon className="w-6 h-6 text-grandBlue" />
        </Link>
      </div>
      <div className="projects__content">
        {projects.map(({ from, to, text, title, sub }, i) => (
          <Card
            from={from}
            sub={sub}
            text={text}
            title={title}
            to={to}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
