import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";

const Header: React.FC = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href="/">
            <h3 className="text-[30px]">
              {/* <span className="font-black">Personal</span>{" "} */}
              <span className="font-light">Portfolio</span>{" "}
              <span className="text-accent">.</span>
            </h3>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
