import Image from "next/image";

const home = () => {
  return (
    <div>
      <div className="w-full bg-blue-300">
        <Image alt="hackers" src={"/hackers.jpeg"} width={500} height={100} />
      </div>
    </div>
  );
};

export default home;
