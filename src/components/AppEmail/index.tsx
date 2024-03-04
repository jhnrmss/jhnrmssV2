import { CONTACT_DETAILS } from "@/constants";

const Email = () => {
  return (
    <div className="fixed lg:right-10 w-10 bottom-0 right-5 left-auto z-40 text-primary ">
      <div className="md:flex hidden flex-col items-center after:content-[''] after:block after:w-[2px] after:h-[120px] after:m-auto after:bg-primary before:content-[''] before:block before:w-[2px] before:h-[120px] before:m-auto before:bg-primary">
        <div className="last-of-type:mb-[20px] first-of-type:mt-[20px] p-2 transform hover:-translate-y-1 focus:-translate-y-1 ease-in-out duration-75">
          <a
            href={CONTACT_DETAILS[1].Link}
            className="text-primary font-medium italic [writing-mode:vertical-lr]"
          >
            {CONTACT_DETAILS[1].ContactTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Email;
