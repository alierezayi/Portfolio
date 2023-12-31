import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        alt=""
        className="w-full h-full hidden"
      />
    </div>
  );
};

export default Avatar;
