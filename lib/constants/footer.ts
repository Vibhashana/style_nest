import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { IconType } from "react-icons";

type Social = {
  name: string;
  icon: IconType;
  link: string;
};

type FooterColumn = {
  category: string;
  links: { name: string; href: string }[];
};

export const socials: Social[] = [
  {
    name: "YouTube",
    icon: RiYoutubeLine,
    link: "#",
  },
  {
    name: "Instagram",
    icon: RiInstagramLine,
    link: "#",
  },
  {
    name: "Facebook",
    icon: RiFacebookBoxLine,
    link: "#",
  },
  {
    name: "Github",
    icon: RiGithubLine,
    link: "#",
  },
  {
    name: "Twitter",
    icon: RiTwitterXLine,
    link: "#",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    category: "Shop Categories",
    links: [
      { name: "Unisex", href: "#" },
      { name: "Women", href: "#" },
      { name: "Men", href: "#" },
    ],
  },
  {
    category: "Shop Collections",
    links: [
      { name: "Latest arrivals", href: "#" },
      { name: "Urban Oasis", href: "#" },
      { name: "Cozy Comfort", href: "#" },
      { name: "Fresh Fusion", href: "#" },
    ],
  },
];
