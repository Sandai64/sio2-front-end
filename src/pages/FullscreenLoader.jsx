import '../styles/output.css';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

export default function FullscreenLoader() {
  return (
    <div className='container flex flex-col items-center justify-center h-screen'>
      <LoadingSpinner/>
      <p className='mt-4 text-lg font-black'>Loading</p>
    </div>
  );
}