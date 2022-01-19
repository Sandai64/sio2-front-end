import { Plus } from "lucide-react";
import AdminNavbar from "./AdminNavbar"

export default function AdminStoreManagementModule() {

  return (
    <div className='flex h-screen'>
      <AdminNavbar/>
      <div className="flex-grow p-4">
        <p className='px-2 py-1 mb-4 text-2xl font-black border-b border-black rounded-b shadow-lg w-max'>WIP: Store Management</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mb-2 italic font-light">Store products</p>
            <div className="grid grid-cols-1 gap-4">
              {/*users_list*/}
              <div className="flex items-center justify-start px-4 py-2 border rounded-lg">
                <div className="flex items-center justify-center p-2 space-x-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">
                  <Plus/>
                  <p>Create new</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 italic font-light">Store categories</p>
            <div className="grid grid-cols-1 gap-4">
              {/*users_list*/}
              <div className="flex items-center justify-start px-4 py-2 border rounded-lg">
                <div className="flex items-center justify-center p-2 space-x-2 text-white transition-all bg-black rounded-lg shadow cursor-pointer hover:bg-gray-900 hover:font-bold">
                  <Plus/>
                  <p>Create new</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}