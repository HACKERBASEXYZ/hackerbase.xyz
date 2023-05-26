"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import { useSupabase } from "@/context/UserAuthenticationContext";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { session } = useSupabase();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathName]);

  return (
    <div
      className={`${
        menuOpen ? "fixed" : "flex"
      } w-full h-[90px] p-4 border-b border-gray-200 bg-white z-50`}
    >
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex flex-row items-center gap-8">
          <Link href={"/"}>
            <h1 className="text-2xl">HACKERBASE</h1>
          </Link>
          <Link href={"/events"} className="hidden md:flex">
            Events
          </Link>
        </div>
        <div
          className="md:hidden flex flex-row items-center cursor-pointer justify-between ml-auto gap-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose size={25} color="black" />
          ) : (
            <AiOutlineMenu size={25} color="black" />
          )}
        </div>
        <div className="hidden md:flex flex-row items-center justify-between ml-auto gap-8">
          {session ? (
            <h1
              className="cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              Profile
            </h1>
          ) : (
            <h1 className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
              Login
            </h1>
          )}
          <Link href={"/events/create"} className="ml-auto">
            <h1 className="bg-orange-500 border rounded-full px-4 py-2 font-bold text-white">
              Create Event
            </h1>
          </Link>
        </div>
      </div>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {menuOpen && (
        <div className="md:hidden border-t border-black fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-white z-50 text-black flex flex-col p-8 overflow-auto items-center gap-5">
          <Link href="/events">Events</Link>
          {session ? (
            <h1
              className="cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              Profile
            </h1>
          ) : (
            <h1 className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
              Login
            </h1>
          )}
          <Link href="/events/create">
            <h1 className="bg-orange-500 w-[200px] border rounded-full px-4 py-2 font-bold text-white mt-auto">
              Create Event
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
