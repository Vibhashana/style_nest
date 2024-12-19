import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

const Navbar = () => {
    return (
        <header className="flex w-full items-center">
            <nav className="flex w-full justify-between items-center py-4">
                <Link href="/" prefetch={false}>
                    <Image src="/stylenest.svg" alt="Style Nest" width={105} height={32} />
                </Link>
                <div className="hidden md:flex gap-8 ml-20">
                    <Link href="#">Shop all</Link>
                    <Link href="#">Latest arrivals</Link>
                </div>
                <div className="ml-auto">
                    <Button variant="ghost" size="icon">
                        <ShoppingBag className="!size-6" />
                    </Button>
                </div>
            </nav>
            <Sheet>
                <SheetTitle>
                    <span className="sr-only">Navigation menu panel</span>
                </SheetTitle>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="!size-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" showCloseButton={false}>
                    <div className="flex justify-between items-center">
                        <Link href="/" prefetch={false}>
                            <Image src="/stylenest.svg" alt="Style Nest" width={105} height={32} />
                        </Link>
                        <SheetClose>
                            <X />
                        </SheetClose>
                    </div>
                    <div className="grid gap-2 mt-8">
                        <Link href="#">Shop all</Link>
                        <Link href="#">Latest arrivals</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Navbar