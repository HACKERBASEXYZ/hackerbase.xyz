import { featuredEvents } from "@/types/data";
import EventList from "./EventList";

const FeaturedEvents = () => {
  return (
    <div>
      <h1 className="text-2xl mb-2">Featured events</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default FeaturedEvents;
