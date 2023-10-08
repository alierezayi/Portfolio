import Image from "next/image";


const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-10 -bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles.png"}
        width={220}
        height={48}
        alt=""
        className="w-full h-full"
      />{" "}
      
    </div>
  );
};

export default Circles;
