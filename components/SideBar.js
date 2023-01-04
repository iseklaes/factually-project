import { forwardRef } from "react";
import Link from "next/link";
import { NewspaperIcon ,HomeIcon, TrophyIcon, UserIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-auto h-full bg-[#1C3253] shadow-sm">
      <div className="flex justify-center items-center mt-6 mb-14">
        <div><NewspaperIcon className="h-10 w-10 fill-white"></NewspaperIcon></div>
        <div><h1 className="text-white">Factually</h1></div>
      </div>
      
      
    <div className="rounded-3xl bg-white h-auto w-auto pt-5 mx-7 shadow-sm"><div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-red-500 text-white"
                : "text-[#1C3253] hover:bg-red-500 hover:text-white"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <h1>Home</h1>
            </div>
          </div>
        </Link>
        <Link href="/achievements">
          <div
            className={`pl-6 py-3 mx-5 rounded-lg text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/achievements"
                ? "bg-red-500 text-white"
                : "text-[#1C3253] hover:bg-red-500 hover:text-white"
            }`}
          >
            <div className="mr-2">
              <TrophyIcon className="h-5 w-5" />
            </div>
            <div className="mr-5">
              <p>Achievements</p>
            </div>
          </div>
        </Link>
        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-red-500 text-white"
                : "text-[#1C3253] hover:bg-red-500 hover:text-white"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <Link href="/login">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/logout"
                ? "bg-red-500 text-white"
                : "text-red-400 hover:bg-red-500 hover:text-white"
            }`}
          >
            <div className="mr-2">
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        </Link>
      </div>
      </div>

      
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
