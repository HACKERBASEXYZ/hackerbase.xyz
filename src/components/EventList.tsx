import EventCard from "./EventCard";
import { Event } from "@/types/event";

const EventList = ({ events }: { events: Event[] }) => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
