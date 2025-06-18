"use client";

import { useState } from "react";
import Image from "next/image";
import { CgAddR } from "react-icons/cg";
import { GoBell, GoHome } from "react-icons/go";
import {
  IoChatbubbleEllipsesOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import SettingsModal from "./SettingsModal";
import { RiHomeSmileFill } from "react-icons/ri";

function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-[80px] bg-white shadow-md flex flex-col items-center py-4 z-50">
        {/* Top Icons */}
        <div className="flex flex-col items-center gap-y-[23px]">
          <div className="pb-[1px]">
            <Image
              className="hover:bg-gray-100 rounded-[15px] p-2 cursor-pointer"
              src="/logo.png"
              alt="logo"
              width={45}
              height={44}
            />
          </div>
          <div className="w-[50px] h-[50px] flex items-center transition-all duration-300 justify-center rounded-[15px] cursor-pointer hover:bg-gray-100">
            <div className="relative w-[25px] h-[25px] cursor-pointer">
              <GoHome
                className={`absolute top-0 left-0 transition-opacity duration-300 ${
                  showSettings ? "opacity-100" : "opacity-0"
                }`}
                size={25}
              />
              <RiHomeSmileFill
                className={`absolute top-0 left-0 transition-opacity duration-300 ${
                  showSettings ? "opacity-0" : "opacity-100"
                }`}
                size={25}
              />
            </div>
          </div>

          <div>
            <button className="w-[50px] h-[50px] flex items-center transition-all duration-300 justify-center rounded-[15px] cursor-pointer hover:bg-gray-100">
              <CgAddR size={25} />
            </button>
          </div>
          <div>
            <button className="w-[50px] h-[50px] hover:bg-gray-100 transition-all duration-300 p-2 rounded-[15px] cursor-pointer flex justify-center items-center">
              <GoBell stroke="black" strokeWidth={1} size={25} />
            </button>
          </div>
          <div>
            <button className="w-[50px] h-[50px] hover:bg-gray-100 transition-all duration-300 p-2 rounded-[15px] cursor-pointer flex justify-center items-center">
              <IoChatbubbleEllipsesOutline
                stroke="black"
                strokeWidth={1}
                className="transition-transform scale-x-[-1]"
                size={25}
              />
            </button>
          </div>
        </div>

        {/* Spacer to push bottom icon down */}
        <div className="flex-1" />

        {/* Bottom Icon */}
        <div
          onClick={() => setShowSettings(!showSettings)}
          className="w-[50px] h-[50px] flex items-center transition-all duration-300 justify-center rounded-[15px] cursor-pointer hover:bg-gray-100"
        >
          <div className="relative w-[25px] h-[25px]">
            <IoSettings
              className={`absolute top-0 left-0 transition-opacity duration-300 ${
                showSettings ? "opacity-100" : "opacity-0"
              }`}
              size={25}
            />
            <IoSettingsOutline
              className={`absolute top-0 left-0 transition-opacity duration-300 ${
                showSettings ? "opacity-0" : "opacity-100"
              }`}
              size={25}
            />
          </div>
        </div>
      </aside>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  );
}

export default Sidebar;
