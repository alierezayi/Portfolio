import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";

const githubID = "alierezayi";
const facebookID = "profile.php?id=61552384168244&mibextid=9R9pXO";
const instagramID = "ali._rezuyi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D";
const telegramID = "AliRezuyi";
const linkedinID = "ali-rezaei-129414237";
const twitterID = "AliRezuyi";

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      {/* <Link
        target="blank"
        href={`https://github.com/${githubID}`}
        className="hover:text-accent transition-all duration-300"
      >
        <TbBrandGithub />
      </Link> */}

      <Link
        target="blank"
        href={`https://facebook.com/${facebookID}`}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        target="blank"
        href={`https://instagram.com/${instagramID}`}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        target="blank"
        href={`https://t.me/${telegramID}`}
        className="hover:text-accent transition-all duration-300"
      >
        <LiaTelegramPlane />
      </Link>

      <Link
        target="blank"
        href={`https://twitter.com/${twitterID}`}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>

      <Link
        target="blank"
        href={`https://linkedin.com/in/${linkedinID}`}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
