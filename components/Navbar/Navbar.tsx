import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const menu = [
    { title: "Shop all", url: "#" },
    { title: "Latest arrivals", url: "#" },
  ];

  return (
    <header className="py-6">
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
            <div className="ml-24 hidden gap-8 md:flex">
              {menu.map(({ title, url }, index) => (
                <Link
                  key={index}
                  href={url}
                  className="font-medium text-neutral-500"
                >
                  {title}
                </Link>
              ))}
            </div>
          )}

          <div className="ml-auto">
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingBag className="!size-5 text-neutral-900" />
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
