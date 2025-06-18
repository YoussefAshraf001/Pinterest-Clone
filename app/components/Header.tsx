import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <header className="fixed top-0 left-[80px] right-0 h-[80px] bg-white flex items-center px-4 z-40">
      <div className="flex flex-1 items-center gap-2 bg-gray-200 rounded-[10px] px-4 hover:bg-gray-300">
        <CiSearch size={20} />
        <input
          className="bg-transparent outline-none w-full py-3"
          type="text"
          placeholder="Search"
        />
      </div>

      <FaUserCircle
        className="hover:bg-gray-100 rounded-[15px] p-2 cursor-pointer w-[50px] h-[50px] ml-[10px]"
        size={32}
      />
      <IoIosArrowDown className="text-gray-400 flex items-center justify-center hover:bg-gray-200 rounded-full p-2 cursor-pointer w-[35px] h-[35px]" />
    </header>
  );
}

export default Header;
