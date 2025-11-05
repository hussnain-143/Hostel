import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Building2,
  Wallet,
  ClipboardList,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const menu = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    {
      name: "Student",
      link: "#",
      icon: <Users size={18} />,
      sub: [
        { name: "Add Student", link: "/student/add" },
        { name: "Student List", link: "/student/list" },
      ],
    },
    {
      name: "Rooms",
      link: "#",
      icon: <Building2 size={18} />,
      sub: [
        { name: "Add Rooms", link: "/rooms/add" },
        { name: "Rooms List", link: "/rooms/list" },
      ],
    },
    { name: "Fees", link: "/fees", icon: <Wallet size={18} /> },
    { name: "Attendance", link: "/attendance", icon: <ClipboardList size={18} /> },
    { name: "Complaints", link: "/complaints", icon: <MessageSquare size={18} /> },
  ];

  return (
    <aside className="bg-gradient-to-b from-cyan-600 to-cyan-800 h-screen p-5 text-white shadow-xl border-r border-cyan-400/30">
      <h1 className="text-2xl font-bold mb-10 tracking-wide">Admin Panel</h1>

      <nav className="flex flex-col gap-3">

        {menu.map((item, i) =>
          item.sub ? (
            <div key={i} className="group">
              <div className="hover:bg-cyan-700/70 p-2 rounded flex justify-between items-center transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  {item.icon} {item.name}
                </div>
                <ChevronRight size={18} className="transition-all group-hover:rotate-90" />
              </div>

              <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 mt-1">
                {item.sub.map((sub, j) => (
                  <NavLink
                    key={j}
                    to={sub.link}
                    className={({ isActive }) =>
                      `block pl-10 pr-2 py-1 rounded text-sm ${
                        isActive ? "bg-cyan-700" : "hover:bg-cyan-700/50"
                      }`
                    }
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                `p-2 rounded flex items-center gap-3 transition-all ${
                  isActive ? "bg-cyan-700" : "hover:bg-cyan-700/70"
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          )
        )}

      </nav>
    </aside>
  );
};

export default Sidebar;
