import { Navigate, useLocation, useNavigate } from "react-router";
import { User, PenTool, Repeat, Contact, Hash, Copy} from "lucide-react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import AuthAPI from "../../../services/AuthAPI";

export default function AdminNavbar() {
  /* Functions begin */
  
  const handleLogout = () => {
    AuthAPI.authGTFO();
  }

  const localToken = AuthAPI.getDecodedLocalToken();
  const isUserAdmin = localToken.roles.includes('ROLE_ADMIN');

  /* Functions end */

  const current_path = useLocation().pathname;
  
  let [navbarLinksDOM, setNavbarLinksDOM] = useState(
    <div className="flex items-center justify-center">
      <LoadingSpinner/>
    </div>
  );

  let tempNavbarLinksDOM = [];

  const navbar_links = [
    {
      name: "Self",
      slug: "manage-self",
      path: "/admin/manage/self",
      icon: Repeat,
      admin_only: false
    },
    {
      name: "Users",
      slug: "manage-users",
      path: "/admin/manage/users",
      icon: Contact,
      admin_only: true
    },
    {
      name: "Blog",
      slug: "manage-blog",
      path: "/admin/manage/blog",
      icon: PenTool,
      admin_only: false,
    },
    {
      name: "Products & Categories",
      slug: "manage-store",
      path: "/admin/manage/store",
      icon: Hash,
      admin_only: true
    },
  ];

  useEffect(() => {
    navbar_links.forEach((link_item) => {
      if (link_item.admin_only)
      {
        if (!isUserAdmin)
        {
          // Skip to next link
          return;
        }
      }

      if (current_path === link_item.path)
      {
        tempNavbarLinksDOM.push(
          <Link to='/admin' key={link_item.slug} className="flex items-center p-3 space-x-4 text-white transition-all bg-black hover:bg-gray-900">
            <div>
              <link_item.icon/>
            </div>
            <div>
              <p className="italic font-bold leading-none">{link_item.name}</p>
            </div>
          </Link>
        );
      }
      else
      {
        tempNavbarLinksDOM.push(
          <Link to={link_item.path} key={link_item.slug} className="flex items-center p-3 space-x-4 transition-all hover:bg-gray-300">
            <div>
              <link_item.icon/>
            </div>
            <div>
              <p className="leading-none">{link_item.name}</p>
            </div>
          </Link>
        );
      }
    });

    setNavbarLinksDOM(tempNavbarLinksDOM);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAdmin]);

  return (
    <div className="flex flex-col w-64 bg-gray-200 shadow">
      <p className="py-3 text-2xl font-bold text-center border-b border-gray-800 rounded-b">Administration</p>
      <div className="flex-grow mt-2">
        {navbarLinksDOM}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-3/4 px-4 py-2 mb-4 text-center text-white transition-colors bg-black rounded-lg cursor-pointer hover:bg-gray-800" onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
}