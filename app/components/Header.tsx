"use client";

import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import AccountModal from "./AccountModal";
import { useState } from "react";

function Header() {
  const { data: session } = useSession();
  const [showAccount, setShowAccount] = useState(false);

  return (
    <header className="fixed top-0 left-[80px] right-0 h-[80px] bg-white flex items-center px-4 z-40">
      <div className="flex flex-1 items-center gap-2 bg-gray-100 rounded-[10px] px-4 hover:bg-gray-200">
        <CiSearch size={20} />
        <input
          className="bg-transparent outline-none w-full py-3"
          type="text"
          placeholder="Search"
        />
      </div>

      {session?.user ? (
        <div className="flex items-center">
          <Image
            src={session.user.image!}
            width={50}
            height={50}
            alt="user-image"
            className="hover:bg-gray-100 rounded-full p-2 cursor-pointer  ml-[10px]"
          />
          <IoIosArrowDown
            onClick={() => setShowAccount(!showAccount)}
            className="text-gray-400 flex items-center justify-center hover:bg-gray-200 rounded-full p-2 cursor-pointer w-[35px] h-[35px]"
          />
        </div>
      ) : (
        <button
          className="hover:bg-gray-100 rounded-[15px] p-2 cursor-pointer ml-[10px]"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      )}

      <AccountModal
        isOpen={showAccount}
        onClose={() => setShowAccount(false)}
      />
    </header>
  );
}

export default Header;
