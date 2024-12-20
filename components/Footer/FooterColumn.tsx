import Link from "next/link";

type FooterColumnProps = {
  category: string;
  links: {
    name: string;
    href: string;
  }[];
};

const FooterColumn = ({ category, links }: FooterColumnProps) => {
  return (
    <div className="grid gap-4">
      {category && <h3 className="text-sm uppercase">{category}</h3>}
      {links.length > 0 &&
        links.map(({ name, href }, index) => (
          <Link href={href} key={index}>
            {name}
          </Link>
        ))}
    </div>
  );
};

export default FooterColumn;
