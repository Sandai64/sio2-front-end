import '../styles/output.css';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div>
      <div className='container px-4 mx-auto mt-16 sm:px-0'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'>About Us</p>
        <div className='flex justify-between mt-8 space-x-8'>
          <div>
            <p className='text-xl font-bold'>Welcome to Your Happy Place.</p>
            <p className='w-3/4'>
              ...Where the home team is always playing, your favorite beer is on draft, the cocktails are made with extra love, and the kitchen is serving up some of the best bar food you'll find.
            </p>
            <div className='flex mt-8'>
              <div onClick={'showNewsletterActionModal'} className='p-4 font-bold leading-none text-white transition-all bg-black rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-900'>Subscribe to our newsletter</div>
            </div>
          </div>
          <img src='/img/banner.jpg' className='hidden mx-auto shadow-lg sm:block sm:h-48 xl:h-96 rounded-xl' alt='Erwan Egasse'/>
        </div>
      </div>
      <Link to='/credits' className='absolute bottom-0 right-0 flex items-center p-4 m-8 space-x-1 text-white transition-all bg-black rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:bg-gray-900'>
        <ArrowUpRight color='white'/>
        <p className='leading-none'>Check out the developer !</p>
      </Link>
      {'WIP: newsletterActionModal'}
    </div>
  );
}