"use client";
import Link from "next/link";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { NAVIGATION_LINKS } from "@/constants";
import { twMerge } from "tailwind-merge";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(50);
  const location = usePathname();
  console.log(location);
  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={twMerge(
        showNavbar
          ? "transform -translate-y-[100px] ease-in-out duration-100"
          : "transform translate-x-0 ease-in-out duration-100",
        "sticky bg-white/90 top-0 pt-6 z-10"
      )}
    >
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
          {/* Mobile menu button*/}
          <button
            onClick={() => setOpen(true)}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="absolute -inset-0.5" />
            <FaBars className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Image
              src="/static/main-logo.png"
              alt="Your Company"
              width={100}
              height={100}
            />
          </div>
          <div className="hidden md:ml-6 md:block">
            <div className="flex space-x-4">
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className={twMerge(
                    //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    "rounded-md px-3 py-2 text-lg font-medium"
                  )}
                  // aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as="nav">
        <Dialog as="div" className="relative z-10 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex [max-width:60%] sm:[max-width:40%] pl-10 ease duration-300">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="flex justify-end px-4 sm:px-6">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <FaXmark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="text-center space-y-1 px-2 pb-3 pt-2">
                          {NAVIGATION_LINKS.map((item) => (
                            <Link
                              key={item.name}
                              href={item.url}
                              className={twMerge(
                                // item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                "block rounded-md px-3 py-2  text-lg font-medium"
                              )}
                              //   aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Navigation;
