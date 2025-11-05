"use client";

import { Users, Building2, Wallet, ArrowRight, AlertTriangle } from "lucide-react";

const Dashboard = () => {

  const complaints = [
    { _id: 1, title: "Room AC not working", status: "Pending" },
    { _id: 2, title: "Mess food is low quality", status: "In Progress" },
    { _id: 3, title: "Water leakage in bathroom", status: "Resolved" },
  ]

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-4xl font-extrabold tracking-tight text-cyan-800">
        Dashboard
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Total Students</h3>
            <p className="text-4xl font-bold mt-2">150</p>
          </div>
          <Users size={42} className="opacity-90" />
        </div>

        <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Available Rooms</h3>
            <p className="text-4xl font-bold mt-2">45</p>
          </div>
          <Building2 size={42} className="opacity-90" />
        </div>

        <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Pending Fees</h3>
            <p className="text-4xl font-bold mt-2">$12,500</p>
          </div>
          <Wallet size={42} className="opacity-90" />
        </div>

        <div className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Pending Complaints</h3>
            <p className="text-4xl font-bold mt-2">12</p>
          </div>
          <AlertTriangle size={42} className="opacity-90" />
        </div>

      </div>

      {/* QUICK LINKS */}
      <div className="bg-white p-6 shadow rounded-xl">
        <h3 className="text-xl font-semibold mb-3 text-cyan-700">Quick Actions</h3>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2 cursor-pointer">
            Add Student <ArrowRight size={18} />
          </button>
          <button className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 flex items-center gap-2 cursor-pointer">
            Assign Room <ArrowRight size={18} />
          </button>
          <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-2 cursor-pointer">
            Collect Fee <ArrowRight size={18} />
          </button>
          <button className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 flex items-center gap-2 cursor-pointer">
            View Complaints <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* COMPLAINTS GRID */}
      <div className="bg-white p-6 shadow rounded-xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-700">
          Complaints
        </h3>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 font-medium">Complaint</th>
              <th className="py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(item => (
              <tr key={item._id} className="border-b last:border-none">
                <td className="py-3">{item.title}</td>
                <td className="py-3">
                  {item.status === "Pending" && (
                    <span className="px-2 py-1 text-xs bg-yellow-200 text-yellow-900 rounded-full">{item.status}</span>
                  )}
                  {item.status === "In Progress" && (
                    <span className="px-2 py-1 text-xs bg-blue-200 text-blue-900 rounded-full">{item.status}</span>
                  )}
                  {item.status === "Resolved" && (
                    <span className="px-2 py-1 text-xs bg-green-200 text-green-900 rounded-full">{item.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default Dashboard;
