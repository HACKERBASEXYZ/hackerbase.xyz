"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

import EventCard from "@/components/EventCard";

import { featuredEvents } from "@/utils/data";
import { getUsers, updateUser } from "@/utils/supabaseUsers";
import { useSupabase } from "@/context/UserAuthenticationContext";

const ProfilePage = () => {
  const router = useRouter();
  const { session, supabase } = useSupabase();
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(session?.user.email),
  });

  useEffect(() => {
    if (isSuccess) {
      setForm({
        email: data[0].email,
        firstName: data[0].firstName,
        lastName: data[0].lastName,
        password: "",
      });
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen py-10 gap-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  const handleClickUpdate = async () => {
    const response = await updateUser({
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      id: data[0].id,
    });

    if (!response.ok) {
      return toast.error("Error to Save Profile", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    toast.success("Saved", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleClickSignout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="flex flex-col relative justify-center items-center min-h-screen py-10 gap-10">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className="absolute top-10 right-10 cursor-pointer"
        onClick={() => handleClickSignout()}
      >
        <FaSignOutAlt size={30} color="black" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="rounded-full flex items-center justify-center w-[80px] h-[80px]">
          <FaUserAlt size={50} color="black" />
        </div>
        <h1>{`${data[0].firstName} ${data[0].lastName}`}</h1>
      </div>
      <div className="flex flex-col w-full md:w-5/6 px-5 md:px-10 gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-lg p-2 focus:outline-none bg-gray-200"
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-lg p-2 focus:outline-none bg-gray-200"
            value={form.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-lg p-2 focus:outline-none bg-gray-200"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </div>
        <button
          onClick={() => handleClickUpdate()}
          className="w-[200px] m-auto bg-orange-500 border rounded-full px-4 py-2 font-bold text-white"
        >
          Save Profile
        </button>
      </div>
      <div className="flex w-full flex-col px-5 md:px-10 gap-5">
        <h1 className="text-[24px] font-[600]">My events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
