import React from "react";
import { sidebarItems } from "../../data/sidebar_items";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div class="flex ">
      <SidebarComponent />
      <main class="  min-h-screen w-full">
        <NavbarComponent />
        <div class="w-full ">{children}</div>
      </main>
    </div>
  );
}

function NavbarComponent() {
  return (
    <nav class="flex justify-between px-10 py-6">
      <div class="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96" />
      <div class="flex items-center">
        <img
          class="w-8 rounded-full mr-5"
          src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
          alt="Elon Musk"
        />
        <p>Admin</p>
      </div>
    </nav>
  );
}

function SidebarComponent() {
  return (
    <div
      class="flex lg:flex md:flex md:w-2/5 lg:w-1/5 hidden w-1/5 h-screen relative"
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/32/3a/3c/323a3c47cdba4d457c50a95ee331f74c.jpg")`,
      }}
    >
      <div className="absolute bg-dark opacity-80  w-100 h-100" />
      <div class="mx-5  py-10 z-10">
        <h1 class="text-2xl font-bold mb-10 cursor-pointer text-danger duration-150">
          KFC
        </h1>
        <ul>
          {sidebarItems.map((value, i) => {
            return (
              <Link key={i} href={value.link}>
                <li class="flex space-x-2 mt-10 cursor-pointer text-white hover:text-danger duration-150">
                  {value.icon}
                  <span class="font-semibold">{value.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
