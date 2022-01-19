import AdminNavbar from "./AdminNavbar";

export default function AdminSelfManagementModule() {

  return (
    <div className='flex h-screen'>
      <AdminNavbar/>
      <div className="flex-grow p-4">
        <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>WIP: Self Management</p>
        <p className="mb-2 italic font-light">Account settings</p>
        <div className="grid grid-cols-4 gap-4">
          
        </div>
      </div>
    </div>
  );
}