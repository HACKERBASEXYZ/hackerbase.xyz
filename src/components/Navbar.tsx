import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center bg-white w-full p-4 shadow-lg">
      <div className="flex flex-row items-center gap-8">
        <Link href={"/"}>
          <h1 className="text-2xl">HACKERBASE</h1>
        </Link>
        <Link href={"/events"}>Events</Link>
      </div>
      <div className="flex flex-row items-center justify-between ml-auto gap-8">
        <h1>Login</h1>
        <Link href={"/events/create"} className="ml-auto">
          <h1 className="bg-orange-500 border rounded-full px-4 py-2 font-bold text-white">
            Create Event
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
