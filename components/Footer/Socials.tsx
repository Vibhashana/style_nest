import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Socials = () => {
  const socials = [
    {
      name: "YouTube",
      icon: <RiYoutubeLine />,
      link: "#",
    },
    {
      name: "Instagram",
      icon: <RiInstagramLine />,
      link: "#",
    },
    {
      name: "Facebook",
      icon: <RiFacebookBoxLine />,
      link: "#",
    },
    {
      name: "Github",
      icon: <RiGithubLine />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <RiTwitterXLine />,
      link: "#",
    },
  ];

  return (
    <div className="-mr-2 flex items-center gap-2">
      {socials.map(({ name, icon, link }, index) => (
        <Button
          variant="ghost"
          asChild
          size="icon"
          // className="!size-10"
          key={index}
          aria-label={`Visit our ${name} page`}
          title={`Visit our ${name} page`}
        >
          <Link href={link} className="link">
            {React.cloneElement(icon, {
              className: "!size-[24px]",
            })}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
