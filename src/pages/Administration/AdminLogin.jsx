import { useEffect, useState } from 'react';
import '../../styles/output.css';
import { curtain } from 'hero-patterns';
import AuthAPI from '../../services/AuthAPI';

export default function AdminLogin() {

  useEffect(() => {
    // MOUNT HOOK
    // Setup page style
    let pageBGEl = document.querySelector('body');
    pageBGEl.style.backgroundImage = curtain('#ffffff', 0.1);
    pageBGEl.style.backgroundColor = '#1a1a1a';

    return () => {
      // UNMOUNT HOOK
      // Reset page style
      let pageBGEl = document.querySelector('body');
      pageBGEl.style.backgroundImage = null;
      pageBGEl.style.backgroundColor = null;
    };
  }, []);

  /* Fetch all products */
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [errorBanner, setErrorBanner] = useState();

  // TODO Fix prevent default hooks
  async function handleSubmit(e) {
    e.preventDefault();
    const token = await AuthAPI.authLogin(username, password);

    if (token.code && token.code === 401) {
      setErrorBanner(
        <div className='flex items-center justify-center py-2 my-4 text-white bg-red-600 rounded-lg animate-pulse'>
          <p className='leading-none'>Invalid credentials</p>
        </div>
      );
    } else if (token.token) {
      setErrorBanner(
        <div className='flex flex-col items-center justify-center py-2 my-2 space-y-2 text-white rounded-lg bg-cyan-600'>
          <p className='font-extrabold leading-none text-center'>Successfully logged-in !</p>
          <p className='italic leading-none text-center'>You'll be redirected in a few seconds...</p>
        </div>
      );

      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }

  async function handleUsername(e) {
    setUsername(e.target.value);
  }

  async function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div className='container flex items-center justify-center h-screen px-4 -mt-16 sm:px-0 sm:mx-auto'>
        <div className='w-4/12 p-2 bg-white rounded-lg shadow-lg'>
          <p className='pb-1 mb-2 text-2xl text-center border-b border-gray-800'><span className='font-bold'>Afterwork</span> ··· Login</p>
          {errorBanner}
          <form onSubmit={handleSubmit}>
            <input placeholder='Username' required type={'text'} className='w-full px-1 py-1 mb-1 border rounded-lg' value={username} onChange={handleUsername}/>
            <input placeholder='Password' required type={'password'} className='w-full px-1 py-1 border rounded-lg' value={password} onChange={handlePassword}/>
            <div className='flex justify-center w-full p-1 mt-2'>
              <input type='submit' className='p-2 px-4 text-sm text-white transition-colors bg-black rounded-lg cursor-pointer hover:bg-gray-800' value={'Submit form'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}