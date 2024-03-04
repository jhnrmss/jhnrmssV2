import { SOCIAL_MEDIA } from "@/constants";

function AppFooter() {
  return (
    <footer aria-labelledby="footer-heading" className="mt-20">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8 ">
        <div className="flex space-x-8 items-center justify-center md:hidden ">
          {SOCIAL_MEDIA.map((soc) => (
            <a key={soc.name} href={soc.link}>
              <soc.icon className="h-8 w-8 text-primary" />
            </a>
          ))}
        </div>
        <div className="text-center border-t tracking-wider border-white/10 pt-8 ">
          <p className="text-base leading-5 text-gray-600">
            Designed & Built by John Romie Reyes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
