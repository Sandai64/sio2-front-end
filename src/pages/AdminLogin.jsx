import { useEffect, useState } from 'react';
import '../styles/output.css';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { curtain } from 'hero-patterns';

export default function AdminLogin() {
  /* Fetch all products */
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();


  let pageBGEl = document.querySelector('body');
  pageBGEl.style.backgroundImage = curtain('#ffffff', 0.1);
  pageBGEl.style.backgroundColor = '#1a1a1a';
  
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div className='container flex items-center justify-center h-screen px-4 -mt-16 sm:px-0 sm:mx-auto'>
        <div className='w-1/4 p-2 bg-white rounded-lg shadow-lg'>
          <p className='pb-1 mb-2 text-2xl text-center border-b border-gray-800'><span className='font-bold'>Afterworks</span> | Login</p>
          <form onSubmit={handleSubmit}>
            <input placeholder='Username' type={'text'} className='w-full px-1 mb-1 border rounded-lg' value={username} onChange={handleUsername}/>
            <input placeholder='Password' type={'password'} className='w-full px-1 border rounded-lg' value={password} onChange={handlePassword}/>
            <div className='flex justify-end w-full p-1 mt-2'>
              <input type='submit' className='p-1 px-2 text-sm text-white transition-colors bg-black rounded-lg hover:bg-gray-800' value={'Submit form'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}