import React from "react";

export default function ButtonComponent({ onClick, title, color, height }) {
  return (
    <button
      onClick={() => onClick()}
      type="submit"
      className="w-full flex justify-center bg-red-800 hover:bg-red-500 text-gray-100 p-2 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
    >
     {title}
    </button>
  );
}
