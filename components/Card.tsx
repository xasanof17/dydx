import { Project } from "@/typing";

const variants = {
  base: "flex flex-col min-w-[390px] min-h-[560px] w-full",
  noImage: "justify-start p-6 rounded-2xl bg-bgSecondary",
  image: "",
};

const Card = ({ sub, title, from, to, text, image, date }: Project) => {
  return (
    <div
      className={`${variants.base} ${
        image ? variants.image : variants.noImage
      }`}
    >
      {!image ? (
        <div>
          <span className="text-monoMd font-normal font-spaceMono text-secondary">
            {sub}
          </span>
          <h3 className="text-white font-bold text-heroM">{title}</h3>
          <p className="text-monoMd font-spaceMono text-secondary font-normal">
            Funding amount: ${from} - ${to}
          </p>
          <p className="text-white text-md font-normal mt-4">{text}</p>
        </div>
      ) : (
        <div>rasm</div>
      )}

      {!image ? <div>Profile Photos</div> : <p>{date}</p>}
    </div>
  );
};

export default Card;
