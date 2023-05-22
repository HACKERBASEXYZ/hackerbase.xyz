import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "./LikeButton";

const EventCard: React.FC<Event> = ({
  description,
  end_date,
  image,
  location,
  organisers,
  received_funding,
  requested_funding,
  sponsors,
  start_date,
  subtitle,
  title,
  type,
  wallet,
  id,
}) => {
  return (
    <div className="relative">
      <LikeButton />
      <Link href={`/events/${id}`}>
        <div className="flex flex-col shadow-lg hover:shadow-2xl">
          <div className="relative w-full h-48">
            <Image alt="Event image" src={image} fill />
          </div>
          <div className="pl-4">
            <h1 className="font-bold mt-4">{title}</h1>
            <h2 className="mt-2 text-orange-500">{start_date}</h2>
            <h2 className="text-gray-400 mt-2">{location}</h2>
            <div className="mt-2">
              {organisers.map((organiser) => (
                <h2 key={organiser}>{organiser}</h2>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
