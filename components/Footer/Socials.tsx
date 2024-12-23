import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { socials } from "@/lib/constants";

const Socials = () => {
  return (
    <div className="-mr-2 flex items-center gap-2">
      {socials.map(({ name, icon, link }, index) => (
        <Button
          variant="ghost"
          asChild
          size="icon"
          key={index}
          aria-label={`Visit our ${name} page`}
          title={`Visit our ${name} page`}
        >
          <Link href={link} className="link">
            {React.cloneElement(icon({}), {
              className: "!size-6",
            })}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
