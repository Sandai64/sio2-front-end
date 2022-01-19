import '../styles/output.css';
import { Edit3, AtSign, Cpu, ExternalLink } from 'lucide-react';

export default function Credits() {
  return (
    <div>
      <div className='container mx-auto mt-16'>
        <p className='px-2 py-1 text-4xl font-black border-b border-black rounded-b shadow-lg w-max'>About The Development & Credits</p>
        <div className='flex mt-8 space-x-8'>
          <img src='/img/erwan.jpg' className='w-64 shadow-lg rounded-xl' alt='Erwan Egasse'/>
          <div>
            <div className='flex items-center mb-1 space-x-2 border-b border-gray-800 w-max'>
              <Edit3 size={18}/>
              <p className='text-xl'>Developed by</p>
            </div>
            <p className='font-bold'>Erwan Egasse</p>

            <div className='flex items-center mt-2 mb-1 space-x-2 border-b border-gray-800 w-max'>
              <AtSign size={18}/>
              <p className='text-xl'>Contact information</p>
            </div>
            <p>Email — contact@erwan.sh</p>

            <div className='flex items-center mt-2 mb-1 space-x-2 border-b border-gray-800 w-max'>
              <Cpu size={18}/>
              <p className='text-xl'>Technologies used</p>
            </div>
            <p><a href='https://github.com/erwangse/sio2-front-end' className='flex items-center'><ExternalLink size={18} className='mr-1'/> Front-end — ReactJS, TailwindCSS</a></p>
            <p><a href='https://github.com/erwangse/sio2-back-end' className='flex items-center'><ExternalLink size={18} className='mr-1'/> Back-end — SymfonyPHP</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}