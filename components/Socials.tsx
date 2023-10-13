import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link
        target="blank"
        href="https://www.youtube.com/channel/UCj-GaPj3JZ121KbO-3He8Uw"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>

      <Link
        target="blank"
        href="https://www.facebook.com/profile.php?id=61552384168244&mibextid=9R9pXO"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        target="blank"
        href="https://instagram.com/ali._rezuyi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        target="blank"
        href="https://t.me/AliRezuyi"
        className="hover:text-accent transition-all duration-300"
      >
        <LiaTelegramPlane />
      </Link>

      <Link
        target="blank"
        href="https://www.linkedin.com/in/ali-rezaei-129414237"
        className="hover:text-accent transition-all duration-300"
      >
        <FiLinkedin />
      </Link>

      <Link
        target="blank"
        href="https://twitter.com/AliRezuyi"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>
    </div>
  );
};

export default Socials;
