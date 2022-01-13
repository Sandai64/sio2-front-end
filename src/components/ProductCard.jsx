import '../styles/output.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ProductCard({ title, excerpt, price, imageURL, linkID }) {
  return (
    <Link to={`/product/${linkID}`} className={'default overflow-hidden border rounded-lg shadow transition-all transform hover:scale-105'}>
      <p className='flex items-center px-2 py-1 text-lg font-bold border-b'><span className='flex-grow'>{title}</span><ExternalLink size={20}/></p>
      <div className='relative'>
        <img src={`/img/${imageURL}`} alt={title}/>
        <p className='absolute bottom-0 right-0 flex items-center justify-end flex-grow p-2 text-right'>
          <span className='px-2 py-1 text-black bg-white rounded-lg'>{`${price} €`}</span>
        </p>
      </div>
      <p className='pt-2 mx-2 mb-2 text-sm border-t line-clamp-1'>{excerpt}</p>
      
    </Link>
  );
}