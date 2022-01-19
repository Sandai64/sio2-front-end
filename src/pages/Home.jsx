import '../styles/output.css';
import { Coffee } from 'lucide-react';

export default function Home() {

  return (
    <div className='flex items-center justify-center h-screen homepage-bg'>
      <div className='flex p-4 m-0 bg-white border rounded shadow-xl select-none gap-x-4'>
        <Coffee color='black' size={64}/>
        <div>
          <p className='text-4xl'>Welcome.</p>
          <p className='italic'>Click on the buttons above to navigate.</p>
        </div>
      </div>
    </div>
  );
}