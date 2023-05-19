import EventCard from "@/components/EventCard";
import { featuredEvents } from "@/types/data";
import Image from "next/image";

const home = () => {
  return (
    <div>
      <div className="h-96 w-full bg-blue-300 relative landingHeader">
        <Image alt="hackers" src={"/bg.jpg"} fill />
      </div>
      <div className="p-4">
        <h1 className="text-2xl mb-2">Featured events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default home;
