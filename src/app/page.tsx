import Image from "next/image";
import EventCard from "@/components/EventCard";
import { Event } from "@/types/event";
import { getFeaturedEvents } from "@/utils/getFeaturedEvents";

const HomePage = async () => {
  const featuredEvents: Event[] = await getFeaturedEvents();

  return (
    <div>
      <div className="h-96 w-full bg-blue-300 relative landingHeader">
        <Image alt="hackers" src={"/bg.jpg"} fill />
      </div>
      <div className="px-10 md:px-20 lg:px-32 pt-4">
        <h1 className="text-2xl mb-2">Featured events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
