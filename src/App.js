import './styles/output.css'
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components for page layout
import Navbar from './components/Navbar';

// Components for route setup
import NotFound   from './pages/404';
import Blog       from './pages/Blog';
import Categories from './pages/Categories';
import Home       from './pages/Home';
import Products   from './pages/Products';
import Credits    from './pages/Credits';
import About      from './pages/About';

import SingleProductView      from './pages/SingleProductView';
import SingleCategoryView     from './pages/SingleCategoryView';
import AdminHandler           from './pages/Administration/AdminHandler';
import SingleBlogPostView     from './pages/SingleBlogPostView';
import SingleBlogCategoryView from './pages/SingleBlogCategoryView';

import AdminBlogManagementModule  from './pages/Administration/DashboardModules/AdminBlogManagement';
import AdminUserManagementModule  from './pages/Administration/DashboardModules/AdminUserManagement';
import AdminSelfManagementModule  from './pages/Administration/DashboardModules/AdminSelfManagement';
import AdminStoreManagementModule from './pages/Administration/DashboardModules/AdminStoreManagement';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='select-none pt-14'> {/* Padding : Workaround to navbar being absolute */}
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<SingleProductView/>}/>

          <Route path='/categories' element={<Categories/>}/>
          <Route path='/category/:id' element={<SingleCategoryView/>}/>

          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/category/:id' element={<SingleBlogCategoryView/>}/>
          <Route path='/blog/post/:id' element={<SingleBlogPostView/>}/>

          <Route path='/credits' element={<Credits/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='/admin' element={<AdminHandler/>}/>
          <Route path='/admin/manage/users' element={<AdminUserManagementModule/>}/>
          <Route path='/admin/manage/blog' element={<AdminBlogManagementModule/>}/>
          <Route path='/admin/manage/self' element={<AdminSelfManagementModule/>}/>
          <Route path='/admin/manage/store' element={<AdminStoreManagementModule/>}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
