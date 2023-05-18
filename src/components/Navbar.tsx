import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center bg-gray-300 rounded-full w-11/12 px-4 py-2 z-10 fixed top-5">
      <div className="flex flex-row items-center gap-8">
        <Link href={"/"}>
          <h1 className="text-2xl">HACKERBASE</h1>
        </Link>
        <Link href={"/events"}>Events</Link>
      </div>
      <div className="flex flex-row items-center justify-between ml-auto gap-8">
        <h1>Login</h1>
        <Link href={"/events/create"} className="ml-auto">
          <h1 className="">Create Event</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
