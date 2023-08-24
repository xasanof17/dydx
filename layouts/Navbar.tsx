"use client";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../assets";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa6";

const links = [
  {
    title: "Discover initiatives",
    href: "/",
  },
  {
    title: "Funded grants",
    href: "/",
  },
  {
    title: "Program expenses",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "FAQ",
    href: "/",
  },
];

const socials = [
  {
    name: "Telegram",
    href: "",
    Icon: <FaTelegram className="Icon" />,
  },
  {
    name: "Twitter",
    href: "",
    Icon: <FaTwitter className="Icon" />,
  },
  {
    name: "Discord",
    href: "",
    Icon: <FaDiscord className="Icon" />,
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <header className="sticky top-0 left-0 w-full py-4 lg:py-6 bg-primary z-40">
      <nav className="flex items-center justify-between container">
        <Link href="/" className={`${toggleMenu && "z-50"}`} title="Dydx Logo">
          <Image src={Logo} alt="dydx logo" width={112} />
        </Link>
        <div className="flex items-center space-x-3">
          <ul className="hidden lg:flex items-center justify-between">
            {links.map(({ title, href }, i) => (
              <li key={i}>
                <Link title={title} href={href} className="link">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            title="Apply for grant"
            className={`btn-primary ${toggleMenu && "z-50"}`}
          >
            Apply <span>for grant</span>
          </button>

          <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className={`lg:hidden flex items-center justify-center text-white ${toggleMenu && "z-50"
              }`}
          >
            {!toggleMenu ? (
              <Bars3Icon className="w-8 h-8 text-white" />
            ) : (
              <XMarkIcon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
        {toggleMenu && (
          <div className="fixed top-0 left-0 max-w-screen w-full min-h-screen flex flex-col items-center justify-center bg-bgSecondary z-40">
            <ul className="flex flex-col items-center space-y-3">
              {links.map(({ title, href }, i) => (
                <li key={i}>
                  <Link
                    title={title}
                    href={href}
                    className="link inline-block text-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-7 justify-center mt-12">
              {socials.map(({ name, href, Icon }, i) => (
                <Link key={i} href={href} target="_blank" title={name}>
                  {Icon}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
