import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

const Navbar = () => {
    return (
        <header className="">
            <div className="content-container flex w-full items-center">
                <nav className="flex w-full justify-between items-center py-4">
                    <Link href="/" prefetch={false}>
                        <Image src="/stylenest.svg" alt="Style Nest" width={105} height={32} />
                    </Link>
                    <div className="hidden md:flex gap-8 ml-20">
                        <Link href="#" className="text-neutral-500">Shop all</Link>
                        <Link href="#" className="text-neutral-500">Latest arrivals</Link>
                    </div>
                    <div className="ml-auto">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Shopping cart"
                        >
                            <ShoppingBag className="!size-6 text-neutral-500" />
                            <span className="sr-only">View shopping cart</span>
                        </Button>
                    </div>
                </nav>

                <Sheet>
                    <SheetTitle>
                        <span className="sr-only">Navigation menu panel</span>
                    </SheetTitle>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden ml-4">
                            <Menu className="!size-6 text-neutral-500" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" showCloseButton={false}>
                        <div className="flex justify-between items-center">
                            <Link href="/" prefetch={false}>
                                <Image src="/stylenest.svg" alt="Style Nest" width={105} height={32} />
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
                        <div className="grid gap-2 mt-8">
                            <Link href="#" className="text-neutral-500">Shop all</Link>
                            <Link href="#" className="text-neutral-500">Latest arrivals</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Navbar