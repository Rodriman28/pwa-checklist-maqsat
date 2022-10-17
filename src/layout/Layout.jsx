import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="bg-slate-100 h-screen">
      <div className="flex items-center px-3 justify-between bg-[#558b2f] h-16 ">
        <h1 className="text-2xl">Maqsat Logo</h1>
        <button
          className={`${
            sidebar ? `opacity-0` : `opacity-100`
          } transition-opacity ease-in-out duration-300 md:hidden`}
          onClick={() => setSidebar(true)}
          disabled={sidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-2">
        <aside
          className={`${
            sidebar ? `-translate-x-0` : `-translate-x-full`
          }  transition-transform ease-in-out duration-300 z-10 absolute top-0 bg-white border-slate-400 border-r-2 w-80 h-screen md:relative md:-translate-x-0 md:h-[600px] md:w-60 md:rounded-tr-2xl md:rounded-br-2xl md:mt-5 md:border-r-0 md:shadow-md md:shadow-slate-300`}
        >
          <Sidebar setSidebar={setSidebar} />
        </aside>
        <main className="mx-4 mt-5">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
