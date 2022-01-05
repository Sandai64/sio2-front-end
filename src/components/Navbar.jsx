import '../styles/output.css';
import { Flame } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <nav className='fixed top-0 flex flex-grow w-full py-3 bg-black shadow-lg select-none'>
        <Link to='/' className='flex items-center px-4 space-x-2'>
          <Flame color='white' size={28}/>
          <p className='text-2xl leading-none text-white'>Afterwork</p>
        </Link>
        <ul className='flex items-center justify-start flex-grow gap-4 ml-4 text-white'>
          <li>
            <Link to='/products' className='px-3 py-1 transition-all rounded hover:bg-gray-400 hover:font-bold hover:text-black'>Products</Link>
          </li>
          <li>
            <Link to='/categories' className='px-3 py-1 transition-all rounded hover:bg-gray-400 hover:font-bold hover:text-black'>Categories</Link>
          </li>
          <li>
            <Link to='/blog' className='px-3 py-1 transition-all rounded hover:bg-gray-400 hover:font-bold hover:text-black'>Blog</Link>
          </li>
        </ul>
        <div className='flex items-center justify-end px-4 text-white'>
          <Link to='/about' className='px-2 py-1 transition-all rounded hover:bg-gray-400 hover:font-bold hover:text-black'>About Us</Link>
        </div>
      </nav>
    );
}