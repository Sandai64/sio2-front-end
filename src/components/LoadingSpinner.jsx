import '../styles/output.css';
import { Loader } from 'lucide-react';

// import { Link } from "react-router-dom";

export default function LoadingSpinner() {
    return (
      <Loader color='black' size={64} className='animate-spin'/>
    );
}