import AdminNavbar from "./AdminNavbar";
import { ClipboardX } from "lucide-react";

export default function AdminSelfManagementModule() {

  return (
    <div className='flex h-screen'>
      <AdminNavbar/>
      <div className="flex-grow p-4">
        <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>WIP: Self Management</p>
        <p className="mb-2 italic font-light">Account settings</p>
        <div className="flex pt-4 space-x-4">
          <div className="flex p-2 space-x-2 text-center text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:font-bold hover:bg-gray-900">
            <ClipboardX/>
            <p>Change password</p>
          </div>
        </div>
      </div>
    </div>
  );
}
