import React , { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(true); 
  return (
    <>
      <main className="grid grid-cols-4 lg:grid-cols-6 grid-rows-12 h-screen">

        {/* SIDEBAR */}
         <aside className={`${isOpen ? "col-span-1" : "hidden" } row-span-12 transition-all duration-500`}>
          <Sidebar/>
        </aside>
       

        {/* HEADER */}
        <header className={` ${isOpen?  "col-span-3 lg:col-span-5" : " col-span-4 lg:col-span-6 "} transition-all duration-500 `}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

        {/* CONTENT */}
        <section className={` ${isOpen?  "col-span-3 lg:col-span-5" : " col-span-4 lg:col-span-6 "} transition-all duration-500 overflow-y-auto row-span-11 `}>
           {children}
        </section>

      </main>
    </>
  );
};

export default Layout;
