import '../styles/output.css';
import { Coffee } from 'lucide-react';

export default function Home() {

  return (
    <div className='homepage-bg'>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex p-4 -mt-64 space-x-4 bg-white border rounded shadow-xl select-none mr-96'>
          <Coffee color='black' size={64}/>
          <div>
            <p className='text-4xl'>Welcome.</p>
            <p className='italic'>Click on the buttons above to navigate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}