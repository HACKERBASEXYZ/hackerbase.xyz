import EventCard from "@/components/EventCard";
import { events } from "@/types/data";
import Image from "next/image";

const eventsPage = () => {
  return (
    <div>
      <div className="relative eventsHeader">
        <Image alt="Events image" src="/water.jpg" fill />
        <h1 className="text-white text-4xl absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-2/3">
          Events
        </h1>
      </div>
      <div className="p-4 flex flex-col md:flex-row w-full">
        <div className="w-1/4">
          <h1>Filter</h1>
        </div>
        <div className="col-span-3 md:w-3/4">
          <h1 className="border-2 border-black rounded mb-4 pl-2">
            🔍 Searchbar
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default eventsPage;
