import { Command } from "lucide-react";
import AdminNavbar from "./DashboardModules/AdminNavbar";

export default function AdminDashboard() {
  return (
    <div className='flex h-screen'>
      <AdminNavbar/>
      <div className="flex flex-col items-center justify-center flex-grow">
        <Command size={96}/>
        <p className="mt-4 text-lg font-bold">Welcome to the administrative panel</p>
        <p className="italic leading-snug">Use the buttons on the left to take actions.</p>
      </div>
    </div>
  );
}


