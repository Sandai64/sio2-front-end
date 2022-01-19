import '../styles/output.css';
import { Loader2 } from 'lucide-react';

// import { Link } from "react-router-dom";

export default function LoadingSpinner() {
    return (
      <Loader2 color='black' size={64} className='animate-spin'/>
    );
}