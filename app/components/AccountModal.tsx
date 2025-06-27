import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function AccountModal({ isOpen, onClose }: Props) {
  const { data: session } = useSession();
  console.log(session);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Transparent backdrop */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="absolute top-14 right-[15px] w-[350px] h-[220px] p-2 rounded-[25px] bg-white border border-gray-100 shadow-xl"
      >
        <div className="text-gray-800 p-2">
          <p className="text-[12px] px-2 py-1 pb-4">Currently in</p>
          <div className="flex items-center gap-3 hover:bg-gray-100 rounded-[15px] cursor-pointer">
            <div>
              <Image
                src={session?.user?.image!}
                width={50}
                height={50}
                alt="user-image"
                className="rounded-full ml-[10px]"
              />
            </div>
            <div className="text-[13px]">
              <p className="font-bold capitalize text-[16px]">
                {session?.user?.name}
              </p>
              <p>Personal</p>
              <p>{session?.user?.email}</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <p className="text-[12px] px-2 pt-3">Your Accounts</p>
          <p
            onClick={() => signOut()}
            className="text-[14px] hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer"
          >
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountModal;
