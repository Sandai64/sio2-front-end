import AuthAPI from '../../services/AuthAPI';

// Admin pages
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import { useEffect, useState } from 'react';
import FullscreenLoader from '../FullscreenLoader';

export default function AdminHandler() {
  /*
  * This component automatically checks for user authorization & authentication
  * And *returns* pages corresponding to the situation.
  * Thus, achieving administration through a single, immutable URL that is '/admin'
  */

  let [shownScreen, setShownScreen] = useState(<FullscreenLoader/>);

  useEffect(() => {
    AuthAPI.authIsAuthenticated()
    .then((r) => {
      if (r) {
        setShownScreen(<AdminDashboard/>);
      } else {
        setShownScreen(<AdminLogin/>)
      }
    })
  }, []);

  return (<div id='admin-handler-container'>{shownScreen}</div>);
}