import '../styles/output.css';
import { Unlink } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img className='mb-4 rounded-lg shadow-lg w-96' src='/img/fire.gif' />
      <div className='flex p-4 space-x-4 select-none'>
        <Unlink color='black' size={64}/>
        <div>
          <p className='text-4xl font-extrabold'>404</p>
          <p className='italic'>The page you're looking for was not found.</p>
        </div>
      </div>
    </div>
  );
}