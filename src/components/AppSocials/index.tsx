import { SOCIAL_MEDIA } from "@/constants";

const Socials = () => {
  return (
    <div className="fixed lg:left-10 w-10 bottom-0 left-5 right-auto z-40 text-primary ">
      <ul className="md:flex hidden flex-col items-center m-0 p-0 list-none after:content-[''] after:block after:w-[2px] after:h-[120px] after:m-auto after:bg-primary before:content-[''] before:block before:w-[2px] before:h-[200px] before:m-auto before:bg-primary ">
        {SOCIAL_MEDIA.map((soc) => (
          <li
            key={soc.name}
            className="last-of-type:mb-[20px] first-of-type:mt-[20px] p-2 transform hover:-translate-y-1 focus:-translate-y-1 ease-in-out duration-75"
          >
            <a href={soc.link} className="text-primary  font-bold text-xl ">
              <soc.icon className="h-8 w-8" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
