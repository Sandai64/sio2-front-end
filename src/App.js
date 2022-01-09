import './styles/output.css'
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components for page layout
import Navbar from './components/Navbar';

// Components for route setup
import NotFound   from './pages/404';
import Blog       from './pages/Blog';
import Categories from './pages/Categories';
import Home       from './pages/Home';
import Products   from './pages/Products';
import About      from './pages/About';
import SingleProductView from './pages/SingleProductView';

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
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
