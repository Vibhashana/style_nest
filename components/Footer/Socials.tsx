import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Button } from "../ui/button";
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
    <div className="flex items-center">
      {socials.map(({ name, icon, link }, index) => (
        <Button
          variant="ghost"
          asChild
          key={index}
          aria-label={`Visit our ${name} page`}
          title={`Visit our ${name} page`}
        >
          <Link href={link} className="link">
            {React.cloneElement(icon, {
              className: "!size-6",
            })}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
