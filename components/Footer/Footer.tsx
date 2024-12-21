import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer>
      <div className="content-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="">
            <p className="mb-2 text-xl font-medium text-neutral-900">
              Join our newsletter
            </p>
            <p className="text-neutral-500">
              We&apos;ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:max-w-sm md:flex-row">
            <Input type="email" placeholder="Enter your email" />
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Subscribe
            </Button>
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/stylenest.svg"
              alt="Style Nest"
              width={105}
              height={32}
            />
            <p>
              Craft stunning style journeys that weave more joy into every
              thread.
            </p>
          </div>
          <div></div>
        </div>
        <hr className="my-6 border-neutral-200" />
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} StyleNest, Inc. All rights
            reserved.
          </p>

          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
