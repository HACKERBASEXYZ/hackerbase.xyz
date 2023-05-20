"use client";

import { AiOutlineHeart } from "react-icons/ai";

const LikeButton: React.FC = () => {
  return (
    <button
      className="z-10 rounded-full border-gray-300 border inline-block p-2 bg-white shadow-lg absolute top-1/2 right-2 -translate-y-1/2"
      onClick={() => console.log("Liked event")}
    >
      <AiOutlineHeart size={22} className="hover:text-red-500" />
    </button>
  );
};

export default LikeButton;
