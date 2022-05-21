import { useState } from 'react';
import AdminAPI from '../../../services/AdminAPI';
import FullscreenLoader from '../../FullscreenLoader';
import AdminNavbar from "./AdminNavbar";

export default function AdminSelfManagementModule() {
  const [newPassword, setNewPassword] = useState();
  const [showFullscreenLoader, setShowFullscreenLoader] = useState(false);

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setShowFullscreenLoader(true);

    let response = await AdminAPI.updateUserPassword(newPassword);
    console.log(response);
    
    window.location.reload();
    setShowFullscreenLoader(false);
  }

  return (
    <div className='flex h-screen'>
      <AdminNavbar/>
      <div className="flex-grow p-4">
        <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>Self Management</p>
        <p className="mb-2 italic font-light">Account settings</p>
        <div className="grid grid-cols-4 gap-4">
          <form onSubmit={handlePasswordUpdate} className="flex flex-col space-y-4">
            <input required onChange={handlePasswordChange} value={newPassword} placeholder="New password..." className="px-2 py-1 border rounded-lg"/>
            <input type='submit' className="px-2 py-1 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900" value="Update your password"/>
          </form>
        </div>
      </div>
      { showFullscreenLoader ? (
        <div className='absolute flex items-center justify-center w-full h-screen bg-slate-900 bg-opacity-30'>
          <FullscreenLoader/>
        </div>
      ) : null }
    </div>
  );
}