import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import AdminNavbar from "./AdminNavbar";
import AdminAPI from "../../../services/AdminAPI";
import { Contact, Plus } from "lucide-react";
import AuthAPI from "../../../services/AuthAPI";

export default function AdminUserManagementModule() {
  const [users_list, set_users_list] = useState(<LoadingSpinner/>);
  
  useEffect(() => {
    AdminAPI.getAllUsers().then((usersList) => {
      let completeUserList = [];
  
      usersList.forEach((userElement) => {
        completeUserList.push(
          <div key={`user-unique-${userElement.id}`} className="flex items-center justify-between px-4 py-2 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Contact size={32}/>
              <div>
                <p className="text-lg font-medium leading-tight">{userElement.username}</p>
                <p className="text-sm italic leading-none">Has written {userElement.blogPages.length} blog pages.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="p-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">Reset password</span>
              <span className="p-2 text-white transition-all bg-red-500 rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">Delete</span>
            </div>
          </div>
        );
      });
  
      set_users_list(completeUserList);
    }).catch(e => {
      // API call error, we must force login
      AuthAPI.authGTFO();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex h-screen'>
      <AdminNavbar/>
      <div className="flex-grow p-4">
      <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>WIP: User Management</p>
      <p className="mb-2 italic font-light">Users list</p>
      <div className="grid grid-cols-1 gap-4">
        {users_list}
        <div className="flex items-center justify-start px-4 py-2 border rounded-lg">
          <div className="flex items-center justify-center p-2 space-x-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">
            <Plus/>
            <p>Create new</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}