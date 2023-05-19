import FeaturedEvents from "@/components/FeaturedEvents";
import Image from "next/image";

const home = () => {
  return (
    <div>
      <div className="h-96 w-full bg-blue-300 relative header">
        <Image alt="hackers" src={"/bg.jpg"} fill />
      </div>
      <div className="p-4">
        <FeaturedEvents />
      </div>
    </div>
  );
};

export default home;
