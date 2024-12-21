import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiShoppingBag3Line } from "react-icons/ri";
import MobileNav from "@/components/Navbar/MobileNav";

const Navbar = () => {
  const menu = [
    { title: "Shop all", url: "#" },
    { title: "Latest arrivals", url: "#" },
  ];

  return (
    <header className="py-[1.625rem]">
      <div className="content-container flex w-full items-center">
        <nav className="flex w-full items-center justify-between">
          <Link href="/" prefetch={false}>
            <Image
              src="/stylenest.svg"
              alt="Style Nest"
              width={105}
              height={32}
            />
          </Link>
          {menu.length > 0 && (
            <div className="ml-[8.5rem] hidden gap-9 md:flex">
              {menu.map(({ title, url }, index) => (
                <Link key={index} href={url} className="link font-medium">
                  {title}
                </Link>
              ))}
            </div>
          )}

          <div className="-mr-1 ml-auto">
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <RiShoppingBag3Line className="!size-6 text-neutral-900" />
              <span className="sr-only">View shopping cart</span>
            </Button>
          </div>
        </nav>
        <MobileNav menu={menu} />
      </div>
    </header>
  );
};

export default Navbar;
