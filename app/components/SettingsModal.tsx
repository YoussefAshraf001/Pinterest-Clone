import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function SettingsModal({ isOpen, onClose }: Props) {
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
        className="absolute bottom-4 left-[90px] w-[380px] rounded-xl bg-white border border-gray-300 shadow-xl p-4"
      >
        <div className="text-sm text-gray-800">
          <p className="hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer">
            Settings
          </p>
          <p className="hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer">
            Home feed tuner
          </p>
          <p className="hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer">
            Claimed external accounts
          </p>
          <p className="hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer">
            Install the Windows app
          </p>
          <p className="hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer">
            Reports and violations center
          </p>
          <p className="hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer">
            Your privacy rights
          </p>
          <Link
            className="flex items-center justify-between hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer"
            href=""
          >
            <p>Help center</p>
            <LuExternalLink size={18} />
          </Link>
          <Link
            className="flex items-center justify-between hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer"
            href=""
          >
            <p>Terms of service</p>
            <LuExternalLink size={18} />
          </Link>
          <Link
            className="flex items-center justify-between hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer"
            href=""
          >
            <p>Privacy policy</p>
            <LuExternalLink size={18} />
          </Link>
          <Link
            className="flex items-center justify-between hover:bg-[#f0f0eb] px-2 py-3 rounded-[5px] cursor-pointer"
            href=""
          >
            <p>Be a beta tester</p>
            <LuExternalLink size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
