import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";

interface MobileNavProps {
  menu: { title: string; url: string }[];
}

const MobileNav = ({ menu }: MobileNavProps) => {
  return (
    <>
      <Sheet>
        <SheetTitle>
          <span className="sr-only">Navigation menu panel</span>
        </SheetTitle>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 md:hidden">
            <Menu className="!size-5 text-neutral-900" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" showCloseButton={false}>
          <div className="flex items-center justify-between">
            <Link href="/" prefetch={false}>
              <Image
                src="/stylenest.svg"
                alt="Style Nest"
                width={105}
                height={32}
              />
            </Link>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close navigation menu"
              >
                <X className="text-neutral-500" />
              </Button>
            </SheetClose>
          </div>
          {menu.length > 0 && (
            <div className="mt-8 grid gap-2">
              {menu.map(({ title, url }, index) => (
                <Link key={index} href={url} className="py-2 text-neutral-500">
                  {title}
                </Link>
              ))}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
