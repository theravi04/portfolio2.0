"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
//   console.log(pathname);

  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`text-white capitalize font-medium transition-all 
                hover:text-accent hover:border-accent ${
                  link.path === pathname ? "text-accent border-accent border-b-2" : "text-foreground"
                }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
