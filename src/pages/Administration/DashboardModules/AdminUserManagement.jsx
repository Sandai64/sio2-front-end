import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import AdminNavbar from "./AdminNavbar";
import AdminAPI from "../../../services/AdminAPI";
import { Contact, Plus, X } from "lucide-react";
import AuthAPI from "../../../services/AuthAPI";
import FullscreenLoader from "../../FullscreenLoader";

export default function AdminUserManagementModule() {
  const [users_list, set_users_list] = useState(<LoadingSpinner/>);
  const [showFullscreenLoader, setShowFullscreenLoader] = useState(false);
  const [infoBanner, setInfoBanner] = useState(false);
  const [showAccountCreationModal, setShowAccountCreationModal] = useState(false);

  const [newUsername, setNewUsername] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newRole, setNewRole]         = useState(['ROLE_WRITER']);

  const handleUserCreateSubmit = async (e) => {
    e.preventDefault();

    setShowFullscreenLoader(true);
    await AdminAPI.createUser(newUsername, newPassword, newRole);
    setNewUsername();
    setNewPassword();
    window.location.reload();
  }

  const handleResetPassword = async (username) => {
    setShowFullscreenLoader(true);
    await AdminAPI.resetUserPassword(username);
    setShowFullscreenLoader(false);

    setInfoBanner(<div className="p-2 border rounded-lg shadow bg-emerald-600">
        <p>Password reset has been requested for user <span className="font-bold">{ username }</span>.</p>
      </div>);

    setTimeout(() => setInfoBanner(false), 5000);
  }

  const handleDeleteUser = async (username) => {
    setShowFullscreenLoader(true);
    await AdminAPI.deleteUser(username);
    setShowFullscreenLoader(false);

    window.location.reload();
  }

  const handleNewUsernameChange = async (e) => { setNewUsername(e.target.value) }
  const handleNewPasswordChange = async (e) => { setNewPassword(e.target.value) }

  useEffect(() => {
    AdminAPI.getAllUsers().then((usersList) => {
      let completeUserList = [];
  
      usersList.forEach((userElement) => {
        const isCurrentUserAdmin = (userElement.username === 'admin');

        completeUserList.push(
          <div key={`user-unique-${userElement.id}`} className="flex items-center justify-between px-4 py-2 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Contact size={32}/>
              <div>
                <p className="text-lg font-medium leading-tight">{userElement.username}</p>
                <p className="text-sm italic leading-none">Has written {userElement.blogPages.length} blog pages.</p>
              </div>
            </div>

            { isCurrentUserAdmin ? (
              <div className="flex items-center space-x-4">
                <span className="p-2 text-white line-through transition-all rounded-lg bg-zinc-500">Reset password</span>
                <span className="p-2 text-white line-through transition-all rounded-lg bg-zinc-500">Delete</span>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <span onClick={() => handleResetPassword(userElement.username)} className="p-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900">Reset password</span>
                <span onClick={() => handleDeleteUser(userElement.username)} className="p-2 text-white transition-all bg-red-500 rounded-lg shadow cursor-pointer hover:bg-gray-900">Delete</span>
              </div>
            ) }

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
        <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>User Management</p>
        <p className="mb-2 italic font-light">Users list</p>
        { infoBanner }
        <div className="grid grid-cols-1 gap-4">
          { users_list }
          <div className="flex items-center justify-start px-4 py-2 border rounded-lg">
            <div className="flex items-center justify-center p-2 space-x-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">
              <Plus/>
              <p onClick={() => setShowAccountCreationModal(true)}>Create new</p>
            </div>
          </div>
        </div>
      </div>
      { showFullscreenLoader ? (
        <div className='absolute z-50 flex items-center justify-center w-full h-screen bg-slate-900 bg-opacity-30'>
          <FullscreenLoader/>
        </div>
      ) : null }

      { showAccountCreationModal ? (
        <div className="absolute flex items-center justify-center w-full h-screen bg-opacity-50 bg-zinc-900">
          {/* Account creation modal window */}
          <div className="w-1/2 bg-white border rounded-lg shadow">
            <div className="flex items-center justify-between px-2 py-3 border-b">
              <p>Create a new user...</p>
              <X onClick={() => setShowAccountCreationModal(false)} className="cursor-pointer"/>
            </div>
            <div className="px-2 py-3">
              <form onSubmit={handleUserCreateSubmit}>
                <p>Username :</p>
                <input required type="text" value={newUsername} onChange={handleNewUsernameChange} className="border rounded-lg"/>

                <p>Password :</p>
                <input required type="text" value={newPassword} onChange={handleNewPasswordChange} className="border rounded-lg"/>

                <hr className="mt-3 mb-2"/>
                <input type="submit" value="Create this user" className="px-3 py-2 text-white bg-black rounded-lg cursor-pointer hover:bg-slate-900" />
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}