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
    <div className="grid gap-3">
      {category && (
        <h3 className="mb-1 text-sm uppercase text-neutral-400">{category}</h3>
      )}
      {links.length > 0 &&
        links.map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className="font-medium text-neutral-600"
          >
            {name}
          </Link>
        ))}
    </div>
  );
};

export default FooterColumn;
